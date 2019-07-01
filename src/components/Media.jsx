import React, {Component} from 'react';
import { Image } from './Image';
import { Video } from './Video';
import {Audio} from './Audio';
import '../style/Media.css';

export class Media extends Component {
    generateObject() {        
        var src;
        var type;
        var element=this.props.element;
        type=element.data[0].media_type;
        if(type === 'image') {
            src = element.links[0].href;
            return <Image src={src}/>;
        }
        else if(type === 'video') {
            src= element.href;
            return <Video src={src}/>;
        }
        else if(type === 'audio') {
            src= element.href;
            return <Audio src={src}/>;
        }
        return null;
    }
    render(){
        return (
            <div className="Media">
                {this.generateObject()}
            </div>
        );
    }
}