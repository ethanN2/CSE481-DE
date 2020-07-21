import React from 'react';
import './Error.css'
const Error = () => {
    return(
        <div className='error-mess'>
            <img
                src={require('../../assets/error.png')}
                width="80"
                height="80"
                alt="sad"
                />
            <h1>Oops, sorry. Something when wrong</h1>
        </div>
    );
}
export default Error