import './recipe_viewer.css'
import RecipeCard from "../recipeCard/RecipeCard";
import defaultImage from "../assets/doughnuts.jpg"
import SearchBar from "../searchBar/SearchBar";
import Button from "../button/Button";
import {useNavigate} from "react-router-dom";


const RecipeViewer= () => {

    const navigate = useNavigate();
    const handleRecipeRedirect = () => {
        navigate('/upload');
    };

    return (
        <div className="viewer">
            <SearchBar></SearchBar>
            <Button onClick={handleRecipeRedirect} textColor="black" color="white" fontSize="20px" >New recipe</Button>
            <RecipeCard title="Carrot cake" author="Pero Peric"
                        description="Carrot cake with walnuts, cinnamon and cream cheese frosting." tags={[]}
                        image={defaultImage}></RecipeCard>
        </div>
    )
};

export default RecipeViewer;