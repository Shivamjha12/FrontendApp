import React from 'react'
import RatingCard from './RatingCard';
function SimpleProductCard({imageUrl,title,costPrice,salePrice,rating,reviews}){
    return(
    <div className="productCard">
    <img className="productImage" style={{width: '130px', height: '170px'}} src={imageUrl} />
    <p className="productTitle">{title.slice(0,18)}</p>
    {rating?(<RatingCard rating={rating} noofreviews={reviews}/>):(<></>)}
    </div>
    );
}
export default SimpleProductCard;