import './login.css'
import TopBar from "../../topbar/TopBar";
import LoginForm from "../../loginForm/LoginForm";
export default function Login(){
    return(
        <div className="login">
            <TopBar/>
            <LoginForm></LoginForm>
        </div>
    )
}