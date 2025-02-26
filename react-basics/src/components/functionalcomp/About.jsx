import React from 'react'
import { Button } from 'react-bootstrap'
import { MyButton, TextBox } from '../../styleccomp'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Button>Button</Button>
      <MyButton onClick={()=>alert("Button clicked")}>Click Me </MyButton>
      <TextBox type="date"/>

      
    </div>
  )
}

export default About
