import React, { Component } from 'react';
import './App.css';
import Content from "./components/Content.js"
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
            img:""
        }
    }

    submited=()=>{
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${this.state.first.replace(" ","+")}&api_key=4867da29d8818eb2ef25cc9c1f43a966&format=json&limit=20`)
            .then((data)=>data.json())
            .then(artist=>this.setState({firsttab:artist.similarartists.artist}));
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${this.state.second.replace(" ","+")}&api_key=4867da29d8818eb2ef25cc9c1f43a966&format=json&limit=20`)
            .then((data)=>data.json())
            .then(artist=>this.setState({secondtab:artist.similarartists.artist}))
            .then(this.setState({
                randomnumber:Math.ceil(Math.random()*(18+1)),
                coin:Math.ceil(Math.random()*(1+1))
            }))
            .then(()=>{
                console.log(this.state.randomnumber)
                    if(this.state.coin===1){
                        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.state.firsttab[this.state.randomnumber].name}&api_key=4867da29d8818eb2ef25cc9c1f43a966&format=json`)
                            .then((data)=>data.json())
                            .then(data=>{console.log(data.artist);this.setState({
                                    listeners:data.artist.stats.listeners,
                                    playcount:data.artist.stats.playcount,
                                    name:data.artist.name,
                                    url:data.artist.url,
                                    tag:data.artist.tags.tag[0].name,
                                    bio:data.artist.bio.summary,
                                img:data.artist.image[3]["#text"],
                                ready:true
                                })})
                            .catch(e=>{console.log(e)})
                    }else{
                        console.log(this.state.randomnumber)
                        console.log(this.state.secondtab[this.state.randomnumber].name)
                        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.state.secondtab[this.state.randomnumber].name}&api_key=4867da29d8818eb2ef25cc9c1f43a966&format=json`)
                            .then((data)=>data.json())
                            .then(data=>{this.setState({
                                listeners:data.artist.stats.listeners,
                                playcount:data.artist.stats.playcount,
                                name:data.artist.name,
                                url:data.artist.url,
                                tag:data.artist.tags.tag[0].name,
                                bio:data.artist.bio.summary,
                                img:data.artist.image[3]["#text"],
                                ready:true
                            })})
                            .catch(e=>{console.log(e)})
                    }
            })
            .then()
    };
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
              <input name="first" onChange={this.changeHandler} className="input" value={this.state.first}></input>
              <button onClick={this.submited} className="submit">Click here to do some similiarizing</button>
              <input name="second" onChange={this.changeHandler} className="input" value={this.state.second}></input>
          </div>
      </div>
    );
  }
}

export default App;
