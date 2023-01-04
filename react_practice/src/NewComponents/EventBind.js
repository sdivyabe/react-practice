import { render } from '@testing-library/react'
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text: "Hello"
      }
    //   this.updateText = this.updateText.bind(this)
    }
    updateText(){
        this.setState({
            text: "Bye bye"
        })
    }

  render() {
    return (
      <div>
          <p>{this.state.text}</p>
          {/* <button onClick={this.updateText}>Bind</button> */}
          {/* <button onClick={this.updateText.bind(this)}>Bind</button> */}
          <button onClick={()=>this.updateText()}>Bind</button>
      </div>
    )
  }
}

export default EventBind

