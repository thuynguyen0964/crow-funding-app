import PropTypes from 'prop-types';

const CamAuth = ({ img, author }) => {
  return (
    <div className='flex items-center gap-x-3'>
      <img
        src={img}
        className='object-cover w-8 h-8 rounded-full'
        alt={author}
      />
      <p className='text-sx text-text3'>
        By <span className='font-semibold text-text2'>{author}</span>
      </p>
    </div>
  );
};

CamAuth.propTypes = {
  img: PropTypes.string,
  author: PropTypes.string,
};

export default CamAuth;
