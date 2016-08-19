let cardStyle = {
  border: '1px solid rgba(0,0,0,0.10)',
  boxShadow: '0px 2px 4px #ccc'
};

export default function Card({children}) {
  return (<div style={cardStyle}>{children}</div>)
}
