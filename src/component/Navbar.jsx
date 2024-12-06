import { Link } from "react-router-dom";
import '../css/navbar.css'; // Import the new CSS file
import { useAuth0, User } from "@auth0/auth0-react";
import Login from "../component/signupAndLogin/Login";
import LogOut from "../component/signupAndLogin/LogOut";
import Profile from "../component/signupAndLogin/ProfilePage";

function Navbar() {
    const { user,isAuthenticated } = useAuth0();

    return (
        <div className="navbar-content ">
            <div>
                <div className="navbar-brand" style={{marginBottom:'-35px'}}>
                    <Link className="navbar-link-brand" to="/"> 
                        {/* <span class="star">★</span> */}
                        
                        <p >RESUME ERA </p><br />
                        {isAuthenticated &&(<p style={{marginTop:'-56px'}}>Welcome {user.name} !</p>)}
                        
                        
                        {/* <span class="star">★</span> */}
                        </Link>
                </div>
            </div>

            <div className="navbar-links">
                <Link className="navbar-link" to="/">Home</Link>
                <Link className="navbar-link" to="/template">TEMPLATES</Link>
                <Link className="navbar-link" to="/myresume">MY RESUME</Link>
                <Link className="navbar-link" to="/cover_letter">CoverLetter</Link>
            </div>
        </div>
    );
}

export default Navbar;
