import React, { useState } from 'react'

export default function About(props) {


    const [myStyle, setMyStyle] = useState(
    {
        color: 'black',
        backgroundColor:'white'
    })

  return (
   <>
   <div className='container' style={myStyle}>
       <h1 className='my-3'>About Us</h1>
    </div>
   </>
  )
}
