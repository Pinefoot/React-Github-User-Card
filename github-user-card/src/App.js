import React from 'react';
import './App.css';
import axios from 'axios';
import GitCards from './component/GitCards';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userCard: {},
      followers: [],

    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/Pinefoot').then(response => {
      this.setState({
        userCard: response.data,
        followers: ''
      

      })
   console.log(response.data);
    })
  }

  handleChange = event => {
    this.setState({
      followers: event.target.value
    })

  }

  findFriends = event => {
    event.preventDefault();
    axios.get('https://api.github.com/users/Pinefoot/followers')
    .then(response =>{
      this.setState({ followers :response.data})
    })
  }



  render(){
  return (
    <div className="App">
      <h2>Github  User Cards</h2>
      <button onClick={this.findFriends}>Find Followers!</button>
      <input 
      type = 'text'
      value = {this.state.followers}
      onChange={this.handleChange}



      />

      <div className="userCard">
        
        <GitCards 
        user = {this.state.userCard.login}
        name = {this.state.userCard.name}
        img = {this.state.userCard.avatar_url}
        following = {this.state.userCard.following}
        />
        
      </div>
    </div>
  );
  }
}

export default App;


// {this.state.userCard.map(gits =>(