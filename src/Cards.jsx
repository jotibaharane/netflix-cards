export default function Cards(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                <img src={props.imgsrc} alt="myPic" className="card_img" />
                    <div className="card_info">
                   
                        <span className="card_catagory">{props.title}</span>
                        <h3 className="card_title">{props.sname} </h3>
                        <a href={props.source} target="_blank">
                            <button className="btn">Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}