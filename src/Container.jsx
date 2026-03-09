import { useState } from "react";
import Statistics from "./Statistics";
import Textarea from "./Textarea";


export default function Container() {
  const[text,setText]=useState("");
  const numberOfCharacters=text.length;
  return (
    <main className="container">
      <Textarea text={text} setText={setText}/>
      <Statistics numberOfCharacters={numberOfCharacters}/>
    </main>
  )
}
