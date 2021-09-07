import React, { Component } from 'react';
import { withAuth0 } from "@auth0/auth0-react";

import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class DataCard extends Component {
    deleteHandler =()=>{

  this.props.deleteHandler(this.props.itemObj._id);

    }

    updateHandler =()=>{

this.props.updateHandler(this.props.itemObj);



    }


    render() {
        return (
            
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.itemObj.url} />
  <Card.Body>
    <Card.Title>{this.props.itemObj.title}</Card.Title>
    <Button variant="primary" onClick={this.updateHandler}>Update</Button>
    <Button variant="primary" onClick={this.deleteHandler}>Delete</Button>

  </Card.Body>
</Card>
            
        );
    }
}

export default withAuth0(DataCard);