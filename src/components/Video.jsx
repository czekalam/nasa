import React,{Component} from 'react';

export class Video extends Component {
    constructor(props) {
        super(props);
        this.state={
            video: ''
        }
    }
    componentDidMount() {
        fetch(this.props.src)
        .then(res=> res.json())
        .then(data=> this.setState({video: data}))
        .catch(err=> console.log('error   '+err));
    }
    render() {
        var filtered = this.state.video?this.state.video.filter(video => video.includes('orig.mp4')):'';
        return (
            <video controls>
                {filtered?<source src={filtered[0]} type="video/mp4"/>:''};
            </video>
        )
    }
}