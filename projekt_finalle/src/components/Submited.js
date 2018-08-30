
function submited() {
    if (this.state.first === "first artist" || this.state.second === "second artist") {
        alert("Please, put an artist/band name in both boxes")
    } else {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${this.state.first.replace(" ", "+")}&api_key=4867da29d8818eb2ef25cc9c1f43a966&format=json&limit=20`)
            .then((data) => data.json())
            .then(data => {
                if (data.error) {
                    alert("wrong artist one name!");
                    this.setState({
                        block1:true
                    });
                    return
                } else {
                    this.setState({firsttab: data.similarartists.artist,
                                    block1:false})
                }
                fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${this.state.second.replace(" ", "+")}&api_key=4867da29d8818eb2ef25cc9c1f43a966&format=json&limit=20`)
                    .then((data) => data.json())
                    .then(data => {
                        if (data.error) {
                            alert("wrong artist two name!");
                            this.setState({
                                block2:true
                            });
                            return
                        } else {
                            console.log(data);
                            console.log(data.similarartists.artist);
                            this.setState({secondtab: data.similarartists.artist,
                                            block2:false})
                        }
                    })
                    .then(
                        this.setState({
                        randomnumber: Math.ceil(Math.random() * (17 + 1)),
                        coin: Math.ceil(Math.random() * (1 + 1))
                    })
                    )
                    .then(() => {
                        console.log(this.state.randomnumber);
                        if(this.state.firsttab.length===0){alert("artist one is not included in aplication");return;}
                        if(this.state.secondtab.length===0){alert("artist two is not included in aplication");return;}
                        if (this.state.coin === 1&&!this.state.block1&&!this.state.block2) {
                            console.log(this.state.firsttab)
                            console.log(this.state.firsttab[this.state.randomnumber]);
                            fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.state.firsttab[this.state.randomnumber].name}&api_key=4867da29d8818eb2ef25cc9c1f43a966&format=json`)
                                .then((data) => data.json())
                                .then(data => {
                                    console.log(data);
                                    this.setState({
                                        listeners: data.artist.stats.listeners,
                                        playcount: data.artist.stats.playcount,
                                        name: data.artist.name,
                                        url: data.artist.url,
                                        tag: data.artist.tags.tag[0].name,
                                        bio: data.artist.bio.summary,
                                        img: data.artist.image[3]["#text"],
                                        ready: true
                                    })
                                })
                                .catch(e => {
                                    console.log(e)
                                })
                        } else if(this.state.coin===2&&!this.state.block1&&!this.state.block2) {
                            console.log(this.state.secondtab)
                            console.log(this.state.secondtab[this.state.randomnumber]);
                            fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.state.secondtab[this.state.randomnumber].name}&api_key=4867da29d8818eb2ef25cc9c1f43a966&format=json`)
                                .then((data) => data.json())
                                .then(data => {
                                    console.log(data);
                                    this.setState({
                                        listeners: data.artist.stats.listeners,
                                        playcount: data.artist.stats.playcount,
                                        name: data.artist.name,
                                        url: data.artist.url,
                                        tag: data.artist.tags.tag[0].name,
                                        bio: data.artist.bio.summary,
                                        img: data.artist.image[3]["#text"],
                                        ready: true
                                    })
                                })
                                .catch(e => {
                                    console.log(e)
                                })
                        }else{
                            return;
                        }
                    })
            })
    }
}

export default submited;
