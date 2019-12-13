import React from 'react';
import { connect } from 'react-redux';
import { getDrink } from '../actions';
import DrinkCard from './DrinkCard';

const Drink = (props) => {
	return (
		<div>
			{props.drink.map((drink) => (
				<DrinkCard
					key={drink.id}
					img={drink.image_url}
					name={drink.name}
					tagline={drink.tagline}
					desc={drink.description}
					abv={drink.abv}
					firstBrewed={drink.first_brewed}
				/>
			))}
			<button className='Button' onClick={props.getDrink}>
				Get Drink
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		drink : state.drink
	};
};

export default connect(mapStateToProps, { getDrink })(Drink);
