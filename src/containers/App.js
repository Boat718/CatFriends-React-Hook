import React, {Component} from 'react'
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css' ; 
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {

    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
        console.log('cons')
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then((responsedata)=>responsedata.json()).then((data)=> this.setState({robots:data}))
        console.log('didmount')
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value});
    }

    render(){
        console.log('render')
        const {robots,searchfield} = this.state;
        const filteredRobot = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        if(!filteredRobot.length){
            return <h1>Loading</h1>
        }else{
            return(
                <div className = 'tc'>
                    <h1> CatFriends </h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobot} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;