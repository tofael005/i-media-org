import About from '@/components/About';
import Banner from '@/components/Banner';
import Pillar from '@/components/Pillar';
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
      <Pillar />
    </div>
  );
};

export default page;