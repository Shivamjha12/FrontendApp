import React from 'react'
function ProductCard({imageUrl,title,costPrice,salePrice,rating,reviews}){
    return(
    <div>
    <img src={imageUrl} />
    <p>{title}</p>
    <p>{costPrice}</p>
    <p>{salePrice}</p>
    </div>
    );
}
export default ProductCard;