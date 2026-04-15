const Display = ({ expression, currentValue }) => {
  return (
    <div className="display">
      <div className="display-expression">{expression}</div>
      <div className="display-main">{currentValue}</div>
    </div>
  );
};

export default Display;
