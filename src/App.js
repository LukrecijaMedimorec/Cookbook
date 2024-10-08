import Home from "./pages/home/Home";
import {Route, Routes} from "react-router-dom";
import MyRecipes from "./pages/myRecipes/MyRecipes";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import RecipeUpload from "./pages/recipeUpload/RecipeUpload";
import PrivateRoute from "./privateRoute/PrivateRoute";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route
                    path="/recipes"
                    element={<PrivateRoute element={<MyRecipes />} />}
                />
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route
                    path="/upload"
                    element={<PrivateRoute element={<RecipeUpload />} />}
                />
            </Routes>
        </>
    );
}

export default App;
