import React, { Component } from 'react'
import {Card, CardImg, CardText, CardFooter, Button, Modal, ModalBody,
ModalFooter} from 'reactstrap';
import BookDetail from './bookDetail';
import Cart from '../Cart/Cart';

export default class BookMenu extends Component{
    state = {
        isModalOpen : false,
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    addingToCart = () => {
        let books = null;
        return (
            books = < Cart
                        title= {this.props.title}
                        price={this.props.price}
                        bookId= {this.props.bookId} />
        )
    }

    

render() {
    return (
        <div>
            <Card style={{
              padding: "5px",
              margin: "10px",
          }}>
                <CardImg src={this.props.image} alt="Book" width="70%" height="400px" />
                <CardFooter>
                    <CardText>{this.props.title}</CardText>
                    <Button 
                       onClick={this.toggleModal} 
                       style={{width: "100%", backgroundColor: "#0984e3"}}
                       >See More</Button>
                </CardFooter>
            </Card>
            <Modal isOpen={this.state.isModalOpen} >
              <ModalBody>
                 <BookDetail
                     image={this.props.image}
                     title={this.props.title}
                     writer={this.props.writer}
                     year={this.props.year}
                     price={this.props.price}
                     description={this.props.description} />
              </ModalBody>
              <ModalFooter>
                  <Button 
                       onClick={this.addingToCart} 
                       style={{backgroundColor: "#0984e3", border: "none", color: "white"}}
                       >Add to Cart</Button>
                  <Button onClick={this.toggleModal}>Cancel</Button>
              </ModalFooter>
            </Modal>
      </div> 
  )
 }
}
