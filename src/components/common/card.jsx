export function Card({title, balance, img, porcent, comparation}) {
    return  (
        <article className="resume-card"> 
            <div className="top">
                <div className="title-group">
                    <h3>{title}</h3> 
                    <p>{balance}</p>
                </div>
               
                <img src={img} alt="logo" className="logo-card"/>
            </div>
            <div className="stats">
                <div className="div-porcent">
                    <p className="porcent">{porcent}</p>
                </div>
                <p>{comparation}</p>
            </div>
        </article>
    )
}