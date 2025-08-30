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
      backgroundColor: '#93673bff',
      color: 'white',
      padding: '20px 0',
      textAlign: 'center'
    }}>
      <h1 style={{ marginLeft: '20px' }}>MiraLush</h1>

      <nav style={{ marginTop: '10px', marginRight: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/about" >About</Link>
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