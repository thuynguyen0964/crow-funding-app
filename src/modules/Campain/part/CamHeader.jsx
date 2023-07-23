import classNames from 'classnames';
import PropTypes from 'prop-types';

const CamHeader = ({ title, className }) => {
  return (
    <h3 className={classNames('mb-1 font-semibold text-text1', className)}>
      {title}
    </h3>
  );
};

CamHeader.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default CamHeader;
