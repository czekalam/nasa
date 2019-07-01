import React,{Component} from 'react';

export class Audio extends Component {
    constructor(props) {
        super(props);
        this.state={
            audio: ''
        }
    }
    componentDidMount() {
        fetch(this.props.src)
        .then(res=> res.json())
        .then(data=> this.setState({audio: data}))
        .catch(err=>console.log(err));
    }
    render() {
        var filtered = this.state.audio?this.state.audio.filter(audio => audio.includes('orig.mp3')):'';
        return(
            <audio controls>
                {filtered?<source src={filtered[0]} type="audio/mp3"/>:''};
            </audio>
        );
    }
}