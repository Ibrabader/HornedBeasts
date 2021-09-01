import React from 'react';

import Main from './compnents/main';

import Header from './compnents/header';

import Footer from './compnents/footer';

import SelectedBeast  from './compnents/SelectedBeast ';
// import SelectedBeast from './compnents/SelectedBeast'

class App extends React.Component {
                
constructor (props){

  super(props)
  this.state ={

    show :false
  }
}
      handleClose = () =>{
      
        this.setState({show:!this.state.show})
     }
 


  render() { 
    return (
      <div>
       
        <Header />
        <Main  
         handleClose={this.handleClose}
         />

      <Footer/>

       <SelectedBeast
      show = {this.state.show} 
      handleClose={this.handleClose}

      />
       
      </div>
    );
  }}

export default App; 