import PropTypes from 'prop-types';

const Image = ({img}) => {
  return (
    <img src={img} className="card-img-top" alt="my face"/>
  )
};

Image.propTypes = {
  img: PropTypes.string
}

export default Image;