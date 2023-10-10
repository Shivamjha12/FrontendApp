import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
    <div className="AppDiv">
      <ProductCard title={"Round Neck Cotton Tee"}imageUrl={"https://images.pexels.com/photos/9136195/pexels-photo-9136195.jpeg?auto=compress&cs=tinysrgb&w=600"} rating={4} reviews={20} costPrice={"599"} salePrice={"500"} />
    </div>
    
    </div>

  );
}

export default App;
