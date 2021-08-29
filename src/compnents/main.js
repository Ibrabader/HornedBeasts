import React from 'react';
import HornedBeasts from './horned-beasts';

class Main extends React.Component {

  render() {
    return (
      <main>
        {/* In each instance we need to pass different information */}
        {/* Props is what is used by react to pass info from one component to another */}
        <HornedBeasts
          headline="UniWhal"
          Url="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          paragraph="A unicorn and a narwhal nuzzling their horns"
        />
        {/* new HornedBeats(title, description, imageUrl) */}
        <HornedBeasts

         Url="https://duel-portal.com/wiki/images/thumb/e/e4/119903_Full.jpg/400px-119903_Full.jpg"
         paragraph="Mother (or father) rhino with two babies"
         headline='Rhino Family'
        />
      </main>
    )
  }
}

export default Main;