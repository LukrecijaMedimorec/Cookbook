import './topbar.css'
import {useNavigate} from 'react-router-dom';

export default function TopBar() {

    const navigate = useNavigate();

    const handleClick = (event, path) => {
        event.preventDefault();
        navigate(path);
    };
    //TODO popravi shadow na tekstu

    return (
        <nav>
            <div className="topbar">
                <div className="topLeft">
                    <i className="topLogoIcon fa-solid fa-kitchen-set"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem"><p className="itemText">HOME</p></li>
                        <li className="topListItem"><p className="itemText">MY RECIPES</p></li>
                        <li className="topListItem"><p className="itemText">ABOUT</p></li>
                    </ul>
                </div>
                <div className="topRight">
                    <i className="topProfileIcon fa-solid fa-user"></i>
                </div>
            </div>

        </nav>)
}