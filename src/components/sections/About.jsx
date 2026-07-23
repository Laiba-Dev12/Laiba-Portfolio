import { motion } from "framer-motion";
import {
  FaCode,
  FaRobot,
  FaFileAlt,
  FaGraduationCap,
} from "react-icons/fa";

import { portfolioData } from "../../data/portfolioData";


function About() {

  const { personal, about } = portfolioData;


  const cards = [
    {
      icon: <FaCode />,
      title: "MERN Stack Developer",
      text:
        "Building modern full-stack applications using React.js, Node.js, Express.js and MongoDB.",
    },

    {
      icon: <FaRobot />,
      title: "AI Integration",
      text:
        "Working with AI tools and integrating intelligent features into web applications.",
    },

    {
      icon: <FaFileAlt />,
      title: "Technical Documentation",
      text:
        "Creating SRS, Synopsis, UML, ERD, DFD, Thesis Setup and professional presentations.",
    },

    {
      icon: <FaGraduationCap />,
      title: "BS Information Technology",
      text:
        "Currently pursuing BS IT from Elite College affiliated with GCUF (2024 - 2028).",
    },
  ];


  return (

    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-slate-950
        py-24
      "
    >

      <div className="
        mx-auto
        max-w-7xl
        px-6
      ">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          viewport={{
            once:true
          }}

          className="
            mb-16
            text-center
          "

        >

          <h2 className="
            text-4xl
            font-black
            text-white
            md:text-6xl
          ">

            About
            <span className="text-cyan-400">
              {" "}Me
            </span>

          </h2>


          <p className="
            mx-auto
            mt-5
            max-w-3xl
            leading-8
            text-slate-400
          ">

            A passionate Information Technology student and MERN Stack
            Developer focused on building modern web solutions and
            professional software documentation.

          </p>


        </motion.div>




        <div className="
          grid
          items-center
          gap-12
          lg:grid-cols-2
        ">



          {/* Content */}


          <motion.div

            initial={{
              opacity:0,
              x:-60
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.8
            }}

            viewport={{
              once:true
            }}

          >

            <h3 className="
              text-3xl
              font-bold
              text-white
            ">

              Who is {personal.firstName}?

            </h3>



            <p className="
              mt-6
              leading-8
              text-slate-300
            ">

              {personal.description}

            </p>



            <p className="
              mt-5
              leading-8
              text-slate-400
            ">

              {about.description}

            </p>



            <div className="
              mt-8
              flex
              flex-wrap
              gap-3
            ">


              {about.highlights.map((item,index)=>(

                <span
                  key={index}
                  className="
                    rounded-full
                    border
                    border-cyan-500/30
                    bg-cyan-500/10
                    px-4
                    py-2
                    text-sm
                    text-cyan-300
                  "
                >

                  {item}

                </span>

              ))}


            </div>


          </motion.div>





          {/* Cards */}


          <motion.div

            initial={{
              opacity:0,
              x:60
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.8
            }}

            viewport={{
              once:true
            }}

            className="
              grid
              gap-6
              sm:grid-cols-2
            "

          >


            {cards.map((card,index)=>(


              <motion.div

                key={index}

                whileHover={{
                  y:-10
                }}

                className="
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-900/70
                  p-6
                  backdrop-blur-xl
                "

              >

                <div className="
                  mb-5
                  text-3xl
                  text-cyan-400
                ">

                  {card.icon}

                </div>


                <h4 className="
                  text-xl
                  font-bold
                  text-white
                ">

                  {card.title}

                </h4>


                <p className="
                  mt-3
                  text-sm
                  leading-6
                  text-slate-400
                ">

                  {card.text}

                </p>


              </motion.div>


            ))}


          </motion.div>



        </div>


      </div>


    </section>

  );
}


export default About;