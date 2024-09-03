/* eslint-disable react/prop-types */
const Input = ({ handleCategorySelect, value, name, color, title }) => {
  return (
    <label className="sidebar-label-container">
      <input
        onChange={handleCategorySelect}
        type="radio"
        value={value}
        name={name}
      />
      <span className="sidebar-label" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
