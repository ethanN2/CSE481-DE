import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {Link, Redirect} from 'react-router-dom';
// import {PostData} from '../../Services/PostData'
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'',
            redirect: false,
            loggedin: false,
        }
        this.login = this.login.bind(this);
        this.onchange = this.onchange.bind(this);
    }

    // login(){
    //     PostData(this.state).then((result) => {
    //         let responseJSON = result;
    //         console.log(responseJSON)
    //         console.log(this.state)
    //     })
    // }

    login(){
        if(this.state.email === 'admin' && this.state.email === 'admin'){
            this.setState({
                redirect: true,
                loggedin: true
            })
        }
    }
    onchange(e) {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state)
    }

    render() {
        const redirect = this.state.redirect;
        if (redirect){
            return <Redirect to='/Admin'/>
        }
        else{
        return (
            <div className='container'>
                <div className='login-container'> 
                <div className='logo'>
                    <Image className='form-img' src= {require('../../assets/reactlogo.png')} />
                </div>
                <div className='login-field'>
                <Form>
                    <Form.Label className='form-label text-center'>Member Login</Form.Label>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control  type="email" placeholder="  Email" className='input-field' 
                        onChange={(e) => {this.setState({email: e.target.value})}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="  Password" className='input-field' 
                        onChange={(e) => {this.setState({password: e.target.value})}}/>
                    </Form.Group>
                </Form>
                <div className='button-field'>
                <Button  type="submit" className='check-button' onClick={() => this.login()}>
                        Login
                </Button>
                </div>
                <div className='external-link'>
                {/* <a href="#" className='ext-link-content1'>Forget Username/Password</a><br/> */}
                <Link className='ext-link-content2' to ="/Register">Create your account</Link>
                <Link className='ext-link-content2' to ="/">Back to home</Link>
                </div>
                </div>
                </div>
            </div>
        );
    }
    }
}

// onChange={(e) => {this.setState({email: e.target.value})}}
// onChange={(e) => {this.setState({password: e.target.value})}}