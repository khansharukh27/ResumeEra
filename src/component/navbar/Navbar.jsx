// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="d-sm-flex justify-content-between navbar" style={{}}>
            <div className="">
                <Link className="resume" to="/">RESUME WEB</Link>
            </div>
            <div className=" d-flex mt-3 me-3" id="">
                <Link className="m-1 tempLink" style={{ textDecoration: 'none' }} to="/">TEMPLATES</Link>

                <Link className="m-1 tempLink" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} to="/myresume">MY RESUME</Link>

                <Link className="m-1 tempLink" style={{ textDecoration: 'none' }} to="/aboutme">ABOUT ME</Link>
            </div>
        </div>
    )
}

export default Navbar;