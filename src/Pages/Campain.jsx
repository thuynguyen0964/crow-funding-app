import { Fragment, useEffect } from 'react';
import Heading from 'src/components/common/Heading';
import CampainFeature from 'src/modules/Campain/CampainFeature';
import Grid from 'src/modules/Campain/Grid';
import { PlusIcon } from '@heroicons/react/24/outline';
import Button from 'src/components/Button';
import { titlePage } from 'src/utils/contants';

const Campain = () => {
  useEffect(() => {
    document.title = titlePage.CAMPPAGE;
  }, []);

  return (
    <Fragment>
      <section className='flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl'>
        <div className='flex items-start gap-x-6'>
          <span className='flex items-center justify-center rounded-full bg-secondary w-14 h-14'>
            <PlusIcon className='text-white w-7 h-7' />
          </span>
          <div className='flex-1'>
            <h1 className='font-semibold text-[22px] mb-2'>
              Create your campain
            </h1>
            <p className='mb-2 text-sm text-text3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              cumque, veritatis similique labore voluptatibus numquam?
            </p>
            <a href='#!' className='text-sm text-primary'>
              Need any help ? Learn more...
            </a>
          </div>
        </div>

        <Button
          to='/campain/add'
          className='px-4 text-blue-600 bg-secondary bg-opacity-40'
        >
          Create campain
        </Button>
      </section>
      <Heading number={4}>Your campain</Heading>
      <Grid variant='custom'>
        <CampainFeature />
        <CampainFeature />
        <CampainFeature />
        <CampainFeature />
      </Grid>
      <Button className='px-6 mx-auto mt-3 text-blue-600 bg-opacity-30 bg-secondary'>
        <span>See more</span>
        <PlusIcon className='w-5 h-5' />
      </Button>
    </Fragment>
  );
};

export default Campain;
