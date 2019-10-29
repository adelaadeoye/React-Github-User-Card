import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import axios from "axios";
import FollowersCard from "./components/FollowersCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      followers: [],
      userName: ""
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
        console.log(this.state.user);
      })
      .catch(err => console.log(err));
    axios
      .get("https://api.github.com/users/adelaadeoye/followers")
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log(this.state.followers);
      })
      .catch(err => console.log(err));
  }
  componentDidUpdate(prevProps, prevState) {
    // always write these inside conditionals
    if (prevState.user !== this.state.user) {
      axios
      .get("https://api.github.com/users/adelaadeoye")
      .then(res => {
        this.setState({
          user: res.data
        });
        console.log(this.state.user);
      })
      .catch(err => console.log(err));
    axios
      .get("https://api.github.com/users/adelaadeoye/followers")
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log(this.state.followers);
      })
      .catch(err => console.log(err));
    }

    if (prevProps.someValue !== this.props.someValue) {
    }
  }
  handleChange = e => {
    this.setState({
      userName: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        this.setState({
          user: res.data
        });
        console.log(this.state.user);
      })
      .catch(err => console.log(err));
    axios
      .get(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log(this.state.followers);
      })
      .catch(err => console.log(err));
    this.setState({
      userName: ""
    });
  };
  render() {
    return (
      <div className="Apps">
        <div className="userContainer">
          <form onSubmit={this.handleSubmit}>
            <input
              id="user"
              placeholder="adelaadeoye"
              name="userName"
              type="text"
              value={this.state.userName}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Search</button>
          </form>
          <UserCard data={this.state.user} />
        </div>
        <div className="followers">
          {this.state.followers.map(item => (
            <FollowersCard key={item} data={item} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
