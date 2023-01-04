import React, { Component } from 'react'

export class Hello extends Component {
  render() {
    const {name,age} = this.props                //destructure props
    return (
      <div>
          {/* <h1>Hello {this.props.name}</h1> */}
          <h1>Hello {name} and she is {age} old</h1>
      </div>
    )
  }
}

export default Hello