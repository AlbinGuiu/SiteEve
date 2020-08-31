import React, { Component } from 'react';
import '../App.css';

import { Row, Col, Card, Button } from 'react-bootstrap'

class FirstEvents extends Component {
  render () {
      return (
            <div className="FirstEvents">
               <h2>Événements à venir</h2>
                <Row>
                    <Col xs={12} md={4}>
                        <Card>
                            <div className="CardIMG">
                                <Card.Img className="Cardimg" variant="top" height="200px" src="https://www.sportstoursinternational.co.uk/wp-content/uploads/2015/10/Paris14.jpg" />
                            </div>
                            <Card.Body>
                                <Card.Title>Marathon de Paris</Card.Title>
                                <Card.Text className="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in interdum odio. Proin id enim id nunc mollis pharetra. 
                                </Card.Text>
                                <Button variant="secondary">En savoir plus...</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card>
                            <div className="CardIMG">
                                <Card.Img className="Cardimg testParis" variant="top" src="https://images.sportstoursinternational.co.uk/wp-content/uploads/2015/10/MDP-SE_logo-Quadri-250x250-600x600.jpg" />
                            </div>
                            <Card.Body>
                                <Card.Title>Marathon de Paris</Card.Title>
                                <Card.Text className="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in interdum odio. Proin id enim id nunc mollis pharetra. 
                                </Card.Text>
                                <Button variant="secondary">En savoir plus...</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card>
                            <div className="CardIMG">
                                <Card.Img className="Cardimg" variant="top" src="https://www.sportstoursinternational.co.uk/wp-content/uploads/2015/10/Paris-finish3.jpg" />
                            </div>                            
                            <Card.Body>
                                <Card.Title>Marathon de Paris</Card.Title>
                                <Card.Text className="justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in interdum odio. Proin id enim id nunc mollis pharetra. 
                                </Card.Text>
                                <Button variant="secondary">En savoir plus...</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>                      
            </div>
        );
    }
}

export default FirstEvents;