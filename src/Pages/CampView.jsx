import classNames from 'classnames';
import { Fragment, useEffect } from 'react';
import Button from 'src/components/Button';
import CampainItem from 'src/modules/Campain/CampainItem';
import Grid from 'src/modules/Campain/Grid';
import Perk from 'src/modules/Campain/Perk';
import Support from 'src/modules/Campain/Support';
import CamDesc from 'src/modules/Campain/part/CamDesc';
import CamHeader from 'src/modules/Campain/part/CamHeader';
import CamThumbail from 'src/modules/Campain/part/CamImg';
import CamMeta from 'src/modules/Campain/part/CamMeta';
import CamViewAuthor from 'src/modules/Campain/part/CamViewAuthor';
import CategoryCampain from 'src/modules/Campain/part/Category';
import { imageFeature, titlePage } from 'src/utils/contants';

const titleResult = 'Education';

const CampView = () => {
  useEffect(() => {
    document.title = `${titlePage.VIEWPAGES} ${titleResult}`;
  }, []);
  return (
    <Fragment>
      <div
        className={classNames(
          'h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center banner-bg flex items-center justify-center text-white mb-10'
        )}
      >
        <h1 className='font-bold text-[40px]'>{titleResult}</h1>
      </div>

      {/* herp */}
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

      {/*  body*/}
      <div className='flex justify-between mt-[100px] rounded bg-white shadow-md p-5 mb-6'>
        <div className='flex items-center gap-x-14 text-sm font-medium text-text3'>
          <span className='cursor-pointer text-secondary'>Campain</span>
        </div>
        <Button className='bg-primary text-white'>Back this project</Button>
      </div>
      <div className='grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]'>
        <div>
          <h2 className='mb-5 text-lg font-semibold uppercase'>Story</h2>
          <div className='w-full bg-white'>
            <h2 className='text-text3 italic'>Content will be appear here!!</h2>
          </div>
        </div>
        <div>
          <Support />
          <div className='mb-[60px]'></div>
          <div className='flex flex-col gap-y-[30px]'>
            <Perk />
            <Perk />
            <Perk />
          </div>
        </div>
      </div>
      <h2 className='mb-10 text-xl font-semibold'>
        You also may be interested in
      </h2>
      <Grid>
        <CampainItem />
        <CampainItem />
        <CampainItem />
        <CampainItem />
      </Grid>
    </Fragment>
  );
};

export default CampView;
