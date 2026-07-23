import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { portfolioData } from "../../data/portfolioData";


function Contact() {

  const { contact, personal } = portfolioData;


  const cards = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: contact.email,
    },

    {
      icon: <FaPhone />,
      title: "Phone",
      value: contact.phone || "Available on request",
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: contact.address,
    },
  ];



  return (

    <section
      id="contact"
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

            Contact

            <span className="
              text-cyan-400
            ">

              {" "}Me

            </span>

          </h2>


          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-slate-400
          ">

            Have a project idea or want to collaborate?
            Feel free to reach out.

          </p>


        </motion.div>






        {/* Contact Cards */}


        <div className="
          grid
          gap-8
          md:grid-cols-3
        ">


          {cards.map((card,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5,
                delay:index*0.1
              }}

              viewport={{
                once:true
              }}

              whileHover={{
                y:-10
              }}

              className="
                rounded-3xl
                border
                border-slate-700
                bg-slate-950
                p-8
                text-center
              "

            >


              <div className="
                mx-auto
                mb-5
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-cyan-500/20
                text-3xl
                text-cyan-400
              ">

                {card.icon}

              </div>



              <h3 className="
                text-xl
                font-bold
                text-white
              ">

                {card.title}

              </h3>



              <p className="
                mt-4
                break-all
                text-slate-400
              ">

                {card.value}

              </p>


            </motion.div>


          ))}


        </div>





        {/* Social + Button */}


        <div className="
          mt-12
          flex
          flex-col
          items-center
          justify-center
          gap-6
        ">


          <div className="
            flex
            gap-5
          ">


            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-slate-800
                text-2xl
                text-white
                transition
                hover:bg-cyan-600
              "
            >

              <FaGithub/>

            </a>



            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-slate-800
                text-2xl
                text-white
                transition
                hover:bg-blue-600
              "
            >

              <FaLinkedin/>

            </a>


          </div>





          <a

            href={`mailto:${contact.email}`}

            className="
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-10
              py-4
              font-bold
              text-white
              transition
              hover:scale-105
            "

          >

            Send Email

          </a>


        </div>



      </div>


    </section>

  );
}


export default Contact;