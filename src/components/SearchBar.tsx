import React, { useState } from "react";


export default function SearchBar(props: any) {
    const [formData, setFormData] = useState({
      search: "",
    });

    function handleChange(event: any) {
      const { name, value } = event.target;
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [name]: value,
        };
      });
    }


  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(formData.search);
    props.getSearchInput(formData.search);
  }

  return (
    <div className="hero__input">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <input
          className="search-input"
          type="text"
          placeholder="Search for a movie"
          onChange={handleChange}
          value={formData.search}
          name="search"
          id="search"
        />
        <button className="search-btn">Search</button>
      </form>
    </div>
  );
}
