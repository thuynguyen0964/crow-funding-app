import { useEffect } from 'react';
import Layout from 'src/Layout/Dashboard';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Home | Crow Funding App';
  }, []);
  return <Layout>Dashboard Pages</Layout>;
};

export default Dashboard;
