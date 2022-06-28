import { Link } from "react-router-dom"
const img = require("../assets/Austin Haubenschild-logos_white_adjust.png")


const Header = () => {

return (
<div className="Header">
    <div className="HeaderTitle">
        {/* <h1>Austin Haubenschild</h1> */}
        <img src={img} alt="" className="HeaderImg"></img>
    </div>
    <div className="HeaderLinks">
        <h2>
            <Link to="/" className="Nav" >Home</Link>
        </h2>
        <h2>
            <Link to="/projects" className="Nav">Projects</Link>
        </h2>
        <h2> 
            <a href={process.env.PUBLIC_URL + '/resume.pdf'} download="Austin Haubenschild's Resume" className="Nav">Resumé</a>
        </h2>
    </div>
</div>
    )
}

export default Header