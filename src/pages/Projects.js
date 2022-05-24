const Projects = () => {

    //Repo Links
    const coinChartRepo = ()=> {
        window.open("https://github.com/Haubaustin/Coin-Chart")
    }
    
    const certExpertRepo = ()=> {
        window.open("https://github.com/Haubaustin/Cert_Expert")
    }
    
    const myLieuFront = ()=> {
        window.open("https://github.com/sbandy9210/MyLieu-Frontend")
    }

    const myLieuBack = ()=> {
        window.open("https://github.com/Haubaustin/MyLieu_Backend")
    }

    const inVinFront = () => {
        window.open("https://github.com/Haubaustin/inVINtory_frontend")
    }

    const inVinBack = () => {
        window.open("https://github.com/Haubaustin/inVINtory_backend")
    }

    //Deployments
    const coinChartDep = () => {
        window.open("https://www.coinchartapp.com/")
    }

    const myLieuDep = () => {
        window.open("https://mylieu.herokuapp.com/")
    }

    const inVinDeploy = () => {
        window.open("https://invintory.link")
    }
    

return (
<div className="Projects">
    <section className="projectSection">
        <div className="projectCard1">
            <h2 className="projectCardTitle">Coin Chart (Vanilla JS)</h2>
            <div className="projectDescription">
                <p className="projectDescText">Cryptocurrency search application</p>
                <p className="projectDescText">HTML, CSS, Javascript</p>
                <p className="projectDescText">CoinGecko API integration, AnyChart data visualization</p>
                <p className="projectDescText"> Deployed as an AWS S3 static website with a subdomain, routing records, and Cloudfront</p>
                <span>
                    <button onClick={coinChartRepo}>Github Repo</button>
                    <button onClick={coinChartDep}>Deployed App</button>
                </span>
            </div>

        </div>
        <div className="projectCard2">
            <h2 className="projectCardTitle">Cert Expert (M.E.R.N.)</h2>
            <div className="projectDescription">
                <p className="projectDescText">IT certification blog for sharing resources</p>
                <p className="projectDescText">Mongoose, Express, React, Node</p>
                <p className="projectDescText">JSON Web Token Authentication</p>
                <span>
                    <button onClick={certExpertRepo}>Github Repo</button>
                    {/* <button>Deployed App</button> */}
                </span>
            </div>
        </div>
        <div className="projectCard3">
            <h2 className="projectCardTitle">MyLieu (Group Project) (P.E.R.N.)</h2>
            <div className="projectDescription">
                <p className="projectDescText">A Medium like blog application</p>
                <p className="projectDescText">PostgreSQL, Express, React, Node</p>
                <p className="projectDescText">JSON Web Token Authentication</p>
                <span>
                    <button onClick={myLieuFront}>Github Frontend</button>
                    <button onClick={myLieuBack}>Github Backend</button>
                    <button onClick={myLieuDep}>Deployed App</button>
                </span>
            </div>
        </div>
        <div className="projectCard4">
            <h2 className="projectCardTitle">inVINtory (P.E.R.N.)</h2>
            <div className="projectDescription">
                <p className="projectDescText">Wine storage tracking web application</p>
                <p className="projectDescText">PostgreSQL, Express, React, Node</p>
                <p className="projectDescText">Frontend Deployed on AWS Amplify</p>
                <p className="projectDescText">JSON Web Token Authentication</p>
                <span>
                    <button onClick={inVinFront}>Github Frontend</button>
                    <button onClick={inVinBack}>Github Backend</button>
                    <button onClick={inVinDeploy}>Deployed App</button>
                </span>

            </div>
        </div>
    </section>
</div>
    )
}

export default Projects