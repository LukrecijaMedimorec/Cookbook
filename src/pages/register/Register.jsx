import './register.css'
import TopBar from "../../topbar/TopBar";
import RegistrationForm from "../../registrationForm/RegistrationForm";
export default function Register(){
    return(
        <div className="register">
            <TopBar/>
            <RegistrationForm></RegistrationForm>
        </div>
    )
}