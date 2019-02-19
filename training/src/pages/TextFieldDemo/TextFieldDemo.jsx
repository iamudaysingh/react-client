import React from 'react';
import TextField from '../../components/TextField';
import { Slider } from '../../components/Slider';
import { publicBannerImages } from '../../configs/constants';

const bannerImages = [
  `${publicBannerImages}default.png`,
  `${publicBannerImages}cloud.jpg`,
  `${publicBannerImages}dns-server.png`,
  `${publicBannerImages}full-stack-web-development.jpg`,
  `${publicBannerImages}js.jpg`,
  `${publicBannerImages}load-balancer.png`,
];


const TextFieldDemo = () => (

  <>
    <Slider banners={bannerImages} random />
    <h4> This is a disabled input </h4>
    <TextField value="Disabled input" disabled />
    <h4> A valid input </h4>
    <TextField value="Accessible" disabled={false} />
    <h4> Input with errors </h4>
    <TextField value="101" error="Could not be greater than 100" />
  </>
);
export default TextFieldDemo;
