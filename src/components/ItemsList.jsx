import React, { Component} from 'react';
import { ListItem } from './ListItem';
import '../style/ItemsList.css'
import { connect } from 'react-redux';
import { loadFromApi } from "../actions";
import isEqual from 'lodash/isEqual';
import {
    Link
  } from 'react-router-dom';

export class ItemsList extends Component {
    generateObjects() {
        var data = this.props.items;
        return data.map(element => 
        <Link  
            to={ 
                {
                    pathname: `/details/${element.data[0].title}`, 
                    state:{
                        element:element
                    }
                }
            }
            style={{ textDecoration: 'none' }}
        >
            <ListItem element={element}/>
        </Link>);
    }
    shouldComponentUpdate(nextProps,nextState) {
        if(this.props.items.length===0) {
            return true;
        }
        if(this.props.items&&nextProps.items) {
            if(this.props.match.params.text!==nextProps.match.params.text) {
                return true;
            }
            if(!isEqual(this.props.items , nextProps.items)) {
                return true;
            }
        }
        return false;
    }
    componentDidMount() {
        this.props.loadFromApi(this.props.match.params.text);
    }
    componentDidUpdate() {
        this.props.loadFromApi(this.props.match.params.text);
    }   
    render() {
        return(
            <div className="ItemsList">
                {!this.props.items?'':this.generateObjects()}
            </div>
        );
    }
}

const mapDispatchToProps = { loadFromApi};
const mapStateToProps = state => {
  return {
    items: state.items,
    loading: state.loading
  };
};
export const ItemsListContainer = connect(mapStateToProps,mapDispatchToProps)(ItemsList);