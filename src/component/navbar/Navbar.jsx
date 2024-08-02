import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="border" style={{ width: '' }}>
            <div className="d-flex justify-content-between navbar border flex-column flex-sm-row" style={{ width: '' }}>
                <div className="">
                    <Link className="resume" to="/">RESUME ERA</Link>
                </div>
                <div className="d-flex mt-3 me-3" style={{ color: 'white' }}>
                    <Link className="m-1 tempLink" style={{ textDecoration: 'none', color: 'white' }} to="/">TEMPLATES</Link>

                    <Link className="m-1 tempLink" style={{ textDecoration: 'none', color: 'white' }} to="/myresume">MY RESUME</Link>

                    <Link className="m-1 tempLink" style={{ textDecoration: 'none', color: 'white' }} to="/aboutme">ABOUT ME</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
