import About from '@/components/About';
import Banner from '@/components/Banner';
import Blog from '@/components/Blog';
import Pillar from '@/components/Pillar';
import PrayerTime from '@/components/PrayerTime';
import Service from '@/components/Service';
import Support from '@/components/Support';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner />
      <PrayerTime />
      <About />
      <Service />
      <Pillar />
      <Support />
      <Blog />
    </div>
  );
};

export default page;