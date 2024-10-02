import { Link } from "react-router-dom";
import '../css/navbar.css'; // Import the new CSS file

function Navbar() {
    return (
        <div className="navbar-content">
            <div className="navbar-brand">
                <Link className="navbar-link-brand" to="/"> <span class="star">★</span>
        {/* <span class="star">★</span> */}
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>RESUME ERA  <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        {/* <span class="star">★</span> */}
        <span class="star">★</span> </Link>
            </div>
            <div className="navbar-links">
            <Link className="navbar-link" to="https://resumeera.xyz">Home</Link>
                <Link className="navbar-link" to="/template">TEMPLATES</Link>
                <Link className="navbar-link" to="/myresume">MY RESUME</Link>
                <Link className="navbar-link" to="/coverletter">CoverLetter</Link>
            </div>
        </div>
    );
}

export default Navbar;
