import React, { Component } from 'react'

export class Classthis extends Component {
    constructor() {
      super()
    
      this.state = {
         name: 'Mahisha',
         surName: 'C'
      }
      //before call bind method 'this' is undefined
      this.updateState = this.updateState.bind(this)      //the value will displays     
    }
    updateState(){
        this.setState({
            name: 'Guru',
            surName: 'Prasath'
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.name} {this.state.surName}</h1>
          <button onClick={this.updateState}>Click Me</button>
      </div>
    )
  }
}

export default Classthis