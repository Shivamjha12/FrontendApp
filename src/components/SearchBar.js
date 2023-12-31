import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from "react";


function SearchBar({h=48,w=500,r=10}) {
  const [isSearch, setIsSearch] = useState(false);
  const [search,setSearch] = useState('')
  function handleSearch(){
      if(isSearch===false){setIsSearch(true);}
      if(isSearch===true){setIsSearch(false);}
    }
  function handleSubmit(){
      console.log("search");
  }
  return (
    <>
    <input className="searchInput" type="text" onSubmit={handleSubmit} onFocus={handleSearch} onBlur={handleSearch} onChange={(e) => { setSearch(e.target.value)}} style={{ "height":`${h}px`,"width":`${w}px`,"border-radius":`${r}px`,"font-size": "17.5px","padding":"5px 5px 5px 25px"}} placeholder="Search" />
     <i><FaSearch style={{position: "absolute",margin:"16px 30px 0px -40px"}}/></i>
    </>
  );
}

export default SearchBar