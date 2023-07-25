import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import ModalComponents from 'src/components/Modal';
import Sidebar from 'src/modules/Dashboard/Sidebar';
import TopBar from 'src/modules/Dashboard/TopBar';
import Modal from 'react-modal';

Modal.setAppElement('#root');
Modal.defaultStyles = {};
// eslint-disable-next-line no-unused-vars
const customStyles = {
  contents: {},
};

const Layout = () => {
  return (
    <div className='p-10 bg-lite'>
      <ModalComponents isOpen />
      <TopBar />
      <section className='flex items-start gap-x-10'>
        <Sidebar />
        <article className='flex-1'>{<Outlet></Outlet>}</article>
      </section>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
