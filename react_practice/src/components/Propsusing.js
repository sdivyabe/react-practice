import React from "react";

const Propsusing = props => {
    console.log("props",props);
    return (
        <div>
            <h1>Hi {props.name}</h1>
            {props.children}
        </div>
    )
}

export default Propsusing;