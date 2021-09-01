
import React from 'react';
import Hornedbeast from './horned-beasts';
import photoData from '../assets/data.json';
import Form from 'react-bootstrap/Form'


class Main extends React.Component {
        NumOfHornes =(e) => {
           let hornesNumber =   this.props.NumOfHornes(parseInt(e.target.value));
            let galary = photoData;
             if ( hornesNumber){
             galary == photoData.filter ((element => 
              element.horns === hornesNumber ));
     }
        this.props.update(this.galary);

  }

      render() {

      <div>
        <Form.Select aria-label="Default select example" onChange={this.NumOfHornes} >
          <option>Select Hornes Number</option>
          <option value="ALL" >All</option>
          <option value="1" >1</option>
          <option value="2" >2</option>
          <option value="3" >3</option>
          <option value="100"  >100</option>
        </Form.Select>
      </div>

        let allCardArr = this.props.cardsBeasts.map(element => {
            return (
                <Hornedbeast
                  takeData={this.props.takeData}
                  title={element.title}
                  imgUrl={element.image_url}
                  description={element.description}
                  handleClose={this.props.handleClose}
                />
            );

        });
        return (
    
            <div>
                {allCardArr}
            </div>
        )
    }
};

export default Main;
