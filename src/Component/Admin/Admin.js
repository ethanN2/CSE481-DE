import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class Admin extends React.Component{
    render(){
        return(
            <div>
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
                    </Navbar>
                </div>
                <div className='adminbody'>
                    <Link to ="/Create-question">Create Question</Link>
                </div>
            </div>
        )
    }
}