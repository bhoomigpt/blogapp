import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-around items-center flex-col gap-4 sm:gap-0 sm:flex-row bg-black py-6'>
      {/* Logo */}
      <Image src={assets.logo_light} alt='Logo' width={120} height={40} />

      {/* Copyright Text */}
      <p className='text-sm text-white text-center'>
        All rights reserved. Copyright @blogger
      </p>

      {/* Social Media Icons */}
      <div className='flex gap-4'>
        <Image src={assets.facebook_icon} alt='Facebook' width={40} height={40} />
        <Image src={assets.twitter_icon} alt='Twitter' width={40} height={40} />
        <Image src={assets.googleplus_icon} alt='Google+' width={40} height={40} />
      </div>
    </div>
  );
};

export default Footer;
