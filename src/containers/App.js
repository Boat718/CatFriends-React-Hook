import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import Time from "../components/Time";

function App() {
  // constructor(){
  //     super()
  //     this.state = {
  //         robots:[],
  //         searchfield:''
  //     }
  //     console.log('cons')
  // }

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfied] = useState("");

  // componentDidMount(){
  //     fetch('https://jsonplaceholder.typicode.com/users').then((responsedata)=>responsedata.json()).then((data)=> this.setState({robots:data}))
  //     console.log('didmount')
  // }

  //   setTimeout(() => {
  //     setTime(s);
  //   }, 1000);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responsedata) => responsedata.json())
      .then((data) => setRobots(data));
    console.log("didmount");
  }, []);

  const onSearchChange = (event) => {
    setSearchfied({ searchfield: event.target.value });
  };

  const filteredRobot = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  if (!filteredRobot.length) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1> CatFriends </h1>
        <Time />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobot} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
