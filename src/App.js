import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
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
      <div className="Apps">
        <div className="userContainer">
        <UserCard data={this.state.user}/>
        </div>
        <div className="followers">
        {this.state.followers.map(item=>
          <FollowersCard key={item} data={item}/>
        )}
        </div>
      </div>
    );
  }
}
export default App;
