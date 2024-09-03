import React, { useState } from 'react';
import axios from 'axios';
import './recipe_form.css'; // Optional: For styling

const RecipeForm = () => {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            try {
                setIsSubmitting(true);
                const response = await axios.post('http://localhost:8080/1/recipes', {
                    title,
                    content,
                    author,
                    tags: tags.split(',').map(tag => tag.trim()), // Convert comma-separated tags to an array
                });

                console.log('Recipe submitted successfully:', response.data);
                // Clear the form or redirect as needed
                // Example: Clear the form
                setTitle('');
                setTags('');
                setContent('');
                setAuthor('');
            } catch (error) {
                console.error('Error submitting recipe:', error.response ? error.response.data : error.message);
                // Handle error response
                // Example: Display an error message
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setErrors(formErrors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!title) errors.title = 'Title is required';
        if (!tags) errors.tags = 'Tags are required';
        if (!content) errors.content = 'Content (directions) are required';
        if (!author) errors.author = 'Author is required';
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
                    <label htmlFor="tags">Tags (comma separated):</label>
                    <input
                        type="text"
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className={errors.tags ? 'error' : ''}
                    />
                    {errors.tags && <span className="error-message">{errors.tags}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className={errors.content ? 'error' : ''}
                        rows="6" // Adjust the number of rows as needed
                    />
                    {errors.content && <span className="error-message">{errors.content}</span>}
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
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Recipe'}
                </button>
            </form>
        </div>
    );
};

export default RecipeForm;
