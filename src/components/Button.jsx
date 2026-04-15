const Button = ({ label, onClick, type = '', className = '', style = {} }) => {
  return (
    <button 
      className={`btn ${type} ${className}`} 
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
