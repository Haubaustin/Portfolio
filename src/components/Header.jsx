import { Link } from "react-router-dom"
import { Analytics } from 'aws-amplify';
const img = require("../assets/Austin Haubenschild-logos_white_adjust.png")


const Header = () => {

    Analytics.autoTrack('event', {
        enable: true,
        selectorPrefix: 'data-amplify-analytics-',
        events: ['click'],
    })

return (
<div className="Header">
    <div className="HeaderTitle">
        {/* <h1>Austin Haubenschild</h1> */}
        <img src={img} alt="" className="HeaderImg"></img>
    </div>
    <div className="HeaderLinks">
        <h2>
            <Link 
                to="/" 
                className="Nav" 
                data-amplify-analytics-on='click'
                data-amplify-analytics-name='HomeLink'>
                    Home
            </Link>
        </h2>
        {/* <h2>
            <Link to="/skills" className="Nav">Skills/Certs</Link>
        </h2> */}
        <h2>
            <Link 
                to="/projects" 
                className="Nav"
                data-amplify-analytics-on='click'
                data-amplify-analytics-name='ProjectsLink'>
                    Projects
            </Link>
        </h2>
        <h2> 
            <a 
                href={process.env.PUBLIC_URL + '/resume.pdf'} 
                download="Austin Haubenschild's Resume" 
                className="Nav"
                data-amplify-analytics-on='click'
                data-amplify-analytics-name='ResumeDownload'>
                    Resumé
            </a>
        </h2>
    </div>
</div>
    )
}

export default Header