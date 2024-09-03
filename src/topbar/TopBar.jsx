import './topbar.css';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, removeToken } from '../utils/auth';

const TopBar = () => {
    const navigate = useNavigate();

    const handleHomeRedirect = () => {
        navigate('/');
    };

    const handleRecipesRedirect = () => {
        navigate('/recipes');
    };

    const handleAboutRedirect = () => {
        navigate('/about');
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        removeToken();
        navigate('/login');
    };

    return (
        <nav>
            <div className="topbar">
                <div className="topLeft">
                    <i className="topLogoIcon fa-solid fa-kitchen-set"></i>
                </div>
                <div className="topCenter">
                    <div className="topList">
                        <div className="topListItem" onClick={handleHomeRedirect}><p className="itemText">HOME</p></div>
                        <div className="topListItem" onClick={handleRecipesRedirect}><p className="itemText">MY RECIPES</p></div>
                        <div className="topListItem" onClick={handleAboutRedirect}><p className="itemText">ABOUT</p></div>
                    </div>
                </div>
                <div className="topRight">
                    {isAuthenticated() && (
                        <button className="logoutButton" onClick={handleLogout}>Logout</button>
                    )}
                    <i className="topProfileIcon fa-solid fa-user" onClick={handleLoginRedirect}></i>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
