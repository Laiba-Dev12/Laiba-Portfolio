import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";


function Skills() {

  const { skills } = portfolioData;


  return (

    <section
      id="skills"
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

            My

            <span className="
              text-cyan-400
            ">

              {" "}Skills

            </span>

          </h2>


          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-slate-400
          ">

            Technologies and tools I use to build modern
            full-stack web applications and professional solutions.

          </p>


        </motion.div>




        {/* Skills Grid */}


        <div className="
          grid
          gap-8
          md:grid-cols-2
        ">


          {skills.map((skill,index)=>(


            <motion.div

              key={skill.name}

              initial={{
                opacity:0,
                x:index % 2 === 0 ? -40 : 40
              }}

              whileInView={{
                opacity:1,
                x:0
              }}

              transition={{
                duration:0.6,
                delay:index * 0.05
              }}

              viewport={{
                once:true
              }}

              className="
                rounded-2xl
                border
                border-slate-700
                bg-slate-950
                p-6
                transition
                hover:border-cyan-400
              "

            >


              <div className="
                mb-4
                flex
                items-center
                justify-between
              ">


                <h3 className="
                  text-lg
                  font-bold
                  text-white
                ">

                  {skill.name}

                </h3>


                <span className="
                  font-bold
                  text-cyan-400
                ">

                  {skill.level}%

                </span>


              </div>




              <div className="
                h-3
                overflow-hidden
                rounded-full
                bg-slate-800
              ">


                <motion.div

                  initial={{
                    width:0
                  }}

                  whileInView={{
                    width:`${skill.level}%`
                  }}

                  transition={{
                    duration:1,
                    delay:0.3
                  }}

                  viewport={{
                    once:true
                  }}

                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-600
                  "

                />


              </div>


            </motion.div>


          ))}


        </div>



      </div>


    </section>

  );
}


export default Skills;