import { useState } from "react"

export default function Textarea() {
  const [text,setText]=useState("");
  return (
    <textarea className='textarea' placeholder="Enter your text here" 
    value={text}
    onChange={(event)=>{
      const newText=event.currentTarget.value;
      setText(newText);
      console.log(text);
    }}>
      
    </textarea>
  )
}
