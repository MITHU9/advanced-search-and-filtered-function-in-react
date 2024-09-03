/* eslint-disable react/prop-types */
import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleCategorySelect }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleCategorySelect}
            type="radio"
            value=""
            name="test2"
          />
          <span className="sidebar-label"></span>All
        </label>

        <Input
          handleCategorySelect={handleCategorySelect}
          value={50}
          title="$0 - $50"
          name="test2"
        />
        <Input
          handleCategorySelect={handleCategorySelect}
          value={100}
          title="$50 - $100"
          name="test2"
        />
        <Input
          handleCategorySelect={handleCategorySelect}
          value={150}
          title="$100 - $150"
          name="test2"
        />
        <Input
          handleCategorySelect={handleCategorySelect}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
