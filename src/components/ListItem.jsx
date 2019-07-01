import React, {Component} from 'react';
import {Media} from './Media';
import '../style/ListItem.css';

export class ListItem extends Component {

    render(){
        return (
            <div className="ListItem">
                <Media element={this.props.element}/>
                <p className='title'>{this.props.element.data[0].title}</p>
            </div>
        );
    }
}