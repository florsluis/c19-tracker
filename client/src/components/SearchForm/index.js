import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="region">Type in a State:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="region"
          type="text"
          className="form-control"
          placeholder="i.e., Tennessee"
          id="region"
        />
       
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}
export default SearchForm;