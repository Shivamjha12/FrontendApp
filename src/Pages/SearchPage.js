import React from "react";
import LatestTrends from '../components/LatestTrends';
import { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";

function SearchPage(){
    
    const [isSearch, setIsSearch] = useState(false);
    const [search,setSearch] = useState('')
    function handleSearch(){
        if(isSearch===false){setIsSearch(true);}
        if(isSearch===true){setIsSearch(false);}
      }
    function handleSubmit(){
        console.log("search");
        navigate('/search');
    }
    const navigate = useNavigate();
    return(
        <div className="searchPage">
            <div className="SearchBar" >
                <div className="SearchBarInput">
                    <form onSubmit={handleSubmit}>
                    <input className="searchPageInput" type="text" onFocus={handleSearch} onBlur={handleSearch} onChange={(e) => { setSearch(e.target.value)}}    placeholder="Search" />
                    <i><FaSearch className="searchPageIcon"/></i>
                    </form>
                </div>
            <div className="popuptrendcard">
            {isSearch?(<LatestTrends/>):(<></>)}
            </div>
            </div>
            <p>{isSearch}</p>
        
        </div>
    );
}
export default SearchPage;