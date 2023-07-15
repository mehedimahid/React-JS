import React, { Component } from 'react'

class EventBind extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        message: 'Hello'
      }
      /*3rd option &best option  */
      this.ClickHandler = this.ClickHandler.bind(this)/*only approce 3 শুধু ৩ নাম্বার বাটন এর জন্য  */
   }
/*1st & 2nd option  */
   // ClickHandler() {
   //    this.setState({
   //       message:'Goodbye!'
   //    })
   // }
   /*4rt option  & good option*/
   ClickHandler = () => {
      this.setState({
         message:'Goodbye!'
      })
   }
  render() {
    return (
       <div>
          <div>{this.state.message}</div>
        {/* <button onClick={this.ClickHandler.bind(this)}>click here</button> */}{/*only 1st option*/}
        {/* <button onClick={() => this.ClickHandler()}>click here</button> */}{/*only 2nd option*/}
        <button onClick={this.ClickHandler}>click here</button>{/*only 3rd & 4rt option*/}
      </div>
    )
  }
}

export default EventBind
//tutorial number 14

/* binding in the constructor is best*/