
const CertificateCard = ({ picture, name, dateAchieved, verifyLink }) => {


    return (
        <div className="CertificateCard">
            <img
                className="certificateCardPicture"
                src={picture} 
                alt ="">
            </img>
            <div className="certificateText">
                <h4>
                    {name}
                </h4>
                <p>
                    Date Achieved: {dateAchieved} <br/><br/>
                    <a 
                        href={verifyLink}>
                            Verify
                    </a> 
                </p>
            </div>
        </div>
    )
}

export default CertificateCard