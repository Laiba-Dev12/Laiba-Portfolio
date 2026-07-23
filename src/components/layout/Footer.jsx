import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

import { portfolioData } from "../../data/portfolioData";


function Footer() {

  const { personal } = portfolioData;


  return (

    <footer
      className="
        border-t
        border-slate-800
        bg-slate-950
        py-10
      "
    >

      <div className="
        mx-auto
        max-w-7xl
        px-6
      ">


        <div className="
          flex
          flex-col
          items-center
          justify-between
          gap-6
          md:flex-row
        ">


          {/* Logo */}


          <div className="text-center md:text-left">


            <h2 className="
              text-3xl
              font-black
              text-white
            ">

              {personal.firstName}

              <span className="
                text-cyan-400
              ">

                .

              </span>


            </h2>


            <p className="
              mt-2
              text-slate-400
            ">

              MERN Stack Developer | BS Information Technology

            </p>


          </div>





          {/* Social Links */}


          <div className="
            flex
            gap-4
          ">


            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-slate-900
                text-xl
                text-white
                transition
                hover:bg-cyan-600
              "
            >

              <FaGithub />

            </a>




            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-slate-900
                text-xl
                text-white
                transition
                hover:bg-blue-600
              "
            >

              <FaLinkedin />

            </a>


          </div>



        </div>





        {/* Bottom */}


        <div className="
          mt-8
          border-t
          border-slate-800
          pt-6
          text-center
          text-sm
          text-slate-500
        ">


          © {new Date().getFullYear()} {personal.firstName} {personal.lastName}.
          Built with <FaHeart className="mx-1 inline text-red-500" /> using React.


        </div>



      </div>


    </footer>

  );

}


export default Footer;