import React, {Component} from 'react';

class Content extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let text = this.props.states.bio;
        text = text.split("<", 1)[0];
        if (this.props.states.ready) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col1 col">
                            <h1><p className="name">{this.props.states.name}</p> is your random artist!</h1>
                            <h2><a className="link" href={this.props.states.url}>here is hidden link to your artist on last.fm</a></h2>
                        </div>
                        <div className="col2 col">
                            <h3><span className="playcount">{this.props.states.playcount}</span> this much time artist
                                was listened to</h3>
                            <h3><span className="listeners">{this.props.states.listeners}</span> and this much unique
                                users did it!</h3>
                            <h3><span className="tag">{this.props.states.tag}</span> this is first tag of your artist
                            </h3>
                            <img className="image" alt="../Images/blank.jpg" src={this.props.states.img}/>
                        </div>
                        <div className="col3 col">
                            <p className="bio">{text}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div className="big">Feeling lucky?</div>;
        }
    }
}

export default Content