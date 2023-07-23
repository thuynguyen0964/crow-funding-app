import PropTypes from 'prop-types';
import { useDropdown } from './Context';

const Option = ({ children, onClick }) => {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className='flex items-center justify-between px-5 py-4 text-sm cursor-pointer hover:bg-gray-100'
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

Option.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
export default Option;
