import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Profile from './ProfilePage';

const AuthWrapper = ({ children }) => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    if (!isAuthenticated) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Login to Access the App</h1>
                <Login />
            </div>
        );
    }

    return (
        <div>
            <div style={{
                position: 'absolute',
                top: '-20px',
                left: '10px',
                padding: '-2px 2px',
                fontSize: '14px',
                cursor: 'pointer',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                width: '100%',
                height: '80px',
                backgroundColor: 'goldenrod',

            }}>
                <img style={{ width: '40px', height: '60px', borderRadius: '5px', marginLeft: '0px' }} src={user.picture} alt={user.name} />
            </div>

            <button
                onClick={() =>
                    logout({ returnTo: window.location.origin })
                }
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    padding: '5px 15px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                }}
            >
                Logout
            </button>
            {children}
        </div>
    );
};

export default AuthWrapper;
