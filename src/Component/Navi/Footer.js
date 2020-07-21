import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Footer extends Component {
    render(){
        return (
            <div className='container-fluid'>
                <div className='footer'>
                    <div className='left-footer'>
                        <h6>E4U ENGLISH INTERNATIONAL EDUCATION SYSTEM </h6> 
                        <p>Head Office: Tay Son, Dong Da, Hanoi</p>
                        <p>Hotline: 024. 62936 032</p>
                    </div>
                    <div className='right-footer'>
                        <h6>Languages:</h6>
                        <p>English</p>
                        <p>Tiếng Việt</p>
                    </div>
                </div>
            </div>
        );
    }
}