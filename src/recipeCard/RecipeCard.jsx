import React from 'react';
import './recipe_card.css';
const RecipeCard = ({title, author, description, tags, image}) => {
    return (
        <div className="card">
            <div className="cardText">
                <h2 className="card-title">{title}</h2>
                <p className="card-author">{author}</p>
                <p className="card-description">{description}</p>
                <ul className="card-tags">
                    {tags.length > 0 ? (
                        tags.map((tag, index) => (
                            <li key={index} className="card-tag">{tag}</li>
                        ))
                    ) : (
                        <li className="card-tag">No tags available</li>
                    )}
                </ul>
            </div>
            <div className="cardImage">
                <img src={image} alt={title}/>
            </div>
        </div>
    );
};

export default RecipeCard;
