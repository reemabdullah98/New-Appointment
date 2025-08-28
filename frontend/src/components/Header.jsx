import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
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
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/products">Products</Link>
        <button onClick={handlelogout}>Log out</button>
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