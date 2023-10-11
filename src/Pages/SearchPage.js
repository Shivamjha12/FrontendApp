import React from "react";
import LatestTrends from '../components/LatestTrends';
import { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";

function SearchPage({h=48,w=500,r=10}){
    
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
                    <input type="text" onFocus={handleSearch} onBlur={handleSearch} onChange={(e) => { setSearch(e.target.value)}} style={{ "height":`${h}px`,"width":`${w}px`,"border-radius":`${r}px`,"border":"0px","outline": "none","font-size": "17.5px","padding":"5px 5px 5px 25px"}} placeholder="Search" />
                    <i><FaSearch style={{position: "absolute",margin:"20px 30px 0px -40px"}}/></i>
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