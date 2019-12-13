import React from 'react';

const DrinkCard = ({ name, img, desc, abv, firstBrewed, tagline, foodPairing }) => {
	return (
		<div className='Drink_Card'>
			<img className='Beer_Img' src={img} alt='beer' />
			<div>
				<p>Name: {name}</p>
				<p>Tagline: {tagline}</p>
				<p>Description: {desc}</p>
				<p>Alcohol By Volume: {abv}</p>
				<p>First Brewed: {firstBrewed}</p>
			</div>
		</div>
	);
};

export default DrinkCard;
