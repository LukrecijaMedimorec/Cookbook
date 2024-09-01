import './my_recipes.css'
import TopBar from "../../topbar/TopBar";
import RecipeViewer from "../../recipeViewer/RecipeViewer";

export default function MyRecipes(){
    return(
        <div className="myRecipes">
            <TopBar/>

            <RecipeViewer></RecipeViewer>
        </div>
    )
}