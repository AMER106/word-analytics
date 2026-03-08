import React from 'react'

export default function Textarea() {
  return (
    <textarea className='textarea' placeholder="Enter your text here" onChange={(event)=>{
      console.log(event.target.value)
    }}>
      
    </textarea>
  )
}
