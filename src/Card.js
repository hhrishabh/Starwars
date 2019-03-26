import React,{Component} from 'react';

const Card = (props)=>{

	return(
		<div id="card" className='tc dib br3 pa3 ma2 grow pointer bw2 shadow-5'>
			
			<div>
				<h2>{props.name}</h2>
				<p>{props.population}</p>
				<p>{props.terrain}</p>
			</div>
		</div>



		);
}


export default Card;