import React, { Component } from 'react';

class Content extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let text=this.props.states.bio;
        text=text.split("<",2)[0];
    if(this.props.states.ready){
        return(
            <div>
                <h1>{this.props.states.name} is your random artist!</h1>
                <h2>{this.props.states.url}  is a link to artist</h2>
                <h3>{this.props.states.playcount} this much time artist was listened to</h3>
                <h3>{this.props.states.listeners} and this much unique users did it!</h3>
                <h3>{this.props.states.tag} this is first tag of your artist</h3>
                <p>{text}</p>
                <img src={this.props.states.img}/>

            </div>
        )}else{
        return null;
    }}
}
export default Content