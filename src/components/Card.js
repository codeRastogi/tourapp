
function Card({id, image, info, price, name}){
return (
    <div className="card">
        <img src={image}></img>
    </div>
)
}

export default Card;