import React from 'react';
import data from '../src/assets/data.json'

import Main from './compnents/main';

import Header from './compnents/header';

import Footer from './compnents/footer';


class App extends React.Component {
      constructor (props){
      super(props);
      this.state={

      show:false,
                                  }

      handleClose = () =>{
      
        this.setState({show:!this.state.show})
     }
 }


  render() { 
    return (
      <div>
       
        <Header />
        <Main dataBeast ={data} 
         handleClose={this.handleClose}/>
      <Footer/>
       
      </div>
    )
  }
}

export default App; 