import classNames from 'classnames';
import { Fragment } from 'react';
import Button from 'src/components/Button';
import CamDesc from 'src/modules/Campain/part/CamDesc';
import CamHeader from 'src/modules/Campain/part/CamHeader';
import CamThumbail from 'src/modules/Campain/part/CamImg';
import CamMeta from 'src/modules/Campain/part/CamMeta';
import CamViewAuthor from 'src/modules/Campain/part/CamViewAuthor';
import CategoryCampain from 'src/modules/Campain/part/Category';
import { imageFeature } from 'src/utils/contants';

const CampView = () => {
  return (
    <Fragment>
      <div
        className={classNames(
          'h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center banner-bg flex items-center justify-center text-white mb-10'
        )}
      >
        <h1 className='font-bold text-[40px]'>Education</h1>
      </div>

      {/* body */}
      <div
        className={classNames(
          'flex items-start gap-x-8 w-full mb-5 max-w-[1066px]'
        )}
      >
        <div className='flex-1'>
          <CamThumbail
            to='/campain/this-is-view-page'
            className='h-[398px] flex-1 mb-4'
            img={imageFeature}
          />

          <div className='flex justify-center gap-x-5'>
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={`${item + index}`}
                  src='https://source.unsplash.com/random'
                  alt='slider'
                  className='w-[89px] h-[70px] object-cover rounded'
                />
              ))}
          </div>
        </div>

        <div className='flex-1 max-w-[443px]'>
          <CategoryCampain title='Architeture' className='!text-sm' />
          <CamHeader
            title=' Lorem ipsum dolor sit amet dolor pusku.'
            className='font-bold text-xl mb-4'
          />
          <CamDesc
            className='mb-6'
            desc='Error eveniet repellendus excepturi et facere sequi nam doloribus officiis molestiae laborum labore deserunt!'
          />
          <CamViewAuthor author='Emi Fukuda' img='/emi.jpg' />

          <div className='w-full h-[5px] mb-6 rounded-full bg-[#efefef]'>
            <div className='w-2/4 h-full rounded-full bg-primary'></div>
          </div>

          <div className='flex items-start justify-between gap-x-5 mb-5'>
            <CamMeta size='large' desc='Raise to $.1900' quantity='$.2000' />
            <CamMeta size='large' desc='Raise to $.1900' quantity='$.2000' />
            <CamMeta size='large' desc='Raise to $.1900' quantity='$.2000' />
          </div>

          <Button className='bg-primary text-white w-full'>
            Back this project
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default CampView;
