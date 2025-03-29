import React, { useEffect, useState } from 'react'
import DateAndAuthor from '../DateAndAuthor';
import WelcomeNotes from '../WelcomeNotes';
import RandomeArticleToBlogCareer from '../RandomeArticleToBlogCareer';
import GoogleAd from '../adFolder/GoogleAd';
import AuthorCard from '../AuthorCard';
import CallToAction from '../CallToAction';
import ShareButtons from '../shareButton/ShareButtons';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { templatePage } from '../../Redux/action';
export default function GetNoticedwiththeBestResume(prop) {
  const [hoveredImage, setHoveredImage] = useState();
  const { techImages } = prop
  const navigate = useNavigate();
  const ArticleUrl = "https://resumeera.xyz/resume-format";
  const ArticleTitle = "Resume Format | ResumeEra";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const publishDate = '2025-01-11'
 
  };

  return (
    <div>
      <article>
        <section className='releted-article'>
                  <h2>RELETED ARTICLE :- YOU CAN'T MISS IF YOU WANT TO CREATE A PROFETIONAL RESUME</h2>
                  <br /><Link to=''></Link>
                  <br /><Link to=''></Link>
                  <br /><Link to=''> </Link>
                  <br /><Link to=''></Link>
                  <br /><Link to=''></Link>
        
                </section>
        <div>
          <WelcomeNotes />
          <RandomeArticleToBlogCareer />
        </div>
      </article>
      <div><GoogleAd /></div>
      <div><GoogleAd /></div>
      <section>
        <div>
          <AuthorCard />
        </div>
        <div>
          <CallToAction />
        </div>
        <div className="stickyShare">
          <ShareButtons url={ArticleUrl} title={ArticleTitle} />
        </div>
      </section>
    </div>
  )
}
