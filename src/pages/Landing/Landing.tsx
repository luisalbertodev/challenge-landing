import { useState, useEffect } from 'react';
import Header from 'components/Header';
import SectionOne from './components/SectionOne';
import * as S from './Landing.sc';

const Landing = () => {
  return (
    <>
      <Header />
      <SectionOne />
    </>
  );
};

export default Landing;
