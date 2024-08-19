import { Link } from "react-router-dom";
import '../css/navbar.css'; // Import the new CSS file

function Navbar() {
    return (
        // <div className="navbar-container">
            <div className="navbar-content">
                <div className="navbar-brand">
                    <Link className="navbar-link-brand" to="/">RESUME ERA</Link>
                </div>
                <div className="navbar-links">
                    <Link className="navbar-link" to="/template">TEMPLATES</Link>
                    <Link className="navbar-link" to="/myresume">MY RESUME</Link>
                    <Link className="navbar-link" to="/aboutme">ABOUT ME</Link>
                </div>
            </div>
        // </div>
    );
}

export default Navbar;
