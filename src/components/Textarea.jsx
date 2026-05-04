import { useState } from "react"
import Warning from "./Warning";

export default function Textarea({text,setText}) {
  
  
  const[showWarning,setShowWarning]=useState()
  const handleChnage=(event)=>{
      let newText=event.currentTarget.value;
      if(newText.includes("<script/>")){
        
        setShowWarning("No script tag is allowed")
        newText=newText.replace("<script/>"," ")
      }else if(newText.includes("@")){
        
        setShowWarning("No special character is allowed")
        newText=newText.replace("@","")
      }else{
        setShowWarning("")
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
     <Warning warning={showWarning} /> 
    }
    <p>rhis is a Textarea component</p>
  </>
)
  
}
