import React, { Component } from 'react';
import '../style/reset.css';
import '../style/App.css';
import {ItemsListContainer} from "./ItemsList";
import {ItemDetails} from './ItemDetails';
import {FilterContainer} from './Filter';
import {FilterMain} from './FilterMain';
import {BrowserRouter as Router,Route} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/:a' component={FilterContainer} />
          <Route exact path='/' component={FilterMain} />
          <Route path='/search/:text' component={ItemsListContainer}/>
          <Route path='/details/:id' component={ItemDetails}/>
        </div>
      </Router>
    );
  }
}