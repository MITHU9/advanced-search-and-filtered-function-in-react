/* eslint-disable react/prop-types */
import "./Sidebar.css";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";

const Sidebar = ({ handleCategorySelect }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleCategorySelect={handleCategorySelect} />
        <Price handleCategorySelect={handleCategorySelect} />
        <Colors handleCategorySelect={handleCategorySelect} />
      </section>
    </>
  );
};

export default Sidebar;
