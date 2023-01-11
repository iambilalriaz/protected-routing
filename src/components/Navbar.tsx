import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='flex'>
        <p className={window.location.pathname === '/' ? 'selected-item' : ''}>
          <Link to='/'>Home</Link>
        </p>
        <p
          className={
            window.location.pathname === '/about' ? 'selected-item' : ''
          }
        >
          <Link to='/about'>About</Link>
        </p>
        <p
          className={
            window.location.pathname === '/contact' ? 'selected-item' : ''
          }
        >
          <Link to='/contact'>Contact</Link>
        </p>
      </div>
      <div className='login-logout-btn'>
        {localStorage.getItem('user') ? (
          <p onClick={() => localStorage.clear()}>
            <Link to='/'>Logout</Link>
          </p>
        ) : (
          <p
            className={
              window.location.pathname === '/login' ? 'selected-item' : ''
            }
          >
            <Link to='/login'>Login</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
