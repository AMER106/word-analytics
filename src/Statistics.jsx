

export default function Statistics({numberOfCharacters,instagramCharactersLeft,facebookCharactersLeft,numberOfWords}) {
  return (
    <section className='stats'>
     <Stats label="words" number={numberOfWords}/>
     <Stats label="Characters" number={numberOfCharacters}/>
     <Stats label="Instagram" number={instagramCharactersLeft}/>
     <Stats label="Facebook" number={facebookCharactersLeft}/>
      
    </section>
  )
}

function Stats({number,label}){
  return <section className='stat'>
      <span className='stat__number'>{number}</span>
      <h2 className='second__heading'>{label}</h2>
     </section>
}