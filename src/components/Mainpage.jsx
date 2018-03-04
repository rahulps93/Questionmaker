import React,{ Component } from 'react';
import {Panel,Grid,Row,Col} from 'react-bootstrap';

import Question from './question.jsx'
import QuestionDesign from './questiondesign.jsx'
import update from 'react-addons-update';


export default class Mainpage extends Component {
  constructor(props){
        
        super(props);

this.state={
  questions:[],
  questioncount:0,
  optioncount:0,
  selectedQuestion:{},
  inputvalue:'',
  selectedquestionid:''
};
this.handleclickAddMain=this.handleclickAddMain.bind(this);
this.handleSelectQuestion=this.handleSelectQuestion.bind(this);
this.inputChange=this.inputChange.bind(this);
this.addOption=this.addOption.bind(this);
this.deleteOption=this.deleteOption.bind(this);
this.inputChangeOption=this.inputChangeOption.bind(this);
this.handleDeleteQuestion=this.handleDeleteQuestion.bind(this);
this.setstatelocalstorage=this.setstatelocalstorage.bind(this);
this.handleImageChange=this.handleImageChange.bind(this);
this.clearPicture=this.clearPicture.bind(this);
              
    }
    componentWillMount()
    {
      let questions=localStorage.getItem('questionStored');
      let questioncount=parseInt(localStorage.getItem('questioncountStored'));
      if(questioncount&&questioncount)
      {
      this.setState({
        questions:JSON.parse(questions),
        questioncount:questioncount
      });
    }

    }
  setstatelocalstorage()
  {
  localStorage.setItem('questionStored', JSON.stringify(this.state.questions));
   localStorage.setItem('questioncountStored', this.state.questioncount);
  }
 componentDidMount()
  {
    window.onbeforeunload = this.setstatelocalstorage;
  
  }
handleDeleteQuestion(questionno)
{
  let selectedquestion=this.state.questions.findIndex(x => x.questionid === questionno); 
  this.setState({questions:update(this.state.questions, {$splice:[[selectedquestion,1]] }),selectedQuestion:{}});
}
deleteOption(questionno)
{
 let index=this.state.questions.findIndex(x => x.questionid==questionno);
 let length=this.state.questions[index].options.length;
 let optioncount=this.state.questions[index].optioncount?this.state.questions[index].optioncount-1:1;
 this.setState({questions:update(this.state.questions,{[index]:{options: {$splice:[[length-1,1]] },optioncount: {$set: optioncount}}})});
 this.setState({selectedQuestion:update(this.state.selectedQuestion,{options: {$splice:[[length-1,1]] },optioncount: {$set: optioncount}})});


}
handleImageChange(file,questionno)
{
   let index=this.state.questions.findIndex(x => x.questionid==questionno);
   let that=this;
 let reader = new FileReader();
    reader.onloadend = () => {
      that.setState({questions:update(that.state.questions,{[index]:{file: {$set: file},imagePreviewUrl: {$set: reader.result}}})});
       that.setState({selectedQuestion:update(that.state.selectedQuestion,{file: {$set: file},imagePreviewUrl: {$set: reader.result}})});

      
    }

    reader.readAsDataURL(file);
}
clearPicture(questionid)
{
   let index=this.state.questions.findIndex(x => x.questionid==questionid);
   this.setState({questions:update(this.state.questions,{[index]:{file: {$set: ''},imagePreviewUrl: {$set: ''}}})});
     this.setState({selectedQuestion:update(this.state.selectedQuestion,{file: {$set: ''},imagePreviewUrl: {$set: ''}})});

}
handleSelectQuestion(questionno)
{
  let selectedquestion=this.state.questions.find(x => x.questionid === questionno);
  this.setState({
    inputvalue:selectedquestion.question,
    optioncount:0,
    selectedquestionid:questionno
  });
 // this.setState({selectedQuestion:update(this.state.selectedQuestion,{question: {$set:selectedquestion.question },options:{$set:selectedquestion.question},optioncount:{$set:selectedquestion.question}})});
this.setState({selectedQuestion:update(this.state.selectedQuestion,{$set:selectedquestion})});
}
    handleclickAddMain()
    {
      
      let questionname=`Question${this.state.questioncount+1}`;
     this.setState(previousState => {
    return {  questions:[...previousState.questions, {question:questionname,questionid:previousState.questioncount + 1,options:[]}],
    questioncount: previousState.questioncount + 1
     }
  });      
    }

    inputChange(question,id)
     {
      this.set
    let index=this.state.questions.findIndex(x => x.questionid==id);
    let questiondata = {
      question:question,
      questionid:id,
      options:[],
      optioncount:0
    }; 
//this.setState({
 // questions[index].question:question
//});
    this.setState({questions:update(this.state.questions, {[index]:{question: {$set: question }}}),inputvalue:question});

     }
     inputChangeOption(optionid,optionvalue,questionid)
     {
      let indexquestion=this.state.questions.findIndex(x => x.questionid==questionid);
      let index=this.state.questions[indexquestion].options.findIndex(x => x.optionid==optionid);
      this.setState({questions:update(this.state.questions, {[indexquestion]:{options:{[index]:{optionvalue: {$set: optionvalue }}}}})});
     }
     addOption(questionid)
     {
     let index=this.state.questions.findIndex(x => x.questionid==questionid);
     
     let optioncount=this.state.questions[index].optioncount?this.state.questions[index].optioncount+1:1;
     let optionname=this.state.questions[index].optioncount?`Option${optioncount}`:'Option1';
     if(optioncount<5)
     {
     this.setState({questions:update(this.state.questions, {[index]:{options: {$push: [{optionname:optionname,optionvalue:'',optionid:optioncount}] },optioncount: {$set: optioncount}}})});
    //  this.setState({questions:update(this.state.questions, {[index]:{optioncount: {$set: optioncount}}})});

     this.setState({selectedQuestion:update(this.state.selectedQuestion,{options: {$push: [{optionname:optionname,optionvalue:'',optionid:optioncount}]},optioncount: {$set: optioncount }})});
      //  this.setState({selectedQuestion:update(this.state.selectedQuestion, {optioncount: {$set: optioncount }})});
   }
   else
    alert("You cant add more than 5 options")
     }
    

   render() {
  
      return (
    
    <div >
     }
 <Grid>
    <Row className="show-grid">
      <Col xs={12} md={4} sm={12}>
      <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Select your Questions</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
      <div>
      <Question handleDeleteQuestion={this.handleDeleteQuestion} handleclickAdd={this.handleclickAddMain} questionsprops={this.state.questions} 
      handleSelect={this.handleSelectQuestion}/>
      </div>
      </Panel.Body>
      </Panel>
      </Col>
       <Col xs={12} md={8} sm={12}>
      <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Design</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
       <div>
      <QuestionDesign clearPicture={this.clearPicture} handleImageChange={this.handleImageChange} inputChangeOption={this.inputChangeOption} addOption={this.addOption} deleteOption={this.deleteOption} question={this.state.selectedQuestion} inputchange={this.inputChange} />
       </div>
      </Panel.Body>
      </Panel>
      </Col>
    </Row>
  </Grid>
</div>
  
      );
   
}

}

