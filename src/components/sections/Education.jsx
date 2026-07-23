import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

import { portfolioData } from "../../data/portfolioData";


function Education() {

  const {
    education,
    experience,
  } = portfolioData;


  return (

    <section
      id="education"
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

            Education &

            <span className="
              text-cyan-400
            ">

              {" "}Experience

            </span>

          </h2>


        </motion.div>




        <div className="
          grid
          gap-10
          lg:grid-cols-2
        ">



          {/* Education */}


          <motion.div

            initial={{
              opacity:0,
              x:-50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.7
            }}

            viewport={{
              once:true
            }}

            className="
              rounded-3xl
              border
              border-slate-700
              bg-slate-900/70
              p-8
              backdrop-blur-xl
            "

          >


            <div className="
              flex
              items-center
              gap-4
            ">

              <div className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                bg-cyan-500/20
                text-3xl
                text-cyan-400
              ">

                <FaGraduationCap/>

              </div>


              <h3 className="
                text-3xl
                font-bold
                text-white
              ">

                Education

              </h3>


            </div>





            <div className="
              mt-8
              space-y-8
            ">


              {education.map((item,index)=>(


                <div
                  key={index}
                  className="
                    border-l-2
                    border-cyan-400
                    pl-6
                  "
                >

                  <h4 className="
                    text-xl
                    font-bold
                    text-white
                  ">

                    {item.degree}

                  </h4>


                  <p className="
                    mt-2
                    text-slate-300
                  ">

                    {item.institute}

                  </p>


                  <span className="
                    mt-2
                    inline-block
                    text-cyan-400
                  ">

                    {item.year}

                  </span>


                </div>


              ))}


            </div>


          </motion.div>






          {/* Experience */}


          <motion.div

            initial={{
              opacity:0,
              x:50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.7
            }}

            viewport={{
              once:true
            }}

            className="
              rounded-3xl
              border
              border-slate-700
              bg-slate-900/70
              p-8
              backdrop-blur-xl
            "

          >


            <div className="
              flex
              items-center
              gap-4
            ">


              <div className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                bg-blue-500/20
                text-3xl
                text-blue-400
              ">

                <FaBriefcase/>

              </div>


              <h3 className="
                text-3xl
                font-bold
                text-white
              ">

                Experience

              </h3>


            </div>





            <div className="
              mt-8
              space-y-8
            ">


              {experience.map((item,index)=>(


                <div
                  key={index}
                  className="
                    border-l-2
                    border-blue-400
                    pl-6
                  "
                >


                  <h4 className="
                    text-xl
                    font-bold
                    text-white
                  ">

                    {item.role}

                  </h4>



                  <p className="
                    mt-2
                    text-slate-300
                  ">

                    {item.company}

                  </p>



                  <span className="
                    mt-2
                    inline-block
                    text-blue-400
                  ">

                    {item.duration}

                  </span>




                  <p className="
                    mt-4
                    leading-7
                    text-slate-400
                  ">

                    {item.description}

                  </p>


                </div>


              ))}


            </div>



          </motion.div>




        </div>



      </div>


    </section>

  );
}


export default Education;