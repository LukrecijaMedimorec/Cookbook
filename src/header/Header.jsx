import './header.css'
import Button from "../button/Button";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const handleLoginRedirect = () => {
        navigate('/login');
    };
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLarge">Hi Chef!</span>

                <span className="headerTitleSmall">Are you ready to start cooking?</span>
                <Button onClick={handleLoginRedirect} textColor="#FFFFFF" color="#5eb000" fontSize="30px">Let's cook!</Button>
            </div>
        </div>
    )
} ;

export default Header;

