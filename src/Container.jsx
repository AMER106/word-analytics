import { useState } from "react";
import Statistics from "./Statistics";
import Textarea from "./Textarea";


export default function Container() {
  const[text,setText]=useState("");
 
  const stats={
    numberOfCharacters:text.length,
    numberOfWords:text.split(/\s/).filter((word)=> word!=="").length,
    instagramCharactersLeft:280-text.length,
    facebookCharactersLeft:2200-text.length,
  }
  return (
    <main className="container">
      <Textarea text={text} setText={setText}/>
      <Statistics stats={stats}/>
    </main>
  )
}
