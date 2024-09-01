import Header from "../../header/Header";
import './home.css'
import TopBar from "../../topbar/TopBar";

export default function Home(){
    return(
        <div className="home">
            <TopBar/>
            <Header/>
        </div>
    )
}