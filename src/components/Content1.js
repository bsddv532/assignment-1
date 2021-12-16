import React from "react";
import './style.css';

function Demo1(){

    const design={
        color:"blue",
    }

    return(
        <div className="first">
            <h2>This is created using Functional <br/> Component </h2>
            <p>This is done using external CSS</p>
            <p style={design}>This is done using inline CSS</p><br/><br/>
        </div>
    )

}

export default Demo1;

