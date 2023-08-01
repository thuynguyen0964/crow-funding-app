/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState } from 'react';
import Heading from 'src/components/common/Heading';
import Overlay from 'src/components/common/Overlay';
import { useAxiosPrivate } from 'src/hooks/useAxiosPrivate';
import CampainFeature from 'src/modules/Campain/CampainFeature';
import CampainItem from 'src/modules/Campain/CampainItem';
import Grid from 'src/modules/Campain/Grid';
import { titlePage } from 'src/utils/contants';
import { v4 as uuidV4 } from 'uuid';

const Dashboard = () => {
  const axiosPrivate = useAxiosPrivate();
  const [camp, setCamp] = useState([]);

  const getCampains = async () => {
    try {
      const response = await axiosPrivate.get('/campaigns');
      const { data } = response;
      setCamp(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCampains();
  }, []);

  useEffect(() => {
    document.title = titlePage.HOMEPAGE;
  }, []);
  return (
    <Fragment>
      <Overlay />
      <Heading number={4}>Your campain</Heading>
      <CampainFeature />
      <Heading>Popular Campain near you</Heading>
      <Grid variant='default'>
        {Array(4)
          .fill(0)
          .map((_) => (
            <CampainItem key={uuidV4()}></CampainItem>
          ))}
      </Grid>
      <Heading className='mt-5' number={4}>
        Recents Campain
      </Heading>
      <Grid>
        {Array(4)
          .fill(0)
          .map((_) => (
            <CampainItem key={uuidV4()}></CampainItem>
          ))}
      </Grid>
    </Fragment>
  );
};

export default Dashboard;
