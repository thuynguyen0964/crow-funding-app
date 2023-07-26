import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Toasty = () => {
  return (
    <ToastContainer
      bodyClassName={'font'}
      position='top-right'
      hideProgressBar
      autoClose={1500}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme='light'
    />
  );
};

export default Toasty;
