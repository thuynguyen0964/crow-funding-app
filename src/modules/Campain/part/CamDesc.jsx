import classNames from 'classnames';
import PropTypes from 'prop-types';

const CamDesc = ({ desc, className = '' }) => {
  return (
    <p className={classNames('mb-4 text-sm text-text3', className)}>{desc}</p>
  );
};

CamDesc.propTypes = {
  desc: PropTypes.string,
  className: PropTypes.string,
};

export default CamDesc;
