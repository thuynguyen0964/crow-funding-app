import classNames from 'classnames';
import PropTypes from 'prop-types';

const CamThumbail = ({ img, className }) => {
  return (
    <div className={classNames('h-[158px]', className)}>
      <img
        className={classNames('object-cover w-full h-full rounded-2xl')}
        src={img}
        alt='travel'
      />
    </div>
  );
};

CamThumbail.propTypes = {
  img: PropTypes.string,
  className: PropTypes.string,
};

export default CamThumbail;
