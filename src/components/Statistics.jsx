

export default function Statistics({stats}) {
  return (
    <section className='stats'>
     <Stats label="words" number={stats.numberOfWords}/>
     <Stats label="Characters" number={stats.numberOfCharacters}/>
     <Stats label="Instagram" number={stats.instagramCharactersLeft}/>
     <Stats label="Facebook" number={stats.facebookCharactersLeft}/>
      
    </section>
  )
}

function Stats({number,label}){
  return <section className='stat'>
      <span className={`stat__number ${number < 0?'stat__number--limit':''}`}>{number}</span>
      <h2 className='second__heading'>{label}</h2>
     </section>
}