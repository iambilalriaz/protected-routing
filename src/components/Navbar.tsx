import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='flex'>
        <p>
          <Link to='/'>Home</Link>
        </p>
        <p>
          <Link to='/about'>About</Link>
        </p>
        <p>
          <Link to='/contact'>Contact</Link>
        </p>
      </div>
      <div className='login-logout-btn'>
        {localStorage.getItem('user') ? (
          <p onClick={() => localStorage.clear()}>
            <Link to='/'>Logout</Link>
          </p>
        ) : (
          <p>
            <Link to='/login'>Login</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
