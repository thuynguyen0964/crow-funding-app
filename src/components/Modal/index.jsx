import { XMarkIcon } from '@heroicons/react/24/outline';
import ReactModal from 'react-modal';
import Button from '../Button';
import Perk from 'src/modules/Campain/Perk';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';

const ModalComponents = ({ isOpen, setIsOpen = () => {} }) => {
  const handleClose = setIsOpen(!isOpen);
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName='fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center ouline-none'
      className='max-h-[90vh] overflow-y-auto w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative hide-scroll'
    >
      <button
        data-tooltip-content='Close'
        data-tooltip-id='btn'
        onClick={handleClose}
        className='absolute top-2.5 right-2.5 text-text1'
      >
        <XMarkIcon className='w-10 h-10 text-gray-500' />
      </button>
      <h2 className='mb-10 text-2xl font-bold text-center'>
        Back this project
      </h2>
      <p className='mb-3 text-sm text-text3'>Enter your contribute amounts</p>
      <input
        name='amount'
        placeholder='Something like amounts...'
        type='text'
        className='w-full px-5 py-3 text-base font-medium border rounded-md border-strock'
      />
      <p className='my-5 text-sm text-text3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        ratione!
      </p>
      <Button className='text-white bg-primary hover:opacity-60'>
        Countinue
      </Button>
      <div className='mb-[60px]'></div>
      <Perk />
      <Tooltip id='btn' place='right-end' />
    </ReactModal>
  );
};

ModalComponents.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default ModalComponents;
