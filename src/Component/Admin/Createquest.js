import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default class Createquest extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false,
            dataSource: [],
            isLoading: true,
            newquestion: '',
            level: '',
        }
        this.onchange = this.onchange.bind(this);
    }
    componentDidMount(){
        // this.getQuiz();
    }
    onchange(e) {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state.newquestion)
    }
    createQuiz(){

    }
    // getQuiz(){
    //     fetch('http://localhost/api/question/2', {
    //         method: 'GET',
    //       })
    //         .then(response => response.json())
    //         .then(json => {
    //           this.setState({
    //             isLoading: false,
    //             dataSource: json.question,
    //           });
    //         })
    //         .catch(error => {
    //           console.error(error);
    //         });
    // }
    render(){
        // if(this.state.isLoading){
        //     return(
        //       <div>
        //         <div className='nav-bar' >
        //             <Navbar>
        //             <Navbar.Brand href="#">
        //             <Link to ="/">
        //                 <img
        //                 src={require('../../assets/home-logo.png')}
        //                 width="80"
        //                 height="80"
        //                 className="d-inline-block align-top"
        //                 alt="React Bootstrap logo"
        //                 />
        //             </Link>
        //             </Navbar.Brand>
        //             <Navbar.Toggle />
        //             </Navbar>
        //         </div>
        //           <p>Please Wait</p>
        //       </div>
        //     )
        //   }
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
                <form>
                    <label>
                        Question:
                        <input type="text" name="name" onChange={(e) => {this.setState({newquestion: e.target.value})}}/>
                    </label>
                    <label>
                        Level:
                        <input type="text" name="name" onChange={(e) => {this.setState({level: e.target.value})}}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {/* <Button  type="submit"  onClick={() => this.getQuiz}>
                        Get quiz
                </Button> */}
                <div>
                {/* <form>
                    <label>
                        Answer1:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Answer2:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Answer3:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Answer4:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form> */}
                </div>
                </div>
            </div>
        )
    }
}