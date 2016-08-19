let cardStyle = {
  border: '1px solid rgba(0,0,0,0.10)',
  boxShadow: '0px 2px 4px #ccc',
  overflow:'auto'
};

export default function Card({width, height, children}) {
  return (<div style={{...cardStyle, width, height}}>{children}</div>)
}
