import cardStyle from '../styles/card-style';

export default function Card({width, height, children}) {
  return (<div style={{...cardStyle, width, height}}>{children}</div>)
}

Card.propTypes = {
  width: React.PropTypes.string.isRequired,
  height: React.PropTypes.string.isRequired,
};
