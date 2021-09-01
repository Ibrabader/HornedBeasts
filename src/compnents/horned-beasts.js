import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


class HornedBeasts extends React.Component {


  constructor (props){

    super(props);
    this.state = {
      votesForImage : 0,
    }
  }
  //mmmmm
    votingFunction = () => {

      this.setState({
        votesForImage : this.state.votesForImage +1    })
    this.props.handleClose();
    
      }


      render() {
        console.log('props: ', this.props);
        return (
          <div style={{ display : "inline-block", margin : '15px' }}>
          
            <Card style={{ width: '18rem', marginLeft : '40px'  }}>
  <Card.Img onClick={this.votingFunction} variant="top" src={this.props.image_url} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>

    <Card.Text>
    <p>Number Of votes{this.state.votesForImage}</p>
    </Card.Text>
  </Card.Body>
</Card>

          </div>
        )
      }
    }
    
    export default HornedBeasts;