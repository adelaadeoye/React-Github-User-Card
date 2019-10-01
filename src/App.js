import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import Followers from "./components/FollowersCard";
import axios from 'axios'
import FollowersCard from "./components/FollowersCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user:"",
      followers: []
    };
    console.log("Constructor is running!");
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/adelaadeoye")
      .then(res => {
        this.setState({
          user: res.data
        });
        console.log(this.state.user)

      })
      .catch(err => console.log(err));
      axios
      .get("https://api.github.com/users/adelaadeoye/followers")
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log(this.state.followers)

      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <UserCard data={this.state.user}/>
        {this.state.followers.map(item=>
          <FollowersCard key={item} data={item}/>
        )}
        
      </div>
    );
  }
}
export default App;
