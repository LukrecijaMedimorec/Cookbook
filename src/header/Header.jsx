import './header.css'
import Button from "../button/Button";

export default function Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLarge">Hi Chef!</span>

                <span className="headerTitleSmall">Are you ready to start cooking?</span>
                <Button textColor="#FFFFFF" color="#5eb000" fontSize="30px">Let's cook!</Button>
            </div>
        </div>
    )
}