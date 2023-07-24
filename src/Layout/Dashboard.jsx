import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Sidebar from 'src/modules/Dashboard/Sidebar';
import TopBar from 'src/modules/Dashboard/TopBar';

const Layout = () => {
  return (
    <div className='p-10 bg-lite'>
      <TopBar></TopBar>
      <section className='flex items-start gap-x-10'>
        <Sidebar></Sidebar>
        <article className='flex-1'>{<Outlet></Outlet>}</article>
      </section>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
