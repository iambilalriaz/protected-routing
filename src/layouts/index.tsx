import Navbar from '../components/Navbar';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
