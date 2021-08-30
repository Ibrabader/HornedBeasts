import React from 'react';
import HornedBeasts from './horned-beasts';
import data from '../assets/data.json';

class Main extends React.Component {

  render() {

    let dataImage = data.map(value =>{
      return (
<HornedBeasts 
title={value.title}
description={value.description}
image_url={value.image_url}
/>
      );
    })
    return (
      <main>
{dataImage}
</main>
/*  
        <HornedBeasts
          headline="UniWhal"
          Url="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          paragraph="A unicorn and a narwhal nuzzling their horns"
        />
       
        <HornedBeasts

         Url="https://duel-portal.com/wiki/images/thumb/e/e4/119903_Full.jpg/400px-119903_Full.jpg"
         paragraph="Mother (or father) rhino with two babies"
         headline='Rhino Family'
        /> */


      
    )
  }
}

export default Main;