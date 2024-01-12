import { useState } from "react";
import Screenshot from '../image/Screenshot.png';
// import { BiEye, BiEyeSlash } from 'react-icons/bi';
import { FaEye } from "react-icons/fa";

import { FaRegEyeSlash } from "react-icons/fa";


// import { Icon } from 'react-icons-kit';
// import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

function Form() {
    const [profile, setProfile] = useState(null);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleProfileChange = (e) => {
        const selectedProfile = e.target.files[0];

        if (selectedProfile) {
            setProfile(selectedProfile);
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'fullName':
                setName(value);
                break;
            case 'age':
                setAge(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('formData is submitted:-', {
            name, age, email, password, profile
        });
    };

    const handleToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="d-flex">
                    <input type="file" onChange={handleProfileChange}
                        id="profile"
                        name='profilepic'
                        style={{ height: '100px', width: '100px', border: '1px solid grey', borderRadius: '50px', position: 'relative' }}
                    />

                    <div onClick={() => document.getElementById('profile').click()}
                        style={{ height: '100px', width: '100px', border: '1px solid grey', borderRadius: '50px', position: 'absolute' }}>
                        {profile ? (
                            <img src={URL.createObjectURL(profile)}
                                alt="profilePic"
                                style={{ height: '100px', width: '100px', borderRadius: '50px' }}
                            />
                        ) : (
                            <img src={Screenshot} alt="profilepic"
                                style={{ height: '100px', width: '100px', borderRadius: '50px' }}
                            />
                        )}
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between" >
                        <input type="text" name="fullName" value={name} className="text form-control" onChange={handleOnChange} />
                        <input type="number" className="text form-control " name="age" value={age} onChange={handleOnChange} />
                    </div>
                    <div class="d-flex justify-content-between" style={{position:'relative'}}>
                        <input type="email" className="text form-control " style={{}} name="email" value={email} onChange={handleOnChange} />
                        <input type={showPassword ? 'text' : "password"} className="text form-control" name="password" placeholder="" />
                        <div style={{position:'absolute',right:'4px'}}><span  onClick={handleToggle} class="" id="">{showPassword ? <FaEye /> : <FaRegEyeSlash />}</span></div>
                    </div>
                </div>
                <div className="d-flex justify-content-between" style={{}}>
                    <a href="" style={{textDecoration:'none'}}>forgot password</a>
                    <a href="" style={{textDecoration:'none'}}>sign up</a>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;

