import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Career_qoutes from '../../image/motivational_image/Career_qoutes.jpg'
import ShareButtons from "../shareButton/ShareButtons";
import GoogleAd from "../adFolder/GoogleAd";
import CallToAction from "../CallToAction";
const MotivationalCareerQuotes = () => {
    const ArticleUrl = 'https://resumeera.xyz/35-career-quotes-to-motivate'
    const ArticleTitle = '35 Career Quotes To Motivate You While Making a Resume'
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <div className="aboutResumeEra">
      <Helmet>
        <title>35 Career Quotes To Motivate You While Making a Resume</title>
        <meta
          name="description"
          content="Stay inspired while crafting your resume with 35 powerful career quotes. Boost your motivation, confidence, and focus with these uplifting sayings."
        />
        <link rel="canonical" href="https://resumeera.xyz/35-career-quotes-to-motivate" />
      </Helmet>
      <article>
      <header>
        <h1>35 Career Quotes To Motivate You While Making a Resume</h1>
        <p className="author">Written by ResumeEra</p>
        <p className="date">Updated: July 30, 2024</p>
        <figure>
            <img src={Career_qoutes} alt="35 Career Quotes To Motivate You While Making a Resume" loading="lazy"/>
            <figcaption style={{textAlign:'center'}}>35 Career Quotes To Motivate You While Making a Resume</figcaption>
        </figure>
      </header>
      <section>
        <p>
          Crafting a tailored resume for each job application can be daunting. 
          While the end goal of landing a job is rewarding, staying motivated throughout the process is equally important. 
          That’s where a dose of inspiration can help! Here’s a curated list of 35 career quotes to keep your spirits high while working on your resume.
        </p>
      </section>
      <div><GoogleAd/></div>
      <section>
        <h2>Quotes About Being Fearless</h2>
        <p>
          Confidence is key when applying for jobs. Show the world what you’re made of with these fearless quotes:
        </p>
        <ul>
          <li>“What would you do if you weren't afraid?” ― Sheryl Sandberg</li>
          <li>
            “F-E-A-R has two meanings: 'Forget Everything And Run' or 'Face Everything And Rise.' The choice is yours.” ― Zig Ziglar
          </li>
          <li>“If it excites you and scares you at the same time, it probably means you should do it.” ― Unknown</li>
          <li>“Everything you want is on the other side of fear.” ― Jack Canfield</li>
          <li>“Don't be afraid to give up the good to go for the great.” ― John D. Rockefeller</li>
          <li>“Courage is resistance to fear, mastery of fear—not absence of fear.” ― Mark Twain</li>
        </ul>
      </section>
      <div><GoogleAd/></div>
      <section>
        <h2>Quotes About Beginning</h2>
        <p>
          Every great journey begins with a single step. These quotes are perfect for inspiring you to start strong:
        </p>
        <ul>
          <li>“Begin somewhere. You cannot build a reputation on what you intend to do.” ― Liz Smith</li>
          <li>
            “The first step towards getting somewhere is to decide you're not going to stay where you are.” ― J.P. Morgan
          </li>
          <li>“The secret to getting ahead is getting started.” ― Mark Twain</li>
          <li>“Every accomplishment starts with the decision to try.” ― John F. Kennedy</li>
          <li>“Start where you are. Use what you have. Do what you can.” ― Arthur Ashe</li>
        </ul>
      </section>
      <div><GoogleAd/></div>
      <section>
        <h2>Quotes About Hard Work</h2>
        <p>
          Writing an impactful resume takes effort, but hard work always pays off. Let these quotes remind you of its importance:
        </p>
        <ul>
          <li>“I'm a great believer in luck, and I find the harder I work the more I have of it.” ― Thomas Jefferson</li>
          <li>“Success is no accident. It is hard work, perseverance, and love for what you do.” ― Pelé</li>
          <li>“Hard work beats talent when talent fails to work hard.” ― Kevin Durant</li>
          <li>“Dreams don’t work unless you do.” ― John C. Maxwell</li>
          <li>“Work hard in silence, let success make the noise.” ― Frank Ocean</li>
          <li>“The difference between ordinary and extraordinary is that little extra.” ― Jimmy Johnson</li>
        </ul>
      </section>
      <div><GoogleAd/></div>
      <section>
        <h2>Quotes About Determination</h2>
        <p>
          Determination is the fuel that drives success. Here are quotes to help you stay committed:
        </p>
        <ul>
          <li>“The only way to do great work is to love what you do.” ― Steve Jobs</li>
          <li>
            “When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.” ― Henry Ford
          </li>
          <li>
            “We all have dreams. But in order to make dreams a reality, it takes determination, self-discipline, and effort.” ― Jesse Owens
          </li>
          <li>“Fall seven times, stand up eight.” ― Japanese Proverb</li>
          <li>“It does not matter how slowly you go as long as you do not stop.” ― Confucius</li>
          <li>“Your passion is waiting for your courage to catch up.” ― Isabelle Lafleche</li>
        </ul>
      </section>
      <div><GoogleAd/></div>
      <section>
        <h2>Quotes About Success</h2>
        <p>
          Keep your eyes on the prize with these inspiring success quotes:
        </p>
        <ul>
          <li>“Success usually comes to those who are too busy to be looking for it.” ― Henry David Thoreau</li>
          <li>“Don’t be distracted by criticism. Remember—the only taste of success some people get is to take a bite out of you.” ― Zig Ziglar</li>
          <li>“Opportunities don't happen. You create them.” ― Chris Grosser</li>
          <li>“Success is not the key to happiness. Happiness is the key to success.” ― Albert Schweitzer</li>
          <li>“The road to success and the road to failure are almost exactly the same.” ― Colin R. Davis</li>
        </ul>
      </section>
      <div><GoogleAd/></div>
      <section>
        <h2>Conclusion</h2>
        <p>
          These career quotes are not just words—they're a source of strength and inspiration. Whether you're creating a resume for your dream job or just starting your career journey, let these quotes guide you. Remember, every great achievement begins with the right mindset!
        </p>
      </section>
      <div><GoogleAd/></div>
      <footer>
        <p>
          Related:{" "}
          <a href="https://resumeera.xyz/motivation-link">
             Inspirational post About Success
          </a>
        </p>
      </footer>
    </article>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "35 Career Quotes To Motivate You While Making a Resume",
          "author": {
            "@type": "Person",
            "name": "ResumeEra"
          },
          "datePublished": "2024-07-30",
          "dateModified": "2024-07-30",
          "mainEntityOfPage": "https://resumeera.xyz/35-career-quotes-to-motivate",
          "description":
            "Discover 35 inspiring career quotes to boost your motivation while creating your resume. Stay focused and confident during your job application journey.",
          "publisher": {
            "@type": "Organization",
            "name": "ResumeEra",
            "logo": {
              "@type": "ImageObject",
              "url": "https://resumeera.xyz/logo.png"
            }
          }
        })}
      </script>
      <div style={{overflow:'hidden'}}>
          <CallToAction/>
          </div>
      <div className="stickyShare">
        <ShareButtons url={ArticleUrl} title={ArticleTitle}/>
      </div>
    </div>
  );
};
export default MotivationalCareerQuotes;
