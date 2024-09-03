/* eslint-disable react/prop-types */
import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleCategorySelect }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleCategorySelect}
            type="radio"
            value=""
            name="test1"
          />
          <span className="sidebar-label all"></span>All
        </label>

        <Input
          handleCategorySelect={handleCategorySelect}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleCategorySelect={handleCategorySelect}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleCategorySelect={handleCategorySelect}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <Input
          handleCategorySelect={handleCategorySelect}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
        <Input
          handleCategorySelect={handleCategorySelect}
          value="white"
          title="White"
          name="test1"
        />
      </div>
    </div>
  );
};

export default Colors;
