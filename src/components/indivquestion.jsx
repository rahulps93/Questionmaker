import React,{ Component } from 'react';
import {Panel,Grid,Row,Col} from 'react-bootstrap';
import classNames from 'classname';





export default class Indivquestion extends Component {
  constructor(props){
        
        super(props);
        this.handleSelect=this.handleSelect.bind(this);
          
    }

handleSelect()
{
  this.props.handleSelect(this.props.questionid);
}

   render() {
  
 let classfrquestion = classNames({ 
      indivqitem:true,
      selectedq:this.props.questionid==this.props.selectedquestionid?true:false
});
      return (
    
    <div>
    
   <a onClick={this.handleSelect} className={classfrquestion}>{this.props.question}</a>
   </div>
   
   
  
      );
   
}

}

