/* eslint-disable react/prop-types */
const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btn">
      {title}
    </button>
  );
};

export default Buttons;
