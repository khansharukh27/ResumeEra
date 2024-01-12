import React, { useState } from 'react';

function Navbar() {
    // const [showNested, setShowNested] = useState(false)
    const [training, setTraining] = useState(false)
    const [page,setPage] = useState(false)


    const toggleButton = () => {

        setPage(!page)

    }

    const toggleButtontoggle = () => {
        setTraining(!training)
    }



    return (
        <div className='d-flex justify-content-between ' style={{ height: '100px', backgroundColor: '#528f81' }}>
            <div className=" " style={{ width: '30%', height: '100px' }}>
                <img src="https://namratauniversal.com/img/mainlogo.png" alt="Logo" style={{ width: '90%', height: '60px', marginTop: '7px' }} />
            </div>

            <div className="d-flex  " style={{ textDecoration: 'none' }} >
                <ul className="d-flex mt-4" style={{ listStyle: 'none', textDecoration: 'none', padding: 0, margin: 0 }}>
                    <li className="">
                        <a className="me-4" href="/home" style={{ textDecoration: 'none', color: 'white', fontSize: 'larger' }}>Home</a>
                    </li>
                    <li className="">
                        <a className="me-4" href="#" style={{ textDecoration: 'none', color: 'white', fontSize: 'larger' }}>InternShip</a>
                    </li>
                    <li className="" onClick={toggleButtontoggle}>
                        <a className="me-4 dropdown-toggle text-align-left " on href="#" style={{ textDecoration: 'none', fontSize: 'larger',color:'white' }}>Training & Devlopment</a>
                        {training && (
                            <ul style={{ listStyle: 'none', textAlign: 'left',backgroundColor: '#528f81'}}  >
                                <li>
                                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>Technology</a>
                                </li>
                                <li>
                                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>Digital Marketing</a>
                                </li>
                                <li>
                                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>Seo</a>
                                </li>
                            </ul>
                        )}

                    </li>
                    {/* <li className="" onClick={toggleButton}>
                        <a className="me-4 dropdown-toggle" href="#" role="button" style={{ textDecoration: 'none', overflow: 'visible', color: 'white', fontSize: 'larger' }} >
                            Dropdown
                        </a>
                        {showNested && (
                            <ul className="bg-light" style={{ textAlign: 'left', listStyle: 'none', textDecoration: 'none', padding: 0, margin: 0 }}>
                                <li><a className="dropdown-item" href="/action">Action</a></li>
                                <li><a className="dropdown-item" href="/anotheraction">Another action</a></li>

                                <li><a className="dropdown-item" href="/something">Something else here</a></li>
                            </ul>
                        )}

                    </li> */}
                    <li onClick={toggleButton}>
                    <a className="me-4 dropdown-toggle" href="#" role="button" style={{ textDecoration: 'none', overflow: 'visible', color: 'white', fontSize: 'larger' }} >Page</a>
                    {page && (
                        <ul style={{listStyle:'none',textAlign:'left',backgroundColor: '#528f81',}}>
                        <li><a className="dropdown-item" href="/anotheraction">Service</a></li>
                        <li><a className="dropdown-item" href="/anotheraction">PortFolio</a></li>
                        <li><a className="dropdown-item" href="/anotheraction">Pricing</a></li>
                        <li><a className="dropdown-item" href="/anotheraction">Team Member</a></li>
                        <li><a className="dropdown-item" href="/anotheraction">Review</a></li>
                        <li><a className="dropdown-item" href="/anotheraction">Client</a></li>
                        <li><a className="dropdown-item" href="/anotheraction">Skill</a></li>
                        </ul>
                    )}
                        
                    </li>
                    <li>
                        <a href="" className="me-4" style={{ textDecoration: 'none', color: 'white', fontSize: 'larger' }}>About</a>
                    </li>
                    <li>
                        <a href="" className="me-4" style={{ textDecoration: 'none', color: 'white', fontSize: 'larger' }}>Contact</a>
                    </li>
                    <li>
                        <a href="" className="me-4" style={{ textDecoration: 'none', color: 'white', fontSize: 'larger' }}>Blog</a>
                    </li>
                    <li>
                        <a href="" className="me-4" style={{ textDecoration: 'none', color: 'white', fontSize: 'larger' }}>PAY</a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Navbar;
