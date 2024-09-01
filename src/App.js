import Home from "./pages/home/Home";
import {Route, Routes} from "react-router-dom";
import MyRecipes from "./pages/myRecipes/MyRecipes";
import About from "./pages/about/About";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recipes" element={<MyRecipes/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    );
}

export default App;
