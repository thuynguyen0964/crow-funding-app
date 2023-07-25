import { useState } from 'react';

const useChange = () => {
  const [value, setValue] = useState(null);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return [value, handleChange];
};

export { useChange };
