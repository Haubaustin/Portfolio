const image = require("../assets/IMG_6823.jpg")
const Home = () => {

return (
<div className="Home">
    <section className="homeIntro">
        <div className="homeText">
            <h1 className="homeTextTitle">Hello! <br/> My name is Austin Haubenschild and I am a fullstack developer</h1>
        </div>
            <img src={image} alt = "" className="homeImagePic"/>
    </section>
    <section className="homeIntro">
        <div className="homeImage">
        
        </div>
        <div className="homeText">
        
        </div>
    </section>
</div>
    )
}

export default Home