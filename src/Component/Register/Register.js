import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom'
import './Register.css';
//import Clock from '../Clock/Clock';
export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            speed: 4,
        }
    }
    render() {
        return (
            <div className='container'>
                {/*<Clock />*/}
                <div className='login-container'> 
                <div className='logo'>
                    <Image className='form-img' src= {require('../../assets/reactlogo.png')} style={{animation: `spin ${this.state.speed}s linear infinite`}}  />
                </div>
                <div className='login-field'>
                <Form>
                    <Form.Label className='form-label text-center'>Member Register</Form.Label>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control  type="email" placeholder="Username" className='input-field'/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Gmail" className='input-field'/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" className='input-field'/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Confirm Password" className='input-field'/>
                    </Form.Group>
                </Form>
                <div className='button-field'>
                <Button  type="submit" className='check-button'>
                        Register
                </Button>
                </div>
                <div className='external-link'>
                <Link className='ext-link-content1' to="/Login">Do you have an account?</Link><br/>
                </div>
                </div>
                </div>
            </div>
        );
    }
}