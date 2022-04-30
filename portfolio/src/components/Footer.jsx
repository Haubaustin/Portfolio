import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";





const Footer = () => {

return (
    <div className="Footer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon"/>
            <FontAwesomeIcon icon={faGithubSquare} size="2x" className="icon"/>
    </div>
    )
}

export default Footer