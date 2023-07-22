
//Class Component

import React, { Component } from 'react'

class Welcome extends Component {
  
  render() {
    const {name, heroName } = this.props
    return (
      <h1>
        {/* Welcome {this.props.name} */}
        Welcome {name}{/*//এভাবে দিলে destruct করতে হবে   */}
        also know as {this.props.heroName}{/*//এভাবে দিলে destruct এর প্রয়োজন নাই  */}
      </h1>
    )
  }
}

export default Welcome