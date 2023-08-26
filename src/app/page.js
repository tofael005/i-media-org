import About from '@/components/About';
import Banner from '@/components/Banner';
import PrayerTime from '@/components/PrayerTime';
import Service from '@/components/Service';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner />
      <PrayerTime />
      <About />
      <Service />
    </div>
  );
};

export default page;