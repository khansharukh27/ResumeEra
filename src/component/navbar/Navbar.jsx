import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../signupAndLogin/Login";
import LogOut from "../signupAndLogin/LogOut";
import Profile from "../signupAndLogin/ProfilePage";

function Navbar() {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="border" style={{ width: '' }}>
            <div className="d-flex justify-content-between navbar border flex-column flex-sm-row" style={{ width: '' }}>
                <div className="upper">
                    <div className="brand">
                        <Link className="resume" to="/">RESUME ERAss</Link>
                    </div>
                    <div>
                        {
                            isAuthenticated ? (
                                <div className="profile">
                                    <div><LogOut /></div>
                                    <div><Profile /></div>
                                </div>
                            ) : (<Login />)
                        }
                    </div>

                </div>
                <div className="d-flex mt-3 me-3" style={{ color: 'white' }}>
                    <Link className="m-1 tempLink" style={{ textDecoration: 'none', color: 'white' }} to="/">TEMPLATES aaa</Link>

                    <Link className="m-1 tempLink" style={{ textDecoration: 'none', color: 'white' }} to="/myresume">MY RESUME</Link>

                    <Link className="m-1 tempLink" style={{ textDecoration: 'none', color: 'white' }} to="/aboutme">ABOUT ME</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
