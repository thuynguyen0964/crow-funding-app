import PropTypes from 'prop-types';
import Sidebar from 'src/modules/Dashboard/Sidebar';
import TopBar from 'src/modules/Dashboard/TopBar';

const Layout = ({ children }) => {
  return (
    <div className='p-10 bg-lite'>
      <TopBar></TopBar>
      <section>
        <Sidebar></Sidebar>
        <article>{children}</article>
      </section>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
