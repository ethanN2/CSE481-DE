import React, {Component} from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navi.css'
export default class Navi extends Component {
    render(){
        return (
            <div className='container-fluid'>
                <div className='nav-bar' >
                    <Navbar>
                    <Navbar.Brand href="#">
                    <Link to ="/">
                        <img
                        src={require('../../assets/home-logo.png')}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav className="ml-auto nav-font" >
                        <Nav.Link href="" ><Link to ="/About">About us</Link></Nav.Link>
                        <Nav.Link href="" ><Link to ="/Our-exams">Our exams</Link></Nav.Link>
                        <Nav.Link href="" ><Link to ="/Free-test">Free Test</Link></Nav.Link>
                        <Nav.Link href="" ><Link to ="/Login">Login</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}