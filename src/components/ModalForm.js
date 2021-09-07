import React, { Component } from 'react';
import {Modal,Button , Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { withAuth0 } from "@auth0/auth0-react";


class ModalForm extends Component {
    updatFunction = (e)=>{
        e.preventDefault()

let updateObj={
email:this.props.auth0.user.email,
title:e.target.title.value , 
url:e.target.url.value,
_id:this.props.itemObj._id

}

this.props.updateFunc(updateObj);
this.props.handleClose();


    }


    render() {
        return (
            <Modal
            show={this.props.show}
            onHide={this.props.handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Update ur information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={this.updatFunction}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Title:</Form.Label>
    <Form.Control type="text" name='title' defaultValue ={this.props.itemObj.title} placeholder="Title" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>URL:</Form.Label>
    <Form.Control type="text" name='url' defaultValue ={this.props.itemObj.url} placeholder="URL:" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Update
  </Button>
</Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        );
    }
}

export default withAuth0(ModalForm);