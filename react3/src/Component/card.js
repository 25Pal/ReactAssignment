import './card.css';
const Card = function ({id,title,body}){
return(
<div className="cardStyle">
    <strong>ID :</strong>
    {id}<br/>
    <strong>Title :</strong>
    {title}<br/>
    <strong>Details:</strong>
    {body}<br/>
</div>
)
}

export default Card;