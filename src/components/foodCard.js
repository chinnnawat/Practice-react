import React from "react";
import "../App.css"
import Button from "../components/button"
class FoodCard extends React.Component{
    constructor(){
        super();
        this.state = {voteResult:0}
    }
    callbackPlus = () =>{
        if(this.state.voteResult < 10){
            this.setState({voteResult:this.state.voteResult + 1})
        }
        else{
            alert("Cannot Vote more")
        }
    }
    callbackMinus = () =>{
        if(this.state.voteResult > 0){
            this.setState({voteResult:this.state.voteResult - 1})
        }
        else{
            alert("Cannot Unvote")
        }
    }
    showClick = () =>{
        if(this.state.voteResult === 10){
            return "MAX";
        }
        if(this.state.voteResult === 0){
            return "Min";
        }
        else{
            return this.state.voteResult
        }
    }


    render(){
        return(
            <div className="card">
                <div className="container">
                    <div className="menu">
                        <div className="detail">
                            <h2>{this.props.category}</h2>
                            <h3>{this.props.foodName}</h3>
                            <h5>{this.props.describetion}</h5>
                        </div>
                        <div className="picture">
                            <img src={this.props.imgsrc} alt="" />
                        </div>
                    </div>
                    <div className="container_button">
                        <Button
                            vote = {this.callbackMinus}>
                        </Button>
                        <button id="showClick">{this.showClick()}</button>
                        <Button
                            vote = {this.callbackPlus}>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FoodCard;
