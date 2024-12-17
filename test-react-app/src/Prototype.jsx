import PropTypes from 'prop-types';

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
    /* Method 1: this line only expects and will issue warning if not adhered */
    //name: PropTypes.string
  /* Method 2: while next will make sure that name props is string*/
  name: PropTypes.string.isRequired,
};
/*We can pass default in props using propTypes */
RenderName.propTypes = {
    name: PropTypes.string,
  };

export default RenderName;
