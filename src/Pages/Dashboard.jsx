/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import Layout from 'src/Layout/Dashboard';
import Heading from 'src/components/common/Heading';
import CampainFeature from 'src/modules/Campain/CampainFeature';
import CampainItem from 'src/modules/Campain/CampainItem';
import Grid from 'src/modules/Campain/Grid';
import { v4 as uuidV4 } from 'uuid';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Home | Crow Funding App';
  }, []);
  return (
    <Layout>
      <Heading number={4}>Your campain</Heading>
      <CampainFeature />
      <Heading>Popular Campain near you</Heading>
      <Grid>
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
    </Layout>
  );
};

export default Dashboard;
