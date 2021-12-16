import React, {Component} from "react";
import './style.css';

const design={
    color:"blue"
}

class Demo2 extends Component{

    render(){
        return(
            <div className="second">
                <h2>This is created using Class <br/> Component </h2>
                <p>This is done using external CSS</p>
                <p style={design}>This is done using inline CSS</p><br/><br/>
            </div>
        )
    }
}

export default Demo2;