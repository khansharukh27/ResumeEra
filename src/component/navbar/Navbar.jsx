// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="d-flex justify-content-between navbar  border" style={{width:'100%'}}>
            <div className="">
                <Link className="resume" to="/">RESUME WEB</Link>
            </div>
            <div className=" d-flex mt-3 me-3" id="" style={{color:'white'}}>
                <Link className="m-1 tempLink" style={{ textDecoration: 'none',color:'white' }} to="/">TEMPLATES</Link>

                <Link className="m-1 tempLink" style={{ textDecoration: 'none', whiteSpace: 'nowrap',color:'white' }} to="/myresume">MY RESUME</Link>

                <Link className="m-1 tempLink" style={{ textDecoration: 'none',color:'white' }} to="/aboutme">ABOUT ME</Link>
            </div>
        </div>
    )
}

export default Navbar;