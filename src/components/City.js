import React, { Component } from 'react';
import '../App.css';
import { InputGroup, FormControl } from 'react-bootstrap'

import citiesList from '../cities.json'

class City extends Component {

    state = {
        search : ""
    }

    renderCity = city =>{
        const {search} = this.state;
        

        if( search !== "" && city.Nom_commune.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
            return null
        } else if ( search === "") {
            return null
        }  else {
            return <div>
                        <p className="CitySearch">{city.Nom_commune.toLowerCase()} , {city.Code_postal}</p>
                    </div>
        }

        
    }

    onchange = e =>{
        this.setState({ search : e.target.value });
    }

  render () {

        const {search} = this.state;
        const filteredCities = citiesList.filter( city =>{
            return city.Nom_commune.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        })

      return (
            <div className="City">
                <InputGroup className="mb-3" onChange={this.onchange}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Lieu</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />   
                </InputGroup>
                <div>
                    {
                        filteredCities.map( city =>{
                            return this.renderCity(city)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default City;