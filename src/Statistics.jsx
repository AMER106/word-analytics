

export default function Statistics({numberOfCharacters}) {
  return (
    <section className='stats'>
     <Stats label="words" number={0}/>
     <Stats label="Characters" number={numberOfCharacters}/>
     <Stats label="Instagram" number={220}/>
     <Stats label="Facebook" number={2220}/>
      
    </section>
  )
}

function Stats({number,label}){
  return <section className='stat'>
      <span className='stat__number'>{number}</span>
      <h2 className='second__heading'>{label}</h2>
     </section>
}