import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import Scroll from './Scroll';

class Planets extends Component{
  constructor(){
    super();
    this.state= {
    planets: [],
    
    }
    
  }
  componentDidMount(){
    const planetURLS=[
    "https://swapi.co/api/planets/",
    "https://swapi.co/api/planets/?page=2",
    "https://swapi.co/api/planets/?page=3",
    "https://swapi.co/api/planets/?page=4",
    "https://swapi.co/api/planets/?page=5",
    "https://swapi.co/api/planets/?page=6",
    "https://swapi.co/api/planets/?page=7"
    ];

    Promise.all(planetURLS.map(async url => {
      const resp = await fetch(url);
      const mainResp =await resp.json();
      let lastResp = this.state.planets;
      lastResp.push(mainResp.results);
      var sortedArrayOfPlanets = lastResp
        .flat()
      .sort((a, b) => a.name.localeCompare(b.name));
      this.setState({planets:sortedArrayOfPlanets})
    }))
    
    
    
  }

render(){
  return(
     <div>
    <Scroll>
    <CardList robots={this.state.planets}/>
    </Scroll>
  </div>
  )
 
}
  
}

export default Planets;
