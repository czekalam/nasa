import React, { Component } from 'react';
import {FilterContainer} from './Filter';
import '../style/FilterMain.css';

export class FilterMain extends Component {
    render() {
      return (
          <div className="FilterMain">
            <FilterContainer/>
          </div>
      );
    }
}