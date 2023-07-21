import PropTypes from 'prop-types';

const ActionBtn = ({ title = 'Register with Google', onClick }) => {
  return (
    <button
      className='flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border rounded-xl dark:text-white text-text2 gap-x-2 border-strock'
      onClick={onClick}
    >
      <img srcSet='/icon-google.png 2x' alt='' />
      <span>{title}</span>
    </button>
  );
};

ActionBtn.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default ActionBtn;
