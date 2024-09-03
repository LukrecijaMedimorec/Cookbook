import React, { useEffect, useState } from 'react';
import './recipe_viewer.css';
import RecipeCard from "../recipeCard/RecipeCard";
import defaultImage from "../assets/doughnuts.jpg";
import SearchBar from "../searchBar/SearchBar";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const RecipeViewer = () => {
    const [recipes, setRecipes] = useState([]); // State to hold the list of recipes
    const navigate = useNavigate();

    // Fetch recipes from API when component mounts
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/1/recipes/getAll'); // Replace with your API endpoint
                setRecipes(response.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    const handleRecipeRedirect = () => {
        navigate('/upload');
    };

    return (
        <div className="viewer">
            <SearchBar />
            <Button onClick={handleRecipeRedirect} textColor="black" color="white" fontSize="20px">New recipe</Button>
            <div className="recipe-cards-container">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        title={recipe.title}
                        author={recipe.author}
                        description={recipe.content}
                        tags={recipe.tags}
                        image={defaultImage}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecipeViewer;
