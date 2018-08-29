import React, { Component } from 'react';
import './App.css';
import Content from "./components/Content.js";
import submited from "./components/Submited.js";
import roulette from "./Images/roulette.png";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            first:"first artist",
            second:"second artist",
            firsttab:[],
            secondtab:[],
            randomnumber:0,
            coin:0,
            listeners:0,
            playcount:0,
            name:"",
            url:"",
            tag:"",
            bio:"",
            ready:false,
            img:"",
            block1:false,
            block2:false
        }
    }


    changeHandler = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    };

  render() {
    return (
      <div className="main">
          <div className="displayContainer"><Content states={this.state}/></div>
          <div className="inputContainer">
              <input name="first" onChange={this.changeHandler} className="input col" value={this.state.first}></input>
              <img src={roulette} onClick={submited.bind(this)} className="submit "></img>
              <input name="second" onChange={this.changeHandler} className="input col" value={this.state.second}></input>
          </div>
      </div>
    );
  }
}

export default App;
