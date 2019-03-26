import React from 'react';

import Card from './Card';

const CardList = ({robots})=>{
	
		return(
		<div>
			{
			robots.map((user,i)=>{
			return (
				<Card 
				name={robots[i].name} 
				population={robots[i].population}
				
				/>	
				);
			})
			}			
		</div>
		);
}









	

export default CardList;