import React from 'react';
import HornedBeasts from './horned-beasts';

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



      
    )
  }
}

export default Main;