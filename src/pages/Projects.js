import { Analytics } from 'aws-amplify';

const Projects = () => {

    Analytics.autoTrack('event', {
        enable: true,
        selectorPrefix: 'data-amplify-analytics-',
        events: ['click'],
    })

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
    <section className="projectAbout">
        <h3>Hover on the project images below to display a brief description of the project, see the technologies utilized, and access links to the deployed apps and Github repos.</h3>
    </section>
    <section className="projectSection">
        <div className="projectCard1">
            <h2 className="projectCardTitle">COIN CHART (Vanilla JS)</h2>
            <div className="projectDescription">
                <p className="projectDescText">
                    Web application that displays cryptocurrency information and prices<br/>
                    Utilized Axios to make REST API calls to the CoinGecko API<br/>
                    Imported the Anychart Module for JavaScript to visualize prices in linear and open, low, high, close (OHLC) graphs<br/>
                    Deployed the completed app in a AWS S3 bucket with CNAME and Alias records that enable the application to utilize a registered domain with AWS CloudFront
                </p>
                <span>
                    <button 
                        onClick={coinChartRepo}
                        data-amplify-analytics-on='click'
                        data-amplify-analytics-name='CCRepo'
                        >
                            Github Repo
                    </button>
                    <button 
                        onClick={coinChartDep}
                        data-amplify-analytics-on='click'
                        data-amplify-analytics-name='CCDep'
                        >
                            Deployed App
                    </button>
                </span>
            </div>

        </div>
        <div className="projectCard2">
            <h2 className="projectCardTitle">CERT EXPERT (M.E.R.N.)</h2>
            <div className="projectDescription">
                <p className="projectDescText">
                    Blog application that serves to centralize all learning resources and experiences for IT certificates<br/>
                    Utilized Axios to make REST API calls to a Mongo Atlas hosted MongoDB backend that handle create, read, update, and delete (CRUD) functionality<br/>
                    Implemented user authentication with JSON web tokens
                </p>
                <span>
                    <button 
                        onClick={certExpertRepo}
                        data-amplify-analytics-on='click'
                        data-amplify-analytics-name='CERepo'
                        >
                            Github Repo
                    </button>
                    {/* <button>Deployed App</button> */}
                </span>
            </div>
        </div>
        <div className="projectCard3">
            <h2 className="projectCardTitle">MYLIEU (Group Project) (P.E.R.N.)</h2>
            <div className="projectDescription">
                <p className="projectDescText">
                    Medium like blog application<br/>
                    Collaborated with group members to produce a component hierarchy diagram, entity relationship diagram, wireframe, and Trello board<br/>
                    Used Sequelize to define schemas and associations for Postgres models<br/>
                    Utilized JSON web tokens for user authentication and authorization to conditionally render CRUD functionality on user created blogs
                </p>
                <span>
                    <button 
                        onClick={myLieuFront}
                        data-amplify-analytics-on='click'
                        data-amplify-analytics-name='MylieuFrontRepo'
                        >
                            Github Frontend
                    </button>
                    <button 
                        onClick={myLieuBack}
                        data-amplify-analytics-on='click'
                        data-amplify-analytics-name='MylieuBackRepo'
                        >
                            Github Backend
                    </button>
                    <button 
                        onClick={myLieuDep}
                        data-amplify-analytics-on='click'
                        data-amplify-analytics-name='MylieuDep'
                        >
                            Deployed App
                    </button>
                </span>
            </div>
        </div>
        <div className="projectCard4">
            <h2 className="projectCardTitle">INVINTORY (P.E.R.N.)</h2>
            <div className="projectDescription">
                <p className="projectDescText">
                    Web application that is used to track and visualize wine storage areas <br/>
                    Used two-dimensional data structures to store and visualize user input data that is stored in a Postgres database<br/>
                    Implemented conditional rendering of CSS inline styling and React components to create an easy to visualize storage solution<br/>
                    Enacted Git control by committing early and often<br/>
                    Deployed frontend of application on AWS Amplify
                </p>
                <span>
                    <button 
                        onClick={inVinFront}
                        data-amplify-analytics-on='click'
                        data-amplify-analytics-name='VinFrontRepo'
                        >
                            Github Frontend
                    </button>
                    <button 
                        onClick={inVinBack}
                        data-amplify-analytics-on='click'
                        data-amplify-analytics-name='VinBackRepo'
                        >
                            Github Backend
                    </button>
                    <button 
                        onClick={inVinDeploy}
                        data-amplify-analytics-on='click'
                        data-amplify-analytics-name='VinDep'
                        >
                            Deployed App
                    </button>
                </span>

            </div>
        </div>
    </section>
</div>
    )
}

export default Projects