import React from "react";
import SearchBar from "../components/SearchBar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from "../components/ProductCard";
const dummyData = [
    {
      "title": "Stylish Blue Denim Jacket",
      "original_price": 89.99,
      "discount_price": 59.99,
      "rating": 3.5,
      "imageUrl": "https://images.pexels.com/photos/9136195/pexels-photo-9136195.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title": "Elegant Black Evening Gown",
      "original_price": 129.99,
      "discount_price": 99.99,
      "rating": 4.8,
      "imageUrl": "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title": "Casual Striped T-Shirt",
      "original_price": 29.99,
      "discount_price": 19.99,
      "rating": 4.2,
      "imageUrl": "https://images.pexels.com/photos/1484576/pexels-photo-1484576.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title": "Cozy Knit Sweater",
      "original_price": 49.99,
      "discount_price": 39.99,
      "rating": 2.6,
      "imageUrl": "https://images.pexels.com/photos/3756030/pexels-photo-3756030.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title": "Beachwear Collection",
      "original_price": 79.99,
      "discount_price": 59.99,
      "rating": 1.3,
      "imageUrl": "https://images.pexels.com/photos/16153029/pexels-photo-16153029/free-photo-of-two-models-standing-on-a-sandy-beach.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "title": "Stylish Blue Denim Jacket",
        "original_price": 89.99,
        "discount_price": 59.99,
        "rating": 3.5,
        "imageUrl": "https://images.pexels.com/photos/9136195/pexels-photo-9136195.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        "title": "Elegant Black Evening Gown",
        "original_price": 129.99,
        "discount_price": 99.99,
        "rating": 4.8,
        "imageUrl": "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        "title": "Casual Striped T-Shirt",
        "original_price": 29.99,
        "discount_price": 19.99,
        "rating": 4.2,
        "imageUrl": "https://images.pexels.com/photos/1484576/pexels-photo-1484576.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        "title": "Cozy Knit Sweater",
        "original_price": 49.99,
        "discount_price": 39.99,
        "rating": 2.6,
        "imageUrl": "https://images.pexels.com/photos/3756030/pexels-photo-3756030.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        "title": "Beachwear Collection",
        "original_price": 79.99,
        "discount_price": 59.99,
        "rating": 1.3,
        "imageUrl": "https://images.pexels.com/photos/16153029/pexels-photo-16153029/free-photo-of-two-models-standing-on-a-sandy-beach.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
    
  ];
  
function SearchResult(){
    return(
        <div>
        <Row>
            <div className="searchResultSearchBar">
            <SearchBar h={45} w={450} />
            </div>
        </Row>
        <Row>
        <h2 className="searchResultTitle">Search Results</h2>
        </Row>
            <div 
            
            className="searchResultMainBlock" 
            style={{"margin":"40px 0px 0px 0px"}}
            >
            <Container>
            <Row>
            <div 
            className="Filters" 
            // style={{"margin":"0px 0px 0px 0px","position": "absolute","background-color": "#000","width":"20%"}}
            >
                <h2>Filters</h2>
                <div className="InsideFilter" style={{}}>
                    <h3>Filter</h3>
                    <p>Filter
                    </p>
                </div>
            </div>
            </Row>
            </Container>
            <Container>
            <Row>
            <div className="Results" style={{"background-color": "#fff","height":"100% !important","width":"80%","margin":"-2.4% 0% 0% 20%"}}>
                <div className="result-items" style={{"padding":"10px 0px 100px 0px","width":"100%"}}>
                {dummyData.map((item)=>(
                    <ProductCard title={item.title} imageUrl={item.imageUrl} rating={item.rating} costPrice={item.original_price} salePrice={item.discount_price} reviews={212}/>
                ))}
                </div>
            </div>
            </Row>
            </Container>
            </div>
        </div>
    )
}
export default SearchResult;