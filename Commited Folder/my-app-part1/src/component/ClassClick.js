import React, { Component } from 'react'

class ClassClick extends Component {

   clickHandeler(){
      console.log('Button Clicked')
      // console.log(this)
     
   }
   
   render() {
    return (
      <div>
        <button onClick={this.clickHandeler}> Click me</button>
      </div>
    )
  }
}

export default ClassClick
//tutorial number 13