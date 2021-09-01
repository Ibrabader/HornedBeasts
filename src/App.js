import React from 'react';
import Header from './compnents/header';
import Main from './compnents/main';
import Footer from './compnents/footer';
import SelectedBeast from './compnents/SelectedBeast ';
import cardData from './assets/data.json';

class App extends React.Component {

  constructor(props){
    super (props);
    this.state={
      show : false,
      title: '',
      selctedImg : {}     
    }
  }
  takeData = (title) =>{

    // let filteredData = cardData.find(elem => {
      
    //   return (elem.title == title)
      
    // })
    // ---------------------------------------

    let filteredData = cardData.filter(elem => {
      
      return (elem.title == title)
      
    })
    console.log(filteredData);
    // ------------------------------------
    this.setState({
      selctedImg: filteredData[0],
      title: title,

    })
  }
  handleClose = () => {
    
    this.setState ({
      show: !this.state.show,
      
    })
    // alert('from handelclose')
  }
  render (){
    
    return (
      <div>
        <Header />
        <SelectedBeast 
        cardsBeasts = {cardData}
        show = {this.state.show}
        selctedImg ={this.state.selctedImg}
        handleClose = {this.handleClose} />
        <Main 
        takeData = {this.takeData}
        cardsBeasts = {cardData}
        handleClose = {this.handleClose} />
        <Footer />
      </div>
    )
  }
}

export default App;




// import React from 'react';

// import Main from './compnents/main';

// import Header from './compnents/header';

// import Footer from './compnents/footer';

// import SelectedBeast  from './compnents/SelectedBeast ';

// import data from './assets/data.json'


// class App extends React.Component {
                
// constructor (props){

//   super(props)
//   this.state ={

//     show :false,
//     title: '',
//     selctedImg : {}  
//   }
// }
// takeData = (title) =>{

//   let filteredData = Data.filter(elem => {
    
//     return (elem.title == title)
    
//   })

//   this.setState({
//     selctedImg: filteredData[0],
//     title: title,

//   })
// }


//       handleClose = () =>{
      
//         this.setState({show:!this.state.show})
//      }
 


//   render() { 
//     return (
//       <div>
       
//         <Header />
//         <Main  
//          handleClose={this.handleClose}
//          />

//       <Footer/>

//        <SelectedBeast
//       show = {this.state.show} 
//       handleClose={this.handleClose}
//       cardsBeasts ={data}

//       />
       
//       </div>
//     );
//   }}

// export default App; 