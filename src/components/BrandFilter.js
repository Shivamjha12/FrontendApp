import React, { useState } from 'react';
import StarRating from './StarRating';
const BrandFilter = ({ brands,title }) => {
  const [selectedBrands, setSelectedBrands] = useState({});
  const handleBrandToggle = (brand) => {
    setSelectedBrands((prevSelectedBrands) => ({
      ...prevSelectedBrands,
      [brand]: !prevSelectedBrands[brand],
    }));
  };

  return (
    <div>
      <h3>{title}</h3>
      {
      Object.keys(brands).map((brand) => (
        <div key={brand}>
          <label>
            <input
              type="checkbox"
              checked={selectedBrands[brand] || false}
              onChange={() => handleBrandToggle(brand)}
            />
            {title==="Ratings"?(<div className="filterRating"><StarRating rating={brand}/></div>):(brand)}
          </label>
        </div>
      ))}
      <hr />
      
    </div>
  );
};

export default BrandFilter;
