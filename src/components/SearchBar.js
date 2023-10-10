import React from 'react';
import { FaSearch } from 'react-icons/fa';
var h=48;
var w=500;
var r=10;
function SearchBar() {
  return (
    <div className="SearchBar">
        <input type="text" style={{ "height":`${h}px`,"width":`${w}px`,"border-radius":`${r}px`,"border":"0px","outline": "none","font-size": "17.5px","padding":"5px 5px 5px 25px"}} placeholder="Search" />
        <i><FaSearch style={{position: "absolute",margin:"20px 30px 0px -40px"}}/></i>
    </div>
  );
}

export default SearchBar