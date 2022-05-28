import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    

return (
    <div className="Footer">
            <a href="https://www.linkedin.com/in/austin-haubenschild-211472169/" 
                className="icon" 
                target="_blank" 
                rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <FontAwesomeIcon icon={faEnvelope} size="3x" className="icon" onClick={() => window.location = 'mailto:haubaustin@gmail.com'}/>
            <a href="https://github.com/Haubaustin"
                className="icon" 
                target="_blank" 
                rel="noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} size="3x" />
            </a>
    </div>
    )
}

export default Footer