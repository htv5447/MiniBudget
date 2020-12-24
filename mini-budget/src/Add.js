import React, { Component } from 'react';
import {Button,Label, Input, ModalHeader, Modal, ModalBody, ModalFooter} from 'reactstrap';

class Add extends Component{
    constructor(props){
        super(props);
        this.state={modal: false, item: "", price: ""
    };
}


toggle = () =>{
    this.setState({
      modal: !this.state.modal
    });}
    
updateItem = (e) =>
  { this.setState({item: e.target.value}) //Update the text data in state
  }

updatePrice = (e) => 
  { this.setState({price: e.target.value}) //Update the text data in state
  }

    
addItem = () =>{
        fetch('/item/', {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({item: this.state.item, price: this.state.price})
      
        })
        .then(this.toggle)
        .then(this.props.onClick())
}
    
    
      render(){
        return (
        <div>
          <Button color = "primary" onClick={this.toggle}>Add</Button>
    
          <Modal
            isOpen={this.state.modal} toggle={this.toggle}
          >
            <ModalHeader  toggle={this.toggle} closeButton>Let's add an item and its price</ModalHeader>
            <ModalBody>
                <Label for="Item">Item</Label>
                <Input id="Item" type='text' onChange={this.updateItem}></Input>
                <Label for="Price">Price</Label>
                <Input id="Price" type='text' onChange={this.updatePrice}></Input>
            </ModalBody>
            <ModalFooter>
            <Button color = "primary" onClick={this.addItem}>
                Ok
              </Button>
              <Button color = "secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        );
      }
    }

    
export default Add;