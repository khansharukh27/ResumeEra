import React from 'react'
import DateAndAuthor from './DateAndAuthor'
import '../css/resumeeraheading.css'
import { Link } from 'react-router-dom'

export default function ResumeEraHeading(prop) {
    const { title, publishDate } = prop

    const calculateDaysAgo = (publishDate) => {
        const publishDateObj = new Date(publishDate);
        const today = new Date();
        const diffTime = today - publishDateObj;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
        return diffDays;
    };
    const daysAgo = calculateDaysAgo(publishDate);
    return (
        <div className='big'>
        <div className='ResumeEraHeading'>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <h1>{title}</h1>
                <p className='Link' ><Link style={{fontSize:'1.3rem',color:'white',border:'1px solid white',borderRadius:'25px',padding:'15px',backgroundColor:'salmon'}}
                
                to='/template'> Create Free Resume</Link></p>
            </div>
            <div className="dateAuthor">
                <img
                    style={{}}
                    src="https://resumeera.xyz/static/media/best_logo.895bb22edf6c08600c86.webp"
                    alt="ResumeEra Logo"
                    className="author-logo"
                />
                <p className="author-details " style={{ width: "100%",textAlign:'left' }} >
                    <span className="author-highlight" >✍️ResumeEra Team</span> <br />
                    <span className="author-highlight" style={{fontSize:'.8rem',marginTop:'-8px',textAlign:'center'}}>Career Expert</span> <br />
                    <span className="author-highlight">{publishDate} ({daysAgo} days ago) ⏱️{" "}</span> <br />
                    <span className="author-highlight">8 min read</span> <br />
                    <span className="author-higlight">Reviewer:- ResumeEra Team</span>
                </p>
            </div>
        </div>
        <p className="author-details" style={{textAlign:'center',color:'white',wordBreak:"break-all"}}>
    <span className="author-highlight"  style={{fontSize:'1.5rem'}}>About ResumeEra Team:</span> <br />
    <span className="author-highlights" style={{fontSize:'1.5rem',color:'black'}}>We are a dedicated team of 
        career experts helping professionals create standout resumes and enhance their career journey.</span>
</p>
        </div>
    )
}
