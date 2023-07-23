import classNames from 'classnames';
import PropTypes from 'prop-types';

const CamMeta = ({ quantity, desc, size }) => {
  return (
    <div className='flex flex-col gap-y-1'>
      <span
        className={classNames(` font-semibold text-text2`, {
          'text-sm': size === 'small',
          'text-xl': size === 'lagre',
        })}
      >
        {quantity}
      </span>
      <span className='text-xs text-text4'>{desc}</span>
    </div>
  );
};

CamMeta.propTypes = {
  quantity: PropTypes.string,
  desc: PropTypes.string,
  size: PropTypes.string,
};

export default CamMeta;
