import './App.css';
import ProductCard from './components/ProductCard';
import FavouriteButton from './components/FavouriteButton';
import LatestTrends from './components/LatestTrends';
import SearchPage from './Pages/SearchPage';
import SearchResult from './Pages/SearchResult';
import { Route, Routes,Navigate,Redirect  } from "react-router-dom";
function App() {
  return (
  <div className="Main"> 
    {/* <ProductCard title={"Round Neck Cotton Tee"}imageUrl={"https://images.pexels.com/photos/9136195/pexels-photo-9136195.jpeg?auto=compress&cs=tinysrgb&w=600"} rating={4} reviews={20} costPrice={"599"} salePrice={"500"} /> */}
    {/* <LatestTrends/> */}
    <Routes>

    <Route path="/" element={<SearchPage/>}/> 
    <Route path="/search" element={<SearchResult/>}/> 
    </Routes>
  </div>

  );
}

export default App;
