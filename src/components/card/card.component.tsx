import React from 'react';
import './card.styles.scss';

type CardProps = {};

export const Card:React.FC<CardProps> = () => {

    const ingredientsClick = () => {

    }

    const recipeClick = () => {

    }


    return (
        <div className='card'>
            <img className="card-image" src="https://www.w3schools.com/howto/img_avatar.png" alt="John Doe"/>
            <h4 className="card-title">John Doe</h4>
            <button onClick={ingredientsClick} className="ingredients-btn card-btn">Ingredients</button>
            <button onClick={recipeClick} className="recipe-btn card-btn">See Complete Recipe</button>
        </div>
    );
}