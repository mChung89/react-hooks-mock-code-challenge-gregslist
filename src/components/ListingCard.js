import React, { useState } from "react";

function ListingCard({ listInfo, handleDel }) {
  const { description, image, location, id } = listInfo
  const [liked, toggleLike] = useState(false)

  function handleFavClick () {
    toggleLike(prev => !prev)
  }
  
  function handleDelClick (e) {
    fetch(`http://localhost:6001/listings/${e.target.id}`,{method: 'DELETE'})
    .then(res => res.ok ? handleDel(e.target.id) : alert('Delete Failed...'))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={handleFavClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button id={id} onClick={handleDelClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
