import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CamThumbail = ({ img, className, to }) => {
  return (
    <div className={classNames('h-[158px]', className)}>
      <Link to={to}>
        <img
          className={classNames('object-cover w-full h-full rounded-2xl')}
          src={img}
          alt='travel'
        />
      </Link>
    </div>
  );
};

CamThumbail.propTypes = {
  img: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
};

export default CamThumbail;
