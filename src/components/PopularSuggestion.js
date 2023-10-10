import React from "react";

function PopularSuggestion({suggestions}) {
  return (
    <div className="popularSuggestion">
    {suggestions.map((item) => (
                <div key={item.title} style={{ cursor: "pointer", width: '20rem' }}>
                    <p>{item.title}</p>
                </div>
                ))}
    </div>
  );
}

export default PopularSuggestion;