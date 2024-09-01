import './about.css'
import TopBar from "../../topbar/TopBar";
import AboutViewer from "../../aboutViewer/AboutViewer";

export default function About(){
    return(
        <div className="about">
            <TopBar/>
            <AboutViewer></AboutViewer>
        </div>
    )
}