import React from 'react'
import StarRating from './StarRating'
function RatingCard({rating=0,noofreviews=0}){
    return(
    <div className="RatingCard">
    <StarRating rating={rating}/>
    <div className="noOfReviews">
        <p>({noofreviews})</p>
    </div>
</div>
    );
}
export default RatingCard;