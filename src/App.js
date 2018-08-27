import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
class App extends Component {
  /*constructor(){
    super();
    this.state = {
      uname: '',
      passd: ''
    }
    this.validate=this.validate.bind(this);
  };*/
  render() {
    return (
      <div className="App">
         <Router>
           <div>
          <div className= "App-icon">
             <Link to={"/"}>
              <i class="fa fa-home" style={{fontSize:'100px'}}></i>
              </Link>
              <Link to={"/login"}>
              <i class="fa fa-lock" style={{fontSize:'100px'}}></i>
              </Link>

          </div >
          <div  >
               <Route exact path='/' render={()=><HomePage/>} />
              <Route exact path='/login' render={()=><Login/>} />
          </div>
          </div>
          </Router>
       
      </div>
    );
  }
}
export default App;
