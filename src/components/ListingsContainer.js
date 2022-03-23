import React,{ useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {search} ) {
  const [listings, setListings] = useState([])
  useEffect(() => {
    const init = async () => {
      let req = await fetch('http://localhost:6001/listings')
      let res = await req.json()
      setListings(await res)
    }
    init()
  },[])

  function handleDelete (id) {
    const updatedList = listings.filter(listing => listing.id !== parseInt(id))
    setListings(updatedList)
  }

  const renderedListings = listings
    .filter(listing => listing.description.includes(search))
    .map(listing => {
      return <ListingCard
        handleDel={handleDelete}
        key={listing.id}
        id={listing.id}
        listInfo={listing}
      />
    })

  return (
    <main>
      <ul className="cards">
        {renderedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
