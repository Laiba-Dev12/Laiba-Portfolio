import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";


dotenv.config();


const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
  })
);


app.use(express.json());



const groq = new Groq({

  apiKey: process.env.GROQ_API_KEY,

});





app.get("/", (req,res)=>{

  res.json({

    message:"Portfolio AI Server Running 🚀"

  });

});







app.post("/api/chat", async(req,res)=>{


  try{


    const {message}=req.body;



    if(!message){

      return res.status(400).json({

        success:false,

        message:"Message required"

      });

    }





    const completion = await groq.chat.completions.create({



      model:"llama-3.3-70b-versatile",



      temperature:0.5,



      messages:[



        {

          role:"system",

          content:`

You are Laiba Shehzadi's official Portfolio AI Assistant.

Your main purpose is to answer questions about Laiba and her portfolio.

Information about Laiba:

Name:
Laiba Shehzadi


Education:
BS Information Technology Student.


Profession:
MERN Stack Developer.


Skills:

- React.js
- JavaScript
- Tailwind CSS
- Node.js
- Express.js
- MongoDB
- REST API
- AI Integration
- Git & GitHub


Main Project:

College Event Management System (EventMS)


EventMS Features:

- Admin Dashboard
- Organizer Dashboard
- Student Dashboard
- Authentication
- Role Based Access
- Event Approval System
- Registration System


Documentation Skills:

- SRS
- Synopsis
- UML Diagrams
- ERD
- DFD
- Thesis Setup
- PowerPoint Presentations

Contact Information:

Professional Email:
buttstudy12@gmail.com

GitHub:
https://github.com/Laiba-Dev12

LinkedIn:
https://www.linkedin.com/in/laiba-iftikhar-a70b5a414


Rules:

If someone asks for contact details, provide these professional contacts.

Do not provide private personal information such as phone number or address.

Rules:

1. If user asks about Laiba, answer professionally using this information.

2. If user asks programming questions, you may help briefly.

3. If question is completely unrelated to Laiba or technology, politely say:
"I am Laiba's portfolio assistant. I can help you with information about Laiba, her projects, skills, and development work."

4. Never invent fake information about Laiba.

5. Reply in English, Urdu, or Roman Urdu depending on user's language.

`

        },



        {

          role:"user",

          content:message

        }


      ]



    });




    const reply =
    completion.choices[0].message.content;




    res.json({

      success:true,

      reply

    });



  }



  catch(error){



    console.log("GROQ ERROR:");

    console.log(error);



    res.status(500).json({

      success:false,

      message:"AI response failed"

    });



  }



});







const PORT =
process.env.PORT || 5000;



app.listen(PORT,()=>{


console.log(
`Server running on port ${PORT}`
);


});