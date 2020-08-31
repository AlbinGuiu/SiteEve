import React, { Component } from 'react';
import '../App.css';
import FormSearch from './FormSearch';

class EventSearch extends Component {
  render () {
      return (
            <div className="EventSearch">
                 <h2>Rechercher un événement sportif près de chez vous :</h2>
                 <FormSearch />   
            </div>
        );
    }
}

export default EventSearch;