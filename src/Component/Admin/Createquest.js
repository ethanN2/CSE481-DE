import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class Createquest extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false
        }
    }

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
                <div>
                <h4>Create your question now!</h4>
                </div>
            </div>
        )
    }
}