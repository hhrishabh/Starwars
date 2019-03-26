import React, { Component } from 'react';
import './App.css';
import Planets from './App';
import MainQuery from './MainQuery';
import Card from './Card';
import People from './People';
import Species from './Species';

class Main extends Component{
constructor(){
	super();
	this.state={
		pressed: '',
		

	}
	this.changer1=this.changer1.bind(this);
	this.changer2=this.changer2.bind(this);
	this.changer3=this.changer3.bind(this);
}
changer1(){
	console.log('hi')
	this.setState({
		pressed:<Planets/>
	})
}
changer2(){
	this.setState({
		pressed:<People/>
	})
}
changer3(){
	console.log('hi')
	this.setState({
		pressed:<Species/>
	})
}
render(){
if(this.props.length===0){
    return <h1>Loading</h1>
  }else{
    return(
  <div className='tc'>
    <h1 style={{fontSize:'50px', perspective: "400px", color:"#feda4a"}}>STARWARS</h1>
   <div className="MainCss">
   <div id="planet"onClick={this.changer1} className='tc bg-gray dib br3 pa3 ma2 grow pointer bw2 shadow-5 ' style={{fontSize:"15px",width:'200px'}}>
			
			<div>
				<h2>Planets</h2>
				
			</div>
		</div>
		<div id="planet" onClick={this.changer2} className='tc bg-gray dib br3 pa3 ma2 grow pointer bw2 shadow-5' style={{fontSize:"15px",width:'200px'}}>
			
			<div>
				<h2>People</h2>
				
			</div>
		</div>
		<div id="planet" onClick={this.changer3} className='tc bg-gray dib br3 pa3 ma2 grow pointer bw2 shadow-5' style={{fontSize:"15px",width:'200px'}}>
			
			<div>
				<h2>Species</h2>
				
			</div>
		</div>
		</div>
  	{this.state.pressed}
  </div>

    );

  }
}
}

	

export default Main;