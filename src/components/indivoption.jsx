import React,{ Component } from 'react';
import {Panel,Grid,Row,Col} from 'react-bootstrap';
import classNames from 'classname';



export default class Indivoption extends Component {
  constructor(props){
        
        super(props);
        this.handleSelect=this.handleSelect.bind(this);
        this.inputchange=this.inputchange.bind(this);
          
    }

handleSelect()
{
  this.props.handleSelect(this.props.questionid);
}
inputchange(e)
{
this.props.inputchange(this.props.option.optionid,e.target.value);
}
   render() {
  
 let data=this.props.option.optionname;
      return (
    
    <div className="optiondiv">
    
  <Row className="show-grid"><Col xs={2} md={2}>{data}</Col>
    <Col xs={10} md={10}>
    <input className="questioninput" onChange={this.inputchange} defaultValue={this.props.option.optionvalue} type="text" />
    </Col>
    </Row>
   </div>
   
   
  
      );
   
}

}

