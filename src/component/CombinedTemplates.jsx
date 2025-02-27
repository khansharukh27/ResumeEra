import React from 'react'
import FresherResume from './FresherResume'
import NormalResume from './NormalResume'
import TechnicalResumeImages from './TechResume/TechnicalResumeImages'

export default function CombinedTemplates(prop) {
    const { fresherResumeImage, techImages, images } = prop
    const [showFresherResume, setShowFresherResume] = React.useState(true)
    const [showNormalResume, setShowNormalResume] = React.useState(false)
    const [showTechnicalResume, setShowTechnicalResume] = React.useState(false)

    const onClick = (e) => {
        if (e.target.value === "fresher") {
            setShowFresherResume(true)
            setShowNormalResume(false)
            setShowTechnicalResume(false)
        }
        if (e.target.value === "normal") {
            setShowFresherResume(false)
            setShowNormalResume(true)
            setShowTechnicalResume(false)
        }
        if (e.target.value === "technical") {
            setShowFresherResume(false)
            setShowNormalResume(false)
            setShowTechnicalResume(true)
        }
    }

    return (
        <div
        style={{backgroundColor:'green', border:'1px solid black', padding:'10px', margin:'10px',borderRadius:'10px',padding:'15px'}}

        >
            <div className='d-flex justify-content-around'
            style={{backgroundColor:'magenta', border:'1px solid black', padding:'10px', margin:'10px',borderRadius:'10px',padding:'15px'}}
            >
                <div>
                    <h4>Teenager Resume</h4>
                    <button
                        value="fresher"
                        style={{ width: '100%', padding: '10px', color: 'white', backgroundColor: 'green' }}
                        onClick={onClick}
                    >
                        Show Fresher Resume
                    </button>
                </div>
                <div>
                    <h4>Free Profetional Resume </h4>
                    <button
                        value="normal"
                        style={{ width: '100%', padding: '10px', color: 'white', backgroundColor: 'blue' }}
                        onClick={onClick}
                    >
                        Show Normal Resume
                    </button>
                </div>
                <div>
                    <h4>Technical Resume</h4>
                    <button
                        value="technical"
                        style={{ width: '100%', padding: '10px', color: 'white', backgroundColor: 'red' }}
                        onClick={onClick}
                    >
                        Show Technical Resume
                    </button>
                </div>
            </div>

            <div>
                {showFresherResume && <FresherResume fresherResumeImage={fresherResumeImage} />}
                {showNormalResume && <NormalResume images={images} />}
                {showTechnicalResume && <TechnicalResumeImages techImages={techImages} />}
            </div>
        </div>
    )
}
