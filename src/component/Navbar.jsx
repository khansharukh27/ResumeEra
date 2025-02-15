import { Link } from "react-router-dom";
import '../css/navbar.css'; // Import the new CSS file
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const { user,isAuthenticated } = useAuth0();

    return (
        <div className="navbar-content ">
            <div>
                <div className="navbar-brand" style={{marginBottom:'-22px'}}>
                    <Link className="navbar-link-brand" to="/"> 
                        <p className="logo-Name" style={{
                            background: "linear-gradient(90deg,green, blue, indigo, violet)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontSize: "25px",
                            fontWeight: "bold",
                            fontFamily:'sans-serif',
                            marginBottom:'',
                            position:'absolute'
                            
                        }}>RESUME ERA </p><br />
                        <br />
                        {isAuthenticated &&(<p style={{marginTop:'-35px',paddingTop:'',fontFamily:'sans-serif'}}>Welcome {user.name} !</p>)}
                        </Link>
                </div>
            </div>
            <div className="navbar-links" style={{marginTop:''}}>
                <Link className="navbar-link" to="/" style={{fontSize:'auto'}}>Home</Link>
                <Link className="navbar-link" to="/template" style={{fontSize:'auto'}}>TEMPLATES</Link>
                <Link className="navbar-link" to="/myresume" style={{fontSize:'auto'}}>MY RESUME</Link>
                <Link className="navbar-link" to="/cover_letter" style={{fontSize:'auto'}}>CoverLetter</Link>
            </div>
        </div>
    );
}

export default Navbar;
