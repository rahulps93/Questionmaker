import React,{ Component } from 'react';
import {Panel,Grid,Row,Col} from 'react-bootstrap';
import classNames from 'classname';
import Indivquestion from './indivquestion.jsx';





export default class Question extends Component {
  constructor(props){
        
        super(props);
this.state={
  selectedQuestion:0
};
         this.handleclickAdd=this.handleclickAdd.bind(this);   
         this.handleSelect=this.handleSelect.bind(this);
         this.handleDeleteQuestion=this.handleDeleteQuestion.bind(this);   
    }



    handleSelect(selectedquestion){
 this.setState({
    selectedQuestion:selectedquestion
  });
 this.props.handleSelect(selectedquestion);
    }

handleDeleteQuestion()
{
  this.props.handleDeleteQuestion(this.state.selectedQuestion);
}

  handleclickAdd()
  {
    this.props.handleclickAdd();
  }


   render() {
    
  let data=this.props.questionsprops;
      return (
    
    <div>
    <div className="ques-group">
    {data.map((question) => {  
    return <Indivquestion question={question.question} questionid={question.questionid} selectedquestionid={this.state.selectedQuestion} handleSelect={this.handleSelect}/>
    })}
   
    </div>
    <div className="underdiv">
         <button className="add button" onClick={this.handleclickAdd}>Add</button>
         <button className="delete button" onClick={this.handleDeleteQuestion}>Delete</button>
    </div>

    </div>
  
      );
   
}

}

