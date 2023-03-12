import React, { useState, useEffect } from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const { data, error } = useFetch(`/api/products?populate=*`);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  let results = null;
  if (data && data.data.length > 0) {
    const filteredProducts = data.data.filter(
      (product) =>
        product.attributes.title.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredProducts.length > 0) {
      results = filteredProducts.map((item) => (
        <div
          className="search-result-item"
          key={item.id}
          onClick={() => {
            navigate("/product/" + item.id);
            setShowSearch(false);
          }}
        >
          <div className="img-container">
            <img src={item.attributes.img.data[0].attributes.url} alt="" />
          </div>

          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <span className="desc">{item.attributes.desc}</span>
          </div>
        </div>
      ));
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`/search?query=${query}`);
      setShowSearch(false);
    }
  };

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search"
          value={query}
          onChange={onChange}
          onKeyPress={handleKeyPress}
        />

        <MdClose onClick={() => setShowSearch(false)} />
      </div>

      <div className="search-result-content">
        <div className="search-results">
          {results || "No results found"}
        </div>
      </div>
    </div>
  );
};

export default Search;



