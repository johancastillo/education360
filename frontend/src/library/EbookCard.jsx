

const EbookCard = ({ image, title }) => {
    return (
        <div className="card mb-4" style={{width: "100%"}}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}

export default EbookCard




