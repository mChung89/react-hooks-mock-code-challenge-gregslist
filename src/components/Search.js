import React, {useState} from "react";

function Search( {setSearch} ) {
  const [formData, setFormData] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(formData)
    console.log("submitted");
  }
  function handleChange (e) {
    setFormData(e.target.value)
  }
  console.log(formData)

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={formData}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
