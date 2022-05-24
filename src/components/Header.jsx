import { Link } from "react-router-dom"


const Header = () => {

return (
<div className="Header">
    <h2>
        <Link to="/" className="Nav" >Home</Link>
    </h2>
    <h2>
        <Link to="/projects" className="Nav">Projects</Link>
    </h2>
    <h2> 
        <a href={process.env.PUBLIC_URL + '/resume.pdf'} download="Austin Haubenschild's Resume" className="Nav">Resume</a>
    </h2>
</div>
    )
}

export default Header