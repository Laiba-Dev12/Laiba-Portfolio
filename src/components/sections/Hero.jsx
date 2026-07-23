import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";
import Typewriter from "./Typewriter";

function Hero() {
  const { hero, personal, social, stats } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Animated Background */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
          }}
          className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]"
        />
      </div>

      {/* Main Container */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">

              {hero.greeting}

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">

              {hero.heading}

            </h1>

            <div className="mt-6 text-3xl font-bold text-cyan-400 md:text-5xl">

              <Typewriter words={hero.typing} />

            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              {hero.shortDescription}

            </p>

                       {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
              >
                <FaDownload />
                Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-xl border border-cyan-500 px-7 py-4 font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-500 hover:text-white"
              >
                Contact Me
              </a>

            </div>

            {/* Social Icons */}

            <div className="mt-10 flex items-center gap-5">

              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-2xl text-white transition duration-300 hover:border-cyan-500 hover:bg-cyan-500"
              >
                <FaGithub />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-2xl text-white transition duration-300 hover:border-blue-500 hover:bg-blue-600"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative flex justify-center"
          >

            {/* Glow Ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[360px] w-[360px] rounded-full border border-cyan-400/30"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[430px] w-[430px] rounded-full border border-blue-500/20"
            />

            {/* Profile Image */}

            <motion.img
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.4,
              }}
              src={personal.profileImage}
              alt={personal.fullName}
              className="relative z-10 h-[340px] w-[340px] rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_60px_rgba(34,211,238,0.35)] md:h-[430px] md:w-[430px]"
            />

            {/* Floating Card 1 */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-0 top-16 rounded-2xl border border-slate-700 bg-slate-900/80 p-5 backdrop-blur-xl"
            >
              <h3 className="text-lg font-bold text-cyan-400">
                MERN Stack
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                React • Node • MongoDB
              </p>
            </motion.div>

            {/* Floating Card 2 */}

            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-10 right-0 rounded-2xl border border-slate-700 bg-slate-900/80 p-5 backdrop-blur-xl"
            >
              <h3 className="text-lg font-bold text-cyan-400">
                Documentation
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                SRS • UML • ERD • DFD
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>
            {/* Stats */}

      <div className="relative z-10 mx-auto mt-10 max-w-7xl px-6">

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                rounded-2xl
                border
                border-slate-700
                bg-slate-900/70
                p-6
                text-center
                backdrop-blur-xl
              "
            >

              <h3 className="text-3xl font-black text-cyan-400">

                {item.value}

              </h3>

              <p className="mt-2 text-slate-300">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Scroll Down */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-cyan-400
        "
      >

        <FaArrowDown size={24} />

      </motion.a>

    </section>
  );
}

export default Hero;
