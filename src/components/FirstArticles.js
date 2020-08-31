import React, { Component } from 'react';
import '../App.css';

import { Row, Col, Card, Button } from 'react-bootstrap'

class FirstArticles extends Component {
  render () {
      return (
            <div className="FirstArticles">
               <h2>Nos derniers articles</h2>
                <Row>
                    <Col xs={12} md={4}>
                        <Card>
                            <div className="CardIMG">
                                <Card.Img className="Cardimg" variant="top" height="200px" src="https://cdn-media.rtl.fr/cache/8J4CPoKW73AmqNYSR7rkPw/880v587-0/online/image/2020/0830/7800761720_julian-alaphilippe-a-nice-le-30-aout-2020.jpg" />
                            </div>
                            <Card.Body>
                                <Card.Title>[Résultats] 2ème étape du Tour de France </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"><i class='far fa-clock'></i> 30/08/2020</Card.Subtitle>
                                <Card.Text className="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in interdum odio. Proin id enim id nunc mollis pharetra. 
                                </Card.Text>
                                <Button variant="secondary">Lire l'article</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card>
                            <div className="CardIMG">
                                <Card.Img className="Cardimg" variant="top" src="https://static.wixstatic.com/media/ce1de9_422b9fa243b74798a1090ffe2b9268a1~mv2.png/v1/fill/w_1000,h_453,al_c,usm_0.66_1.00_0.01/ce1de9_422b9fa243b74798a1090ffe2b9268a1~mv2.png" />
                            </div>
                            <Card.Body>
                                <Card.Title>[Présentation] 2ème étape du Tour de France</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"><i class='far fa-clock'></i> 30/08/2020</Card.Subtitle>
                                <Card.Text className="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in interdum odio. Proin id enim id nunc mollis pharetra. 
                                </Card.Text>
                                <Button variant="secondary">Lire l'article</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card>
                                <div className="CardIMG">
                                    <Card.Img className="Cardimg" variant="top" src="https://todaycycling.com/wp-content/uploads/2020/08/alexander-kristoff-tour-de-france-2020-etape-1-1024x682.jpg" />
                                </div>                            <Card.Body>
                                <Card.Title>[Résultats] 1ère étape du Tour de France </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"><i class='far fa-clock'></i> 29/08/2020</Card.Subtitle>
                                <Card.Text className="justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in interdum odio. Proin id enim id nunc mollis pharetra. 
                                </Card.Text>
                                <Button variant="secondary">Lire l'article</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>                      
            </div>
        );
    }
}

export default FirstArticles;