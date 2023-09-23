import React from "react";
import "../App.css"

class Button extends React.Component{
    click = ()=>{
        this.props.vote();
    };

    render(){
        return(
            <div className="button">
                <button id="click" onClick={this.click}>Click to Vote</button>
            </div>
        )
    }
}

export default Button;