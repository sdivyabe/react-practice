          //passing method as props

          import React, { Component } from 'react'
          import ChildComponent from './ChildComponent'
          
          class ParentComponent extends Component {
              constructor(props) {
                super(props)
               
                this.state = {
                  name: "Mahi"
                }
                this.greetMethod = this.greetMethod.bind(this)
              }
              greetMethod(childName){
                  alert(`Welcome Child ${this.state.name} and ${childName}`);         //Template literals -->"`${}`"
              }
            render() {
              return (
                <ChildComponent parentHandler={this.greetMethod} />         //pass a method as reference to the child
              )
            }
          }
          
          export default ParentComponent