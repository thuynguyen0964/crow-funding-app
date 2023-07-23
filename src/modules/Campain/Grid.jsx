import PropTypes from 'prop-types';

const Grid = ({ children }) => {
  return <section className='grid grid-cols-4 md:gap-x-7'>{children}</section>;
};

Grid.propTypes = {
  children: PropTypes.node,
};

export default Grid;
