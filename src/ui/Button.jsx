import './Button.css';

function Button({ children, className, aria, onClick }) {
  return (
    <button className={className} aria-label={aria} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
