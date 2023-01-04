import React, { Component } from 'react'
import Classthis from './Classthis'

export class Message extends Component {
    constructor() {
      super()
    
      this.state = {
         message: 'Welcome Visitor'
      }
    }
    handleButton(){
        this.setState({
            message: "Thank U for Subscribing"
    })
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={()=>this.handleButton()}>Subscribe</button>
          <button onClick={<Classthis />}>Click me</button>
      </div>
    )
  }
}

export default Message