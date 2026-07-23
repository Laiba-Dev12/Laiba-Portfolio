import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaTrash,
} from "react-icons/fa";


function AIChat() {


  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);


  const chatEndRef = useRef(null);



  const [messages, setMessages] = useState([

    {
      role: "ai",
      text:
        "Assalam-o-Alaikum 👋\nI am Laiba's Portfolio AI Assistant.\nAsk me about Laiba, skills, projects, or EventMS."
    }

  ]);





  useEffect(()=>{


    chatEndRef.current?.scrollIntoView({

      behavior:"smooth"

    });


  },[messages,loading]);








  const sendMessage = async(text = message)=>{


    if(!text.trim()) return;



    setMessages(prev=>[

      ...prev,

      {

        role:"user",

        text:text

      }

    ]);



    setMessage("");

    setLoading(true);



    try{


      const response = await fetch(

        "http://localhost:5000/api/chat",

        {

          method:"POST",

          headers:{

            "Content-Type":"application/json"

          },

          body:JSON.stringify({

            message:text

          })

        }

      );



      const data = await response.json();



      setMessages(prev=>[

        ...prev,

        {

          role:"ai",

          text:
          data.reply || "No response received"

        }

      ]);



    }


    catch(error){


      setMessages(prev=>[

        ...prev,

        {

          role:"ai",

          text:"Unable to connect with AI server."

        }

      ]);


      console.log(error);


    }



    finally{

      setLoading(false);

    }



  };







  const clearChat=()=>{


    setMessages([

      {

        role:"ai",

        text:
        "Chat cleared 👋 Ask anything about Laiba."

      }

    ]);


  };








  const questions=[

    "Who is Laiba?",

    "Tell me about EventMS",

    "What are Laiba's skills?"

  ];








return (

<>


{!open && (


<motion.button


initial={{scale:0}}

animate={{scale:1}}

whileHover={{scale:1.1}}


onClick={()=>setOpen(true)}


className="
fixed
bottom-6
right-6
z-50
h-16
w-16
rounded-full
bg-gradient-to-r
from-cyan-400
to-blue-600
text-white
text-2xl
shadow-xl
flex
items-center
justify-center
"


>

<FaRobot/>


</motion.button>


)}







{open && (


<motion.div


initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}


className="
fixed
bottom-6
right-6
z-50
flex
h-[520px]
w-[370px]
flex-col
overflow-hidden
rounded-3xl
border
border-slate-700
bg-slate-950
shadow-2xl
"


>


{/* HEADER */}

<div className="
flex
items-center
justify-between
bg-gradient-to-r
from-cyan-500
to-blue-600
p-4
">


<div className="flex items-center gap-3">


<div className="
h-10
w-10
rounded-full
bg-white/20
flex
items-center
justify-center
">

<FaRobot/>

</div>


<div>

<h3 className="font-bold">
Laiba AI
</h3>

<p className="text-xs">
Online Assistant
</p>

</div>


</div>



<div className="flex gap-3">


<button onClick={clearChat}>

<FaTrash/>

</button>


<button onClick={()=>setOpen(false)}>

<FaTimes/>

</button>


</div>


</div>








{/* CHAT AREA */}


<div className="
flex-1
overflow-y-auto
space-y-3
p-4
">


{messages.map((msg,index)=>(


<div

key={index}


className={`

whitespace-pre-line
rounded-2xl
p-3
text-sm


${

msg.role==="user"

?

"ml-8 bg-blue-600"

:

"mr-8 bg-slate-800"

}

`}


>

{msg.text}


</div>


))}





{loading && (

<div className="
mr-8
rounded-2xl
bg-slate-800
p-3
text-sm
">

Typing...

</div>

)}



<div ref={chatEndRef}/>


</div>







{/* QUESTIONS */}


<div className="
flex
gap-2
overflow-x-auto
px-3
pb-2
">


{questions.map(q=>(


<button


key={q}


onClick={()=>sendMessage(q)}


className="
whitespace-nowrap
rounded-full
bg-slate-800
px-3
py-2
text-xs
hover:bg-cyan-600
"


>


{q}


</button>


))}



</div>







{/* INPUT */}


<div className="
flex
gap-2
border-t
border-slate-700
p-3
">


<input


value={message}


onChange={(e)=>setMessage(e.target.value)}


onKeyDown={(e)=>{

if(e.key==="Enter")
sendMessage();

}}


placeholder="Ask about Laiba..."


className="
flex-1
rounded-xl
bg-slate-800
px-4
py-2
outline-none
text-sm
"


/>



<button


onClick={()=>sendMessage()}


className="
rounded-xl
bg-cyan-500
px-4
"


>

<FaPaperPlane/>

</button>



</div>







</motion.div>


)}



</>

);


}


export default AIChat;