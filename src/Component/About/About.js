import React, {Component} from 'react'
import './About.css';
import Navi from '../Navi/Navi';
import Footer from '../Navi/Footer';

export default class About extends Component {
    render() {
        return(
            <div>
            <Navi />
                <h1 style={{textAlign:"center"}}>About Page</h1>
            <Footer />
            </div>
        )
    }
}