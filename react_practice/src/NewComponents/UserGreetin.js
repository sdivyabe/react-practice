          //Conditional Rendering

import React, { Component } from 'react'

class UserGreetin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }
  render() {
    /* if(this.state.isLoggedIn){                       //if/else method
      console.log("test1");
      return (<div>Welcome Home</div>)
    }else {
        console.log("test2");
      return (<div>Happy Home</div>)
    }  */
    /* return (
      <div>
          <div>Welcome Home</div>
          <div>Happy Home</div>
      </div>
    ) */
    let message;                                            //element variable method
    if(this.state.isLoggedIn){ message = "Welcome Home" }
    else { message= "Happy Home" }
    return <div>{message}</div>  

    return (
      this.state.isLoggedIn ? <div>Welcome Home</div> : <div>Happy Home</div>     //Ternary operator
    ) 

    // return this.state.isLoggedIn && <div>Welcome Home</div>         //Short circuit operator
  }
}

export default UserGreetin 