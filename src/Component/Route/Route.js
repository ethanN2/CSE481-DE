import React from 'react';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
// import Navi from '../Navi/Navi';
// import Footer from '../Navi/Footer';
import Error from '../Error/Error';
import Freetest from '../Test-page/Freetest';
import About from '../About/About';
import Exams from '../Exams/Exams';
import Freequizpage from '../Quiz/Freequizpage';
import Admin from '../Admin/Admin';
import Createquest from '../Admin/Createquest'
import Allquestion from '../Admin/Allquestion'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Routes() {
  return (
    <Router>
    <div className="Route" >
      {/* <Navi /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Free-test" component={Freetest} />
          <Route path="/Register" component={Register} />
          <Route path="/About" component={About} />
          <Route path="/Our-exams" component={Exams} />
          <Route path="/Freequiz" component={Freequizpage}/>
          <Route path="/Admin" component={Admin}/>
          <Route path='/Create-question' component={Createquest} />
          <Route path='/Allquestion' component={Allquestion} />
          <Route component={Error} />
        </Switch>
       {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default Routes;
