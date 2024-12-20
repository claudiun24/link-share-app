import PropTypes from "prop-types";
import Container from "./index.styled";

const Heading = (props) => {
  return <Container>{props.children}</Container>;
};

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  size: PropTypes.oneOf(["sm", "md"])
};
export default Heading;
