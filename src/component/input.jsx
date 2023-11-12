import PropTypes from 'prop-types';
const InputCom = ({ label, type, name, placeholder, required, value, onChange }) => {
    return (
      <div className="input-box">
        <label>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };
  
  InputCom.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
    onChange: PropTypes.func.isRequired,
  };
  
export default InputCom;