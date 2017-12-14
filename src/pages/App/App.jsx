import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';
import ShowPage from '../ShowPage/ShowPage';
import UserPage from '../UserPage/UserPage';
import userService from '../../utils/userService';
 
class App extends Component {
  constructor(props){
    super();
    this.state = {
      user: null,
    };
  }

  //User Callback Methods 
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  //Lifecycle Methods 
  componentDidMount(){
    let user = userService.getUser(); 
    this.setState({user});    
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar 
              user={this.state.user} 
              handleLogout={this.handleLogout} 
            />
            <Switch>
              <Route exact path='/' render={(props) =>
                <MainPage
                  {...props}

                />
              }/>
              <Route exact path='/movies/:id' render={(props) => 
                <ShowPage 
                  {...props}

                /> 
              }/> 
              <Route exact path='/profile' render={(props) => 
                <UserPage 
                  {...props}
                  user={this.state.user}
                /> 
              }/> 
              <Route exact path='/signup' render={(props) => 
                <SignupPage 
                  {...props}
                  handleSignup={this.handleSignup}

                />
              }/>
              <Route exact path='/login' render={(props) => 
                <LoginPage 
                  {...props}
                  handleLogin={this.handleLogin}
                /> 
              }/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App; 