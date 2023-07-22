import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        parentName : 'Parent'
      }
      this.greedParent = this.greedParent.bind(this)
   }
   greedParent(childName) {
      console.log(`Hello ${this.state.parentName} from ${childName}`)
   }
  render() {
    return (
      <div>
          <ChildComponent greedHandler={this.greedParent } />
      </div>
    )
  }
}

export default ParentComponent
//tutorial number 15
