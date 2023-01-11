import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Login from '../components/Login';
import ProtectedRoute from './ProtectedRoute';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/about',
    element: <ProtectedRoute component={<About />} />,
  },
  {
    path: '/contact',
    element: <ProtectedRoute component={<Contact />} />,
  },
];
