import React, { useEffect } from 'react'
import DateAndAuthor from '../DateAndAuthor';
import WelcomeNotes from '../WelcomeNotes';
import RandomeArticleToBlogCareer from '../RandomeArticleToBlogCareer';
import GoogleAd from '../adFolder/GoogleAd';
import AuthorCard from '../AuthorCard';
import CallToAction from '../CallToAction';
import ShareButtons from '../shareButton/ShareButtons';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import GetNoticedwith from '../../image/image_for_link/Get Noticed with the Best Resume.jpeg'
export default function GetNoticedwiththeBestResume() {
    const ArticleUrl = 'https://resumeera.xyz/get-noticed-with-the-best-resume-format-pdf-free-download-2025';
                    const ArticleTitle = "Get Noticed with the Best Resume Format PDF Free Download (2025)";
                    useEffect(() => {
                        window.scrollTo(0, 0);
                    }, []);
                    const publishDate = '2025-01-11'
 
  return (
    <div>
        <article>

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
