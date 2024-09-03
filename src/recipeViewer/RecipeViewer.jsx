import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './recipe_viewer.css';
import RecipeCard from "../recipeCard/RecipeCard";
import defaultImage from "../assets/doughnuts.jpg";
import SearchBar from "../searchBar/SearchBar";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const RecipeViewer = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch recipes when component mounts
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/1/recipes/getAll');
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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/1/recipes/${id}`);
            setRecipes(recipes.filter(recipe => recipe.id !== id));
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    const handleSearch = async (query) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            // Fetch all recipes if search query is empty
            const response = await axios.get('http://localhost:8080/1/recipes/getAll');
            setRecipes(response.data);
        } else {
            try {
                const response = await axios.get(`http://localhost:8080/1/recipes/search`, { params: { query } });
                setRecipes(response.data);
            } catch (error) {
                console.error('Error searching recipes:', error);
            }
        }
    };

    return (
        <div className="viewer">
            <SearchBar onSearch={handleSearch} />
            <Button onClick={handleRecipeRedirect} textColor="black" color="white" fontSize="20px">New recipe</Button>
            {recipes.map(recipe => (
                <div key={recipe.id} className="recipe-card-container">
                    <RecipeCard
                        title={recipe.title}
                        author={recipe.author}
                        description={recipe.content} // Map content to description
                        tags={recipe.tags}
                        image={defaultImage}
                    />
                    <button
                        className="delete-button"
                        onClick={() => handleDelete(recipe.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default RecipeViewer;
