import About from '@/components/About';
import Banner from '@/components/Banner';
import PrayerTime from '@/components/PrayerTime';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner />
      <PrayerTime />
      <About />
    </div>
  );
};

export default page;