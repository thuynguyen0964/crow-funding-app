import PropTypes from 'prop-types';

const Grid = ({ children, variant = 'defautl' }) => {
  if (variant === 'custom')
    return <div className='grid grid-cols-1 gap-y-10'>{children}</div>;
  return <section className='grid grid-cols-4 md:gap-x-7'>{children}</section>;
};

Grid.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
};

export default Grid;
