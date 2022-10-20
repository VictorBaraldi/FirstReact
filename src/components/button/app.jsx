import p from 'prop-types';
import './style.css';

export const Button = ({ text, onClick, disabled }) => {
  return (
    <button onClick={onClick} className="btn" disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: p.string.isRequired,
  onClick: p.func.isRequired,
  disabled: p.bool,
};

Button.defaultProps = {
  disabled: false,
};
