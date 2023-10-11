import React from "react";
import SearchBar from "../components/SearchBar"
import {Row,Col,Container} from 'react-bootstrap';
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
        <Row>
            <Col md={6}>
            <div className="Filters" style={{"background-color": "#000"}}>
                <h2>Filters</h2>
            </div>
            </Col>
            {/* <Col md={6} style={{"background-color": "#fff"}} >
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </Col> */}
        </Row>

        </div>
    )
}
export default SearchResult;