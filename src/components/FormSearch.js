import React, { Component } from 'react';
import '../App.css';

import { InputGroup, Form, Col, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';

import City from './City';



registerLocale('fr', fr)

class FormSearch extends Component {

    

    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };

  render () {
      return (
            <div className="FormSearch">
                <Form>
                    <Form.Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Discipline</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control as="select">
                                    <option selected></option>
                                    <option>Athlétisme</option>
                                    <option>Tennis</option>
                                    <option>Triathlon</option>
                                    <option>Aviron</option>
                                </Form.Control>   
                            </InputGroup>
                            
                        </Col>
                        <Col>
                            <City />
                        </Col>
                        <Col>
                        <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Date</InputGroup.Text>
                                </InputGroup.Prepend>
                                
                                    <DatePicker
                                        className="DatePicker" 
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        dateFormat="PPP"
                                        locale="fr"
                                    />
                                
                            </InputGroup>
                        </Col>
                        <Col>
                            <Button variant="outline-secondary">Rechercher</Button>{' '}
                        </Col>
                    </Form.Row>
                </Form>
                 
            </div>
        );
    }
}

export default FormSearch;