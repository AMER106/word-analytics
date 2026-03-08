import { useState } from "react"

export default function Textarea() {
  const [text,setText]=useState("");
  const handleChnage=(event)=>{
      let newText=event.currentTarget.value;
      if(newText.includes("<script/>")){
        alert("no script tag is allowed")
        newText=newText.replace("<script/>"," ")
      }
      setText(newText);
      console.log(text);
    }
  return (
    <textarea className='textarea' placeholder="Enter your text here" 
    value={text}
    onChange={handleChnage}>
      
    </textarea>
  )
}
