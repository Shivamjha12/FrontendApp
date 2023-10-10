import './App.css';
import ProductCard from './components/ProductCard';
import StarRating from './components/StarRating';
function App() {
  return (
    <div className="App">
    <div className="AppDiv">
      <StarRating rating={4}/>
    </div>
    
    </div>

  );
}

export default App;
