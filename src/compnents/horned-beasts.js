import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'



class Hornedbeast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numOfVotes: 0,
            heart: '❤️'
            
        }
    }

     
    

    gotVoted = () => {
        this.setState({
            numOfVotes: this.state.numOfVotes + 1
        });
        this.props.handleClose();
        this.props.takeData(this.props.title)
    };

    render() {
        return (
            <div style={{display : 'inline-block' }} >

                <Card style={{ margin : '15px', width: '18rem', display : 'inline-block' }} >
                    <Card.Img variant="top" style={{height : '20rem' }}  onClick={this.gotVoted} src={this.props.imgUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                         {this.props.description}
                         <h4>{this.state.heart.repeat(this.state.numOfVotes)} : {this.state.numOfVotes}</h4>
                        </Card.Text>     
                        {/* <Button variant="primary">Go somewhere</Button>                    */}
                    </Card.Body>
                </Card>

            </div>
        )
    }
}


export default Hornedbeast;








// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';


// class HornedBeasts extends React.Component {


//   constructor (props){

//     super(props);
//     this.state = {
//       votesForImage : 0,
//     }
//   }
//   //mmmmm
//     votingFunction = () => {

//       this.setState({
//         votesForImage : this.state.votesForImage +1    })
//     this.props.handleClose();
    
//     this.props.takeData(this.props.title)
//       }


//       render() {
//         console.log('props: ', this.props);
//         return (
//           <div style={{ display : "inline-block", margin : '15px' }}>
          
//             <Card style={{ width: '18rem', marginLeft : '40px'  }}>
//   <Card.Img onClick={this.votingFunction} variant="top" src={this.props.image_url} />
//   <Card.Body>
//     <Card.Title>{this.props.title}</Card.Title>
//     <Card.Text>
//     {this.props.description}
//     </Card.Text>

//     <Card.Text>
//     <p>Number Of votes{this.state.votesForImage}</p>
//     </Card.Text>
//   </Card.Body>
// </Card>

//           </div>
//         )
//       }
//     }
    
//     export default HornedBeasts;