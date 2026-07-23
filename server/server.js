import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();


// CORS Setup
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://laiba-dev.netlify.app"
    ],
    methods: ["GET", "POST"],
    credentials: true
  })
);


app.use(express.json());


// Groq Setup
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});



// Test Route
app.get("/", (req, res) => {

  res.json({
    message: "Portfolio AI Server Running 🚀"
  });

});




// AI Chat Route
app.post("/api/chat", async (req, res) => {

  try {

    const { message } = req.body;


    if (!message) {

      return res.status(400).json({

        success: false,
        message: "Message required"

      });

    }



    const completion = await groq.chat.completions.create({

      model: "llama-3.3-70b-versatile",

      temperature: 0.5,


      messages: [

        {

          role: "system",

          content: `

You are Laiba Shehzadi's official Portfolio AI Assistant.

Your purpose is to answer questions about Laiba, her skills, projects, and portfolio.

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


Professional Links:

GitHub:
https://github.com/Laiba-Dev12

LinkedIn:
https://www.linkedin.com/in/laiba-iftikhar-a70b5a414


Rules:

1. Answer questions about Laiba professionally.
2. Help with programming questions briefly.
3. If unrelated questions are asked, say:
"I am Laiba's portfolio assistant. I can help you with information about Laiba, her projects, skills, and development work."

4. Never create fake information.
5. Reply in English, Urdu, or Roman Urdu according to user's language.

`

        },


        {

          role: "user",

          content: message

        }


      ]

    });



    const reply =
      completion.choices[0].message.content;



    res.json({

      success: true,

      reply

    });



  } catch (error) {


    console.log("GROQ ERROR:");
    console.log(error);


    res.status(500).json({

      success: false,
      message: "AI response failed"

    });


  }


});




// Railway Port
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});