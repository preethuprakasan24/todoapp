import React from 'react'
import Button from '../Button/Button'

const About = () => {

   const sendClick =(event)=>{
       alert("Button Clicked")
    }
    return (
        <div>
            <h1 style={{color:"white",textAlign:"center"}}>About Component</h1>
            <Button className="btnbtn" id="btn" onClick={sendClick} >Click me</Button>
        </div>
    )
}

export default About