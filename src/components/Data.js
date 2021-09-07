import React, { Component } from 'react';
import { withAuth0 } from "@auth0/auth0-react";

import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Data extends Component {
    addHandler=()=>{
        let itemObj={
         email:this.props.auth0.user.email , 
         title:this.props.itemObj.title ,
         url:this.props.itemObj.url

        }
      this.props.addHandler(itemObj);

    }

    render() {
        return (
            
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.itemObj.url} />
  <Card.Body>
    <Card.Title>{this.props.itemObj.title}</Card.Title>
    <Button variant="primary" onClick={this.addHandler}>Add</Button>
  </Card.Body>
</Card>
            
        );
    }
}

export default withAuth0(Data);