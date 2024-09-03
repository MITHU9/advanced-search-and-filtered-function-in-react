import { useState } from "react";

import Nav from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";

//Database
import data from "./db/data";
import Card from "./components/Card";

function App() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  // Radio Filter
  const handleCategorySelect = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button Filter
  const handleButtonClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredSearchProducts = data.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredData = (products, selected, query) => {
    let filteredItems = products;
    //console.log(selected);

    if (query) {
      filteredItems = filteredSearchProducts;
    }

    if (selected) {
      filteredItems = filteredItems.filter(
        (product) =>
          product.category === selected ||
          product.color === selected ||
          product.company === selected ||
          product.newPrice === selected ||
          product.title === selected
      );
    }

    return filteredItems.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(data, selectedCategory, query);
  //console.log(result);

  return (
    <>
      <Sidebar handleCategorySelect={handleCategorySelect} />
      <Nav query={query} handleSearch={handleSearch} />
      <Recommended handleButtonClick={handleButtonClick} />
      <Products result={result} />
    </>
  );
}

export default App;
