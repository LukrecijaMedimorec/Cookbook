// RecipeUploadForm.js
import React, { useState } from 'react';
import './recipe_form.css'; // Optional: For styling

const RecipeForm = () => {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [directions, setDirections] = useState('');
    const [author, setAuthor] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Handle successful form submission here
            console.log('Recipe submitted with:', { title, tags, directions, author, shortDescription });
        } else {
            setErrors(formErrors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!title) errors.title = 'Title is required';
        if (!tags) errors.tags = 'Tag is required';
        if (!directions) errors.directions = 'Directions are required';
        if (!author) errors.author = 'Author is required';
        if (!shortDescription) errors.shortDescription = 'Short description is required';
        return errors;
    };

    return (
        <div className="recipe-upload-form-container">
            <h2 className="title">Upload New Recipe</h2>
            <form onSubmit={handleSubmit} className="recipe-upload-form">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={errors.title ? 'error' : ''}
                    />
                    {errors.title && <span className="error-message">{errors.title}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="tags">Tag:</label>
                    <select
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className={errors.tags ? 'error' : ''}
                    >
                        <option value="">Select a tag</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="main-dish">Main Dish</option>
                        <option value="salad">Salad</option>
                        <option value="appetizer">Appetizer</option>
                        {/* Add more options as needed */}
                    </select>
                    {errors.tags && <span className="error-message">{errors.tags}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="directions">Directions:</label>
                    <textarea
                        id="directions"
                        value={directions}
                        onChange={(e) => setDirections(e.target.value)}
                        className={errors.directions ? 'error' : ''}
                        rows="6" // Adjust the number of rows as needed
                    />
                    {errors.directions && <span className="error-message">{errors.directions}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className={errors.author ? 'error' : ''}
                    />
                    {errors.author && <span className="error-message">{errors.author}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="shortDescription">Short Description:</label>
                    <input
                        type="text"
                        id="shortDescription"
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                        className={errors.shortDescription ? 'error' : ''}
                    />
                    {errors.shortDescription && <span className="error-message">{errors.shortDescription}</span>}
                </div>
                <button type="submit">Submit Recipe</button>
            </form>
        </div>
    );
};

export default RecipeForm;
