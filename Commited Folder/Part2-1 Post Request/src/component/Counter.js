import React, { Component } from 'react'

class Counter extends Component {
constructor(props) {
  super(props)

  this.state = {
     count: 0
  }
}

   increment() {
  //     this.setState({
  //        count: this.state.count +1
  //  })
     this.setState((prevState) => ({
       count: prevState.count +1
     }))
  }
  
  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }
  render() {
    return (
      <div>
          <p> Counter - {this.state.count}</p>
          {/* <button onClick={() => this.increment()}> increment</button> */}
          <button onClick={() => this.incrementFive()}> increment</button>
      </div>
    )
  }
}

export default Counter
