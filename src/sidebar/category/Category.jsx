/* eslint-disable react/prop-types */
import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handleCategorySelect }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleCategorySelect}
            type="radio"
            value=""
            name="test"
          />
          <span className="sidebar-label"></span>All
        </label>

        <Input
          handleCategorySelect={handleCategorySelect}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleCategorySelect={handleCategorySelect}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleCategorySelect={handleCategorySelect}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleCategorySelect={handleCategorySelect}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
