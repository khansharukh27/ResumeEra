import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Preview201 = () => {
    // Create a local state to store retrieved data
    const [localData, setLocalData] = useState({});

    // Retrieve Redux state
    const reduxData = useSelector((state) => state.reducer.personalInfo?.[0] || {});

    // Check if there is data in localStorage when the component mounts
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('personalInfoData'));
        if (savedData) {
            setLocalData(savedData);  // Set local data if available
        }
    }, []);

    // Combine redux data with local data, prioritize redux data
    const result = Object.keys(reduxData).length > 0 ? reduxData : localData;
    
    // Check if required fields are available
    const hasRequiredData = result && result.fullname && result.jobposition;

    return (
        
            <div>
                {hasRequiredData ? (
                    <div>
                        <h2>{result.fullname}
                            <br />
                            <small>{result.jobposition}</small>
                        </h2>
                        
                    </div>
                ) : (
                    <p>Loading or No data available...</p> // Fallback message
                )}
                <div>
                    <div><p>{result.email}</p></div>
                    <div><p>{result.mobileNumber}</p></div>
                    <div><p>{result.city} {result.state}</p></div>
                    <div></div>
                </div>
                <div>

                </div>
            </div>
            
    );
};

export default Preview201;
