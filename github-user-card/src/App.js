import React from 'react';
import './App.css';
import axios from 'axios';
import GitCards from './component/GitCards';
import UserCards from './component/UserCards';

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
       
      

      })
   console.log(response.data);
    })
  }

  handleChange = event => {
    this.setState({
      followers: event.target.value
    })

  }

  // componentdidUpdate(prevProps, prevState){
  //   if(this.state.userCard != prevState.userCard){ 
  // }
  // }
  findFriends = event => {
    event.preventDefault();
    axios.get('https://api.github.com/users/Pinefoot/followers')
    .then(response =>{
      console.log(response.data);
      this.setState({ 
        followers: response.data
      })
    })
    
  }



  render(){
  return (
    <div className="App">
      <h2>Github  User Cards</h2>
      
      
      <h2> This Is Me!</h2>
      <div className="userCard">
        
        <GitCards 
        key = {this.state.userCard.id}
        user = {this.state.userCard.login}
        name = {this.state.userCard.name}
        img = {this.state.userCard.avatar_url}
        following = {this.state.userCard.following}
        />
        
        <button onClick={this.findFriends}>Show My Followers!</button>
        <UserCards
     
         value = {this.state.followers}
        //  onChange={this.handleChange}
        //  user = {this.state.followers.login}
        //  name = {this.state.followers.name}
        //  img = {this.state.followers.avatar_url}
        //  following ={this.state.followers.following}
          />
       
        
        
      </div>
    </div>
  );
  }
}

export default App;


// {this.state.userCard.map(gits =>(