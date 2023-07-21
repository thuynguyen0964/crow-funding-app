import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import Error from 'src/components/common/Error';

const Authen = ({ children, heading }) => {
  return (
    <section className='w-full min-h-screen p-10 bg-lite'>
      <Link to='/' className='inline-block mb-5 lg:mb-16'>
        <img srcSet='/logo.png 2x' alt='crow-app' />
      </Link>
      <div className='mx-auto w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12'>
        <h1 className='mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1'>
          {heading}
        </h1>
        {children}
      </div>
    </section>
  );
};

Authen.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
};

export default withErrorBoundary(Authen, {
  FallbackComponent: Error,
});
