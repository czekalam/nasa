import React,{Component} from 'react';

export class Image extends Component {
    render() {
        return (
            <img alt='nasa' src={this.props.src}></img>
        )
    }
}