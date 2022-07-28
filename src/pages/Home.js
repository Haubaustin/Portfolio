import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Home = () => {

return (
<div className="Home">
    <section className="homeIntro">
            <div className="homeImage"></div>
            <div className="homeBackground"></div>
            <div className="homeText">
                <h1 className="homeTextTitle">AUSTIN HAUBENSCHILD</h1>
                <h2 className="homeTextTitle2">FULLSTACK DEVELOPER</h2>
                <div className="homeSocial">
                    <a href="https://www.linkedin.com/in/austin-haubenschild/" 
                        className="icon" 
                        target="_blank" 
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
                    </a>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" onClick={() => window.location = 'mailto:haubaustin@gmail.com'}/>
                    <a href="https://github.com/Haubaustin"
                        className="icon" 
                        target="_blank" 
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} size="2x" className="icon" />
                    </a>
                </div>
            </div>
        <div className="homeAbout">
            <h3>ABOUT ME</h3>
            <p className="aboutMe">I completed a software development bootcamp through General Assembly on May 16th, 2022 where I developed my skills in Node, React, Express, SQL, Javascript, and Python. During my time at General Assembly, I also worked towards many IT certifications. Among others, I have achieved the AWS Certified Solutions Architect - Associate and the Google Associate Cloud Engineer.</p>
            <p className="aboutMe">Before beginning this path, I completed my B.A. in Political Science at California Polytechnic - San Luis Obispo. After graduating, I worked at a COVID-19 testing center as a healthcare worker and worked my way up to the position of Director of COVID operations. During my time as Director, our six testing sites tested over 50,000 unique patients and pulled in over three million dollars in the month of December 2020. I enacted changes to the EHR and CRM systems that enabled the testing sites to handle large influxes of patients with minimal staffing.</p>
            <p className="aboutMe">The natural student in me constantly challenges myself to expand my current knowledge and skill set through continued education. In doing so, I can bring a variety of ideas to the table and share my learnings with my peers. My goal is to provide software solutions to organizations that enable them to do more with less.</p>
        </div>
    </section>
    
</div>
    )
}

export default Home