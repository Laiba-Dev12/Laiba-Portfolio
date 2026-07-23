import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaRobot,
  FaFileAlt,
} from "react-icons/fa";

import { portfolioData } from "../../data/portfolioData";


function Services() {

  const { services } = portfolioData;


  const icons = [
    <FaCode />,
    <FaServer />,
    <FaRobot />,
    <FaFileAlt />,
  ];


  return (

    <section
      id="services"
      className="
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

            My

            <span className="
              text-cyan-400
            ">

              {" "}Services

            </span>

          </h2>


          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-slate-400
          ">

            Professional solutions for modern web development,
            AI integration and software documentation.

          </p>


        </motion.div>





        {/* Cards */}


        <div className="
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-4
        ">


          {services.map((service,index)=>(


            <motion.div

              key={service.id}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.6,
                delay:index * 0.1
              }}

              viewport={{
                once:true
              }}

              whileHover={{
                y:-12
              }}

              className="
                group
                rounded-3xl
                border
                border-slate-700
                bg-slate-900/70
                p-7
                backdrop-blur-xl
                transition
                hover:border-cyan-400
              "

            >


              {/* Icon */}

              <div className="
                mb-6
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-3xl
                text-white
                transition
                group-hover:scale-110
              ">

                {icons[index]}

              </div>




              <h3 className="
                text-xl
                font-bold
                text-white
              ">

                {service.title}

              </h3>




              <p className="
                mt-4
                leading-7
                text-slate-400
              ">

                {service.description}

              </p>



            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}


export default Services;