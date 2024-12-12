import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import best_logo from '../../image/image_for_link/best_logo.895bb22edf6c08600c86.webp';

// const defaultProfileImage = "path_to_default_image/default_profile.png"; // Replace with your default image path

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="lodingdiv">
                <h1>ResumeEra</h1>
                <img src={best_logo} alt="ResumeEra Logo" />
            </div>
        );
    }

    return (
        isAuthenticated && (
            <div
                className=""
                style={{ display: 'flex', width: 'fit-content', backgroundColor: 'red' }}
            >
                <img
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    src={user.picture || <i class="bi bi-person-circle"></i>} // Default image fallback
                    alt={user.name || "Default User"}
                />
                <h2
                    style={{
                        position: 'absolute',
                        top: '1px',
                        left: '10px',
                        padding: '5px 15px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        backgroundColor: '#f44336',
                        color: 'black',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                >
                    {user.name || "User"}
                </h2>
            </div>
        )
    );
};

export default Profile;
