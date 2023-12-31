import React from 'react'
import RatingCard from './RatingCard';
import FavouriteButton from './FavouriteButton';
function ProductCard({imageUrl,title,costPrice,salePrice,rating,reviews}){
    return(
    <div className="productCard">
    <img className="productImage" onClick={()=>{alert("Clicked On Product")}} style={{width: '180px', height: '230px'}} src={imageUrl} />
    <div className="productViewProduct" onClick={()=>{alert("Clicked On Product")}}><p className="productViewProductTitle">View Product</p></div>
    <div className="FavBtn"><FavouriteButton /></div>
    <p className="productTitle">{title.slice(0,18)}</p>
    <span className="original-price">Rs. {costPrice}</span>
    <span className="discounted-price">Rs.{salePrice}</span>
    <RatingCard rating={rating} noofreviews={reviews}/>
    </div>
    );
}
export default ProductCard;