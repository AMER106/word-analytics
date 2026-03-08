import { useState } from "react"
import Warning from "./Warning";

export default function Textarea() {
  const [text,setText]=useState("");
  const[warning,setWarning]=useState(false);
  const[showWarning,setShowWarning]=useState()
  const handleChnage=(event)=>{
      let newText=event.currentTarget.value;
      if(newText.includes("<script/>")){
        setWarning(true)
        setShowWarning("No script tag is allowed")
        newText=newText.replace("<script/>"," ")
      }else if(newText.includes("@")){
        setWarning(true)
        setShowWarning("No special character is allowed")
        newText=newText.replace("@","")
      }
      setText(newText);
      console.log(text);
    }
return (
  <>
    <textarea className='textarea' placeholder="Enter your text here" 
    value={text}
    onChange={handleChnage}>
    </textarea>
    {
    warning ? <Warning warning={showWarning} /> : ''
    }
    
  </>
)
  
}
