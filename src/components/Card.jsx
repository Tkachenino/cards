import PropTypes from 'prop-types';

const Card = ({title, text, children}) => {
  const style = { width: "18rem" }
  return (
    <div className="card" style={style}>
      {children}
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="!#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element
  ])
};

export default Card;