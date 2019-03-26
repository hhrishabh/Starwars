import React,{Component} from 'react';
import './App.css';
import CardList from './CardList';
import Scroll from './Scroll';


class People extends Component{
  constructor(){
    super();
    this.state= {
    people: [],
    
    }
    
  }
  componentDidMount(){
    const peopleURLS=[
    "https://swapi.co/api/people/",
    "https://swapi.co/api/people/?page=2",
    "https://swapi.co/api/people/?page=3",
    "https://swapi.co/api/people/?page=4",
    "https://swapi.co/api/people/?page=5",
    "https://swapi.co/api/people/?page=6",
    "https://swapi.co/api/people/?page=7",
    "https://swapi.co/api/people/?page=8",
    ];

    Promise.all(peopleURLS.map(async url => {
      const resp = await fetch(url);
      const mainResp =await resp.json();
      let lastResp = this.state.people;
      lastResp.push(mainResp.results);
      var sortedArrayOfPlanets = lastResp
        .flat()
      .sort((a, b) => a.name.localeCompare(b.name));
      this.setState({people:sortedArrayOfPlanets})
    }))
    
    
    
  }

render(){
  return(
     <div>
    <Scroll>
    <CardList robots={this.state.people}/>
    </Scroll>
  </div>
  )
 
}
  
}

export default People;