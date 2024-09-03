/* eslint-disable react/prop-types */
import "./Products.css";

const Products = ({ result }) => {
  //console.log(result);

  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;
