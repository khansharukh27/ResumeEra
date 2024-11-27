import { useState } from "react";
import HonorAndAward from "./HonorAndAward";
import KeySkills from "./KeySkill";
// import { set } from "prerender-node";
import { useDispatch } from "react-redux";
import { ProjectData } from "../Redux/action";

const Project = () => {
    const [showKeySkills, setShowKeySkills] = useState(false)
    const [showHonorAndAward, setShowHonorAndAward] = useState(false)
    const [showProject, setShowProject] = useState(true)
    const dispatch = useDispatch()
    const [projects, setProjects] = useState([
        { link: "", startTime: "", endTime: "", description: "" },
    ]);

    // Handle input changes
    const handleInputChange = (index, field, value) => {
        const updatedProjects = [...projects];
        updatedProjects[index][field] = value;
        setProjects(updatedProjects);
    };

    // Add more project input fields
    const handleAddMore = () => {
        setProjects([...projects, { link: "", startTime: "", endTime: "", description: "" }]);
    };

    // Delete the last set of input fields
    const handleDelete = () => {
        if (projects.length > 1) {
            setProjects(projects.slice(0, -1));
        }
    };

    // Save data to local storage on Next
    const handleOnNext = (e) => {
        e.preventDefault()
        localStorage.setItem("projects", JSON.stringify(projects));
        setShowKeySkills(true)
        setShowHonorAndAward(false)
        setShowProject(false)
        dispatch(ProjectData(projects))

    };

    // Placeholder for Back button functionality
    const handleOnBack = () => {
        setShowProject(false)
        setShowHonorAndAward(true)
        setShowKeySkills(false)
        // Implement navigation logic if needed
    };

    return (
        <div>
            {showProject && (
                <div>
            {projects.map((project, index) => (
                <div key={index}  className='d-md-flex' style={{  justifyContent: 'center', alignItems: 'center' }}>
                    <input
                        type="text"
                        className="input me-2 mt-2"
                        placeholder="Project link"
                        value={project.link}
                        onChange={(e) => handleInputChange(index, "link", e.target.value)}
                    />
                    <input
                        type="text"
                        className="input me-2 mt-2"
                        placeholder="Start time"
                        value={project.startTime}
                        onChange={(e) => handleInputChange(index, "startTime", e.target.value)}
                    />
                    <input
                        type="text"
                        className="input me-2 mt-2"
                        placeholder="End time"
                        value={project.endTime}
                        onChange={(e) => handleInputChange(index, "endTime", e.target.value)}
                    />
                    <textarea
                        placeholder="Description"
                        className="input me-2 mt-2"
                        value={project.description}
                        onChange={(e) => handleInputChange(index, "description", e.target.value)}
                    />
                </div>
            ))}
            <div className="d-flex justify-content-between">
                <button className="button1 ms-2 mt-2" onClick={handleAddMore}>Add More</button>
                <button className="button1 ms-2 mt-2" onClick={handleDelete}>Delete</button>
            </div>
            <div className="d-flex justify-content-between">
                <button className="button1 ms-2 mt-2" onClick={handleOnBack}>Back</button>
                <button className="button1 ms-2 mt-2" onClick={handleOnNext}>Next</button>
            </div>
            </div>
    )
}
{showHonorAndAward && (<HonorAndAward/>)}
{showKeySkills && (<KeySkills/>)}
        </div >
    );
};

export default Project;
