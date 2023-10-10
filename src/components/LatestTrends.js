import React from "react";
import {Col,Row} from "react-bootstrap";
import SimpleProductCard from "./simpleProductCard";
import PopularSuggestion from "./PopularSuggestion";
const dummyData=[
    {
      "title": "Stylish Blue Denim Jacket",
      "original_price": 89.99,
      "discount_price": 59.99,
      "rating": 3,
      "imageUrl": "https://images.pexels.com/photos/9136195/pexels-photo-9136195.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title": "Elegant Black Evening Gown",
      "original_price": 129.99,
      "discount_price": 99.99,
      "rating": 4,
      "imageUrl": "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title": "Casual Striped T-Shirt",
      "original_price": 29.99,
      "discount_price": 19.99,
      "rating": 5,
      "imageUrl": "https://images.pexels.com/photos/1484576/pexels-photo-1484576.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title": "Cozy Knit Sweater",
      "original_price": 49.99,
      "discount_price": 39.99,
      "rating": 3,
      "imageUrl": "https://images.pexels.com/photos/3756030/pexels-photo-3756030.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title": "Beachwear Collection",
      "original_price": 79.99,
      "discount_price": 59.99,
      "rating": 4,
      "imageUrl": "https://images.pexels.com/photos/16153029/pexels-photo-16153029/free-photo-of-two-models-standing-on-a-sandy-beach.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]
  
function LatestTrends(){
    return(
        <div className="latestTrends">
            <h3 className="LatestTrends" >Latest Trends</h3>
            <div className="product-list">
                {dummyData.map((item) => (
                <div key={item.title} style={{ cursor: "pointer", width: '20rem' }}>
                    <SimpleProductCard title={item.title} imageUrl={item.imageUrl} />
                </div>
                ))}
            </div>
            <h3 className="PopularSuggestion">Popular Suggestions</h3>
            <PopularSuggestion suggestions={dummyData}/>
        </div>
    );
}
export default LatestTrends;