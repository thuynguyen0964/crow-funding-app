// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import CategoryCampain from './part/Category';
import CamMeta from './part/CamMeta';
import CamDesc from './part/CamDesc';
import CamHeader from './part/CamHeader';
import CamAuth from './part/CamAuth';
import { imageRecent } from 'src/utils/contants';
import CamThumbail from './part/CamImg';

const CampainItem = () => {
  return (
    <div className='bg-white shadow-md rounded-2xl'>
      <CamThumbail img={imageRecent}></CamThumbail>
      <div className='px-5 py-4'>
        <CategoryCampain title='Education' />
        <CamHeader title='Campain with your kits' />
        <CamDesc desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam.' />

        <div className='flex items-center justify-between gap-3 mb-4'>
          <CamMeta size='small' quantity='$.2000' desc='Raise of $1.900' />
          <CamMeta size='small' quantity='$.2000' desc='Raise of $1.900' />
        </div>

        <CamAuth author='Emi Fukuda' img='/emi.jpg' />
      </div>
    </div>
  );
};

CampainItem.propTypes = {};

export default CampainItem;
