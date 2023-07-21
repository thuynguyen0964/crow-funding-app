import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Crow Funding App';
  }, []);
  return (
    <>
      <h1>This is Home Page</h1>
    </>
  );
};

export default Home;
