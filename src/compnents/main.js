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
handleClose = {this.props.handleClose}
// handleClose={this.props.handleClose}
/>
      );
    })
    return (
      <main>
{dataImage}
</main>



      
    );
  }
}

export default Main;