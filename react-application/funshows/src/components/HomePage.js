import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


const HomePage = () => {
    const [shows, setShows] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/api/shows')
            .then(res => {
                console.log('from HomePage', res);
                setShows(res.data);
                console.log('from setShows', res.data);
            })
    }, [])



    return (
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle>{shows.title}</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Get Characters</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Get Characters</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Get Characters</Button>
                </Card>
            </Col>
        </Row>
    )
};

export default HomePage;