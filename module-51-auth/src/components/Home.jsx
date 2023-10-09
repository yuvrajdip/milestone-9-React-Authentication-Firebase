import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
  const authInfo = useContext(AuthContext);
  // console.log(authInfo);
  return (
    <div>
      This is Home
    </div>
  );
};

export default Home;