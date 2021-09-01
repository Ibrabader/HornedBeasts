import React from 'react';
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';





class SelectedBeast extends React.Component {
    


    render() {
            
            return (

            <div>

                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selctedImg.title}</Modal.Title>
                    </Modal.Header>
                    <div>

                        <img src={this.props.selctedImg.image_url} className='imgInModel' />
                        <Modal.Body>
                           {this.props.selctedImg.description}
                        </Modal.Body>
                    </div>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        )

    }
}

export default SelectedBeast;



// import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';




// class SelectedBeast extends React.Component {

//   render (){

//     return(
    
//     <div>
//  <Modal show={this.props.show} onHide={this.props.handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={this.props.handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={this.props.handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//        </div>
   
//  );
 
  
//   }
// }
 
//     export default SelectedBeast;
