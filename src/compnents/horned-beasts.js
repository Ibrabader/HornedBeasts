import React from 'react';

class HornedBeasts extends React.Component {


   
      // Props are attributes we are inheriting "extending" from the React.Component Class
      // the props are Objects
    
      // these props have keys that we define 
      render() {
        console.log('props: ', this.props);
        return (
          <div>
            <h2>{this.props.headline}</h2>
            <p>{this.props.paragraph}</p>
            <img src={this.props.Url} alt="" />
          </div>
        )
      }
    }
    
    export default HornedBeasts;