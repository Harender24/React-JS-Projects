import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () => {
  return (
    <>
      <Common
        title='Grow your business with'
        visit='/service'
        btnText='Get Started'
      />
    </>
  );
};

export default Home;
