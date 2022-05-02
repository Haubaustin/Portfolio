const Projects = () => {

return (
<div className="Projects">
    <section className="projectSection">
        <div className="projectCard1">
            <h2 className="projectCardTitle">Coin Chart </h2>
            <div className="projectDescription">
                <p className="projectDescText">Cryptocurrency search application</p>
                <p className="projectDescText">HTML, CSS, Javascript</p>
                <p className="projectDescText">CoinGecko API integration, AnyChart data visualization</p>
                <span>
                    <button>Github Repo</button>
                    <button>Deployed App</button>
                </span>
            </div>

        </div>
        <div className="projectCard2">
            <h2 className="projectCardTitle">Cert Expert </h2>
            <div className="projectDescription">
                <p className="projectDescText">IT certification blog for sharing resources</p>
                <p className="projectDescText">Mongoose, Express, React, Node</p>
                <p className="projectDescText">JSON Web Tokens</p>
                <span><button>Github Repo</button><button>Deployed App</button></span>
            </div>
        </div>
        <div className="projectCard3">
            <h2 className="projectCardTitle">MyLieu (Group Project)</h2>
            <div className="projectDescription">
                <p className="projectDescText">A Medium like blog application</p>
                <p className="projectDescText">PostgreSQL, Express, React, Node</p>
                <p className="projectDescText">JSON Web Tokens</p>
                <span><button>Github Frontend</button><button>Github Backend</button><button>Deployed App</button></span>
            </div>
        </div>
        <div className="projectCard4">
            <h2 className="projectCardTitle">Final Project</h2>
            <div className="projectDescription">
                <p className="projectDescText">Coming May 16th</p>

            </div>
        </div>
    </section>
</div>
    )
}

export default Projects