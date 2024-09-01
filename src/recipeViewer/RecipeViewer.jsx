import './recipe_viewer.css'
import RecipeCard from "../recipeCard/RecipeCard";
import defaultImage from "../assets/doughnuts.jpg"
import SearchBar from "../searchBar/SearchBar";


export default function RecipeViewer() {
    return (
        <div className="viewer">
            <SearchBar></SearchBar>
            <RecipeCard title="Carrot cake" author="Pero Peric"
                        description="Carrot cake with walnuts, cinnamon and cream cheese frosting." tags={[]}
                        image={defaultImage}></RecipeCard>
        </div>
    )
}