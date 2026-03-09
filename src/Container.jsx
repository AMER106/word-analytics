import { useState } from "react";
import Statistics from "./Statistics";
import Textarea from "./Textarea";


export default function Container() {
  const[text,setText]=useState("");
  const numberOfCharacters=text.length;
  const numberOfWords= text.split(/\s/).filter((word)=>word!=="").length;
  const instagramCharactersLeft=280-text.length;
  const facebookCharactersLeft=2200-text.length;
  return (
    <main className="container">
      <Textarea text={text} setText={setText}/>
      <Statistics numberOfCharacters={numberOfCharacters} numberOfWords={numberOfWords} instagramCharactersLeft={instagramCharactersLeft}  facebookCharactersLeft={facebookCharactersLeft} />
    </main>
  )
}
