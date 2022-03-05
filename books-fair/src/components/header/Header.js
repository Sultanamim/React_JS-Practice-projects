import React,{Component} from 'react'
import {Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse} from 'reactstrap';
import './Header.css';
import Logo from '../../data/images/logo4.png';

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state ={
            isNavOpen: false,
        }
    }
    

    navToggle = () => {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }
    render() {
        return (
            <div className='header'>
                <Navbar dark color='dark' expand="md">
                  <div className='container'> 
                    <NavbarBrand href="/" className='mr-auto ml-md-5 Brand'>
                        <img src={Logo} alt="Books fair" width="80px" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.navToggle} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                         <Nav className='ml-auto' navbar> 
                            <NavItem>
                                <NavLink exact to="/" className='Navbar'>Books</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/orders" className='Navbar'>Orders</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/cart" className='Navbar'>Cart</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/contact" className='Navbar'>Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/login" className='Navbar'>Login</NavLink>
                            </NavItem>
                          </Nav> 
                    </Collapse>
                  </div>
               </Navbar>
            </div>
          )
    }
}
