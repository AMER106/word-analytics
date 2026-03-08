import { useState } from "react"
import Warning from "./Warning";

export default function Textarea() {
  const [text,setText]=useState("");
  const[warning,setWarning]=useState(false);
  const handleChnage=(event)=>{
      let newText=event.currentTarget.value;
      if(newText.includes("<script/>")){
        setWarning(true)
        newText=newText.replace("<script/>"," ")
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
    warning ? <Warning /> : 'null'
    }
    
  </>
)
  
}
