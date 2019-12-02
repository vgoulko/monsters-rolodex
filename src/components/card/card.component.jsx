import React from 'react';
import './card.styles.css';

export const Card = (props) => {
	// console.log(props.monster);
	return(
		<div className='card-container'>
			{/*<div/ check out this website for the monsters - https://robohash.org>*/}
			<img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
			<h2>{props.monster.name}</h2>
			<p>{props.monster.email}</p>
		</div>
	)
};