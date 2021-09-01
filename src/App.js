import React from 'react';
import Header from './compnents/header';
import Main from './compnents/main';
import Footer from './compnents/footer';
import SelectedBeast from './compnents/SelectedBeast ';
import photoData from './assets/data.json';
import Form from 'react-bootstrap/Form'
class App extends React.Component {

      constructor(props){
          super (props);
          this.state={
             data : photoData,
             show : false,
             title: '',
             selctedImg : {},     
                          }
  }
     takeData = (title) =>{

       let filteredData = photoData.filter(elem => {
      
        return (elem.title == title)
      
    });

      this.setState({
      selctedImg: filteredData[0],
      title: title,

    });
  }
      handleClose = () => {
    
         this.setState ({
          show: !this.state.show,
      
       });
  }


      update = (galary) =>{

           this.setState ({
            data : galary 
            }); 

      } 
      render (){
    
          return (
        <div>
          <Header />

          <SelectedBeast 

          cardsBeasts = {this.galary}
          show = {this.state.show}
          selctedImg ={this.state.selctedImg}
          handleClose = {this.handleClose} 
          
          />

          <Main 

          update = { this.update}
          takeData = {this.takeData}
          cardsBeasts = {photoData}
          handleClose = {this.handleClose}
          
          />

          <Footer />

          
        </div>
    );
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