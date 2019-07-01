import React, { Component } from 'react';

export class MediaButton extends Component {
    constructor(props) {
        super(props);
        this.state={
            backgroundColor:'#fff'
        }
        this.colorChange = this.colorChange.bind(this);
    }
    colorChange(event) {
        console.log(this.props);
        if(this.props.clicked) {
            this.setState({backgroundColor: "#fff"});
        }
        else {
            this.setState({backgroundColor: "#222b32"});
        }
        this.props.handleClick(event);
    }
    render() {
        return (
            <button style={this.state} onClick={this.colorChange}>
                {this.props.icon}
            </button>
        );
    }
}