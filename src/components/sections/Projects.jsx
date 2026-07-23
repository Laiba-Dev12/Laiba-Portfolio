import { motion } from "framer-motion";
import {
  FaGithub,
  FaPlay,
} from "react-icons/fa";

import { portfolioData } from "../../data/portfolioData";


function Projects() {

  const { projects } = portfolioData;


  return (

    <section
      id="projects"
      className="
        bg-slate-900
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

            Featured

            <span className="
              text-cyan-400
            ">

              {" "}Project

            </span>

          </h2>


          <p className="
            mt-5
            text-slate-400
          ">

            Real projects developed using modern technologies.

          </p>


        </motion.div>




        {/* Projects */}


        <div className="
          grid
          gap-10
        ">


          {projects.map((project,index)=>(


            <motion.div

              key={project.id}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.7,
                delay:index*0.1
              }}

              viewport={{
                once:true
              }}

              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-700
                bg-slate-950
                lg:flex
              "

            >


              {/* Image */}

              <div className="
                lg:w-1/2
                overflow-hidden
              ">

                <img

                  src={project.image}

                  alt={project.title}

                  className="
                    h-full
                    min-h-[350px]
                    w-full
                    object-cover
                    transition
                    duration-500
                    hover:scale-110
                  "

                />

              </div>




              {/* Content */}


              <div className="
                flex
                flex-col
                justify-center
                p-8
                lg:w-1/2
              ">


                <span className="
                  text-sm
                  font-semibold
                  text-cyan-400
                ">

                  {project.category}

                </span>



                <h3 className="
                  mt-4
                  text-3xl
                  font-black
                  text-white
                ">

                  {project.title}

                </h3>




                <p className="
                  mt-5
                  leading-8
                  text-slate-400
                ">

                  {project.description}

                </p>




                {/* Technologies */}


                <div className="
                  mt-6
                  flex
                  flex-wrap
                  gap-3
                ">


                  {project.technologies.map((tech,index)=>(


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

                      {tech}

                    </span>


                  ))}


                </div>





                {/* Buttons */}


                <div className="
                  mt-8
                  flex
                  flex-wrap
                  gap-4
                ">


                  <a

                    href={project.github}

                    target="_blank"

                    rel="noreferrer"

                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      bg-slate-800
                      px-6
                      py-3
                      text-white
                      transition
                      hover:bg-cyan-600
                    "

                  >

                    <FaGithub/>

                    GitHub

                  </a>




                  <a

                    href={project.demo}

                    target="_blank"

                    rel="noreferrer"

                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                      px-6
                      py-3
                      font-semibold
                      text-white
                    "

                  >

                    <FaPlay/>

                    Watch Demo

                  </a>



                </div>



              </div>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}


export default Projects;