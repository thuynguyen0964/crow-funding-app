import { imageFeature } from 'src/utils/contants';
import CamThumbail from './part/CamImg';
import CategoryCampain from './part/Category';
import CamHeader from './part/CamHeader';
import CamDesc from './part/CamDesc';
import CamMeta from './part/CamMeta';

const CampainFeature = () => {
  return (
    <div className='flex items-center gap-x-8 w-full max-w-[1048px] mb-5'>
      <CamThumbail
        className='h-[266px] flex-1 max-w-[435px]'
        img={imageFeature}
      />
      <div className='flex-1'>
        <CategoryCampain title='Architeture' className='!text-sm' />
        <CamHeader
          title=' Lorem ipsum dolor sit amet dolor pusku.'
          className='font-bold text-xl mb-4'
        />
        <CamDesc
          className='mb-6'
          desc='Error eveniet repellendus excepturi et facere sequi nam doloribus officiis molestiae laborum labore deserunt!'
        />
        <div className='w-full h-[5px] mb-6 rounded-full bg-[#efefef]'>
          <div className='w-2/4 h-full rounded-full bg-primary'></div>
        </div>
        <div className='flex items-start justify-between gap-x-5'>
          <CamMeta size='large' desc='Raise to $.1900' quantity='$.2000' />
          <CamMeta size='large' desc='Raise to $.1900' quantity='$.2000' />
          <CamMeta size='large' desc='Raise to $.1900' quantity='$.2000' />
        </div>
      </div>
    </div>
  );
};

export default CampainFeature;
