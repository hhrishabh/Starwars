import React,{Component} from 'react';
import './App.css';
import CardList from './CardList';
import Scroll from './Scroll';


class Species extends Component{
  constructor(){
    super();
    this.state= {
    species: [],
    
    }
    
  }
  componentDidMount(){
    const speciesURLS=[
    "https://swapi.co/api/species/",
    "https://swapi.co/api/species/?page=2",
    "https://swapi.co/api/species/?page=3",
    "https://swapi.co/api/species/?page=4"
    ];

    Promise.all(speciesURLS.map(async url => {
      const resp = await fetch(url);
      const mainResp =await resp.json();
      let lastResp = this.state.species;
      lastResp.push(mainResp.results);
      var sortedArrayOfPlanets = lastResp
        .flat()
      .sort((a, b) => a.name.localeCompare(b.name));
      this.setState({species:sortedArrayOfPlanets})
    }))
    
    
    
  }

render(){
  return(
     <div>
    <Scroll>
    <CardList robots={this.state.species}/>
    </Scroll>
  </div>
  )
 
}
  
}

export default Species;