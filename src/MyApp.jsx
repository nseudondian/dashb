import React, { Component } from 'react';
import Dashboard from './Dashboard'


class MyApp extends Component {
    constructor(){
        super()
        this.state = {
            fetchedData : {}
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts/1/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    fetchedData : data
                })
            })
    }
    render() { 
        return ( 
            <div>
                {this.state.fetchedData.title}
                <Dashboard />
            </div>
         );
    }
}
 
export default MyApp ;