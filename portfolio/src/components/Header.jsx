import { Link } from "react-router-dom"


const Header = () => {

return (
<div className="Header">
    <div>
        <h2>
            <Link to="/" className="Nav" >Home</Link>
        </h2>
    </div>
    <div>
        <h2>
            <Link to="/projects" className="Nav">Projects</Link>
        </h2>
    </div>
    <div>
        <h2>
        <Link to="/resume" className="Nav">Resume</Link>
        </h2>
    </div>
</div>
    )
}

export default Header