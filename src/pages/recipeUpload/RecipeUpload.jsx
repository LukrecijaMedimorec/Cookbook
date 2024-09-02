import './recipe_upload.css'
import TopBar from "../../topbar/TopBar";
import RecipeForm from "../../recipeForm/RecipeForm";

export default function RecipeUpload(){
    return(
        <div className="myRecipes">
            <TopBar/>
            <RecipeForm></RecipeForm>
        </div>
    )
}