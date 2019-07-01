import React,{ Component } from 'react';
import { Media } from './Media'
import '../style/ItemDetails.css';

export class ItemDetails extends Component {
    render() {
        return(
            <div className='ItemDetails'>
                <Media element={this.props.location.state.element}/>
                <p className='title'>{this.props.location.state.element.data[0].title}</p>
                <p className='description'>{this.props.location.state.element.data[0].description}</p>
                <p className='date'>{this.props.location.state.element.data[0].date_created}</p>
            </div>
        );
    }
}