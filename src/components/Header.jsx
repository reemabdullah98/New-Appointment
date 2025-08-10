import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      backgroundColor: '#d63384',
      color: 'white',
      padding: '20px 0',
      textAlign: 'center',
      marginBottom: '20px'
    }}>
      <h1 style={{ margin: 0 }}>Beauty Center</h1>

      <nav style={{ marginTop: '10px' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
    </header>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 15px'
};

export default Header;