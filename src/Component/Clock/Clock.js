import React, {Component} from 'react';
import './Clock.css'

export default class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: ''
        }
    }

    async componentDidMount() {
        this.getTime = setInterval(() => {
            this.getCurrentTime()
        },1000)
    }

    getCurrentTime = () => {
        var d = new Date();
        var hours = d.getHours();
        var mins = d.getMinutes();
        var secs = d.getSeconds();
        this.setState({
            time: hours + ':' + mins + ':' + secs,
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 className='time'>{this.state.time}</h3>
            </div>
        );
    }
}