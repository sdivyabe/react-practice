import React from "react";

function Greet() {
  //   return (
  //     <div>
  //         <hi>Greetings</hi>
  //     </div>
  //   )

//without using JSX
//=======================

  //return React.createElement("div", "h1", "Greating U"); 
//   return React.createElement(
//       'div',
//       null,
//       React.createElement('h1',null,'Greating u')   
//     )
    return React.createElement(
        'div',
        {id: 'dummy', className: "dummy"},
        React.createElement('h1',null,'Greating u')   
  )
}

export default Greet;
