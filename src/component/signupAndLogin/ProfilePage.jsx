import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import best_logo from '../../image/image_for_link/best_logo.895bb22edf6c08600c86.webp'
const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="lodingdiv" >
                <h1>ResumeEra</h1>
                <img src={best_logo} alt="ResumeEra Logo" />
            </div>

        );
    }

    return (
        isAuthenticated && (
            <div className="" style={{display:'flex',width:'fit-content',backgroundColor:'red'}}>
                
                <img style={{width:'10px',height:'10px'}} src={user.picture} alt={user.name} />
              
                
                <h2 style={{
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
        }}>{user.name}</h2>
              
                
            </div>
        )
    );
};

export default Profile;