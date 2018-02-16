import React,{ Component } from 'react';
import {Panel,Grid,Row,Col} from 'react-bootstrap';
import Indivoption from './indivoption.jsx'





export default class QuestionDesign extends Component {
  constructor(props){
        
        super(props);
        this.inputchange=this.inputchange.bind(this);
         this.addOption=this.addOption.bind(this);
         this.deleteOption=this.deleteOption.bind(this);
         this.handleImageChange=this.handleImageChange.bind(this);
              
    }
    addOption()
    {
      this.props.addOption(this.props.question.questionid);
    }
      deleteOption()
    {
      this.props.deleteOption(this.props.question.questionid);
    }
    handleImageChange(e)
    {
 let file = e.target.files[0];
 this.props.handleImageChange(file,this.props.question.questionid);
    }
  inputchange(e)
  {
     this.props.inputchange(e.target.value,this.props.question.questionid);
  }
  componentDidMount()
  {
     //  this.textInput.innerHTML=this.textInput.innerHTML;
  }
   render() {
let imagePreviewUrl = this.props.question.imagePreviewUrl;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    let content;
    if(this.props.question.question)
    {
   content=(
    <div>
    <Row className="show-grid"><Col xs={2} md={2}>Question</Col><Col xs={10} md={10}>
    <input className="questioninput" onChange={this.inputchange} key={this.props.question.questionid} placeholder={this.props.question.question} defaultValue={this.props.question.question} type="text"/>
    </Col>
    </Row>   
    <Row className="show-grid"><Col xs={12} md={12}>
    <div className="underdiv">
     <input className="fileInput" type="file" onChange={this.handleImageChange}  ref={(input) => { this.textInput = input; }} key={this.props.question.questionid} />
         <button className="add button" onClick={this.uploadImage}>Upload</button>
    </div>
   
     </Col>
    </Row>
     <Row className="show-grid">
     <Col xs={12} md={12}>
     <div className="underdiv">
      <div className="imgPreview">
          {$imagePreview}
        </div>
     </div>
     </Col>
     </Row>
    <Row className="show-grid">
    {this.props.question.options.map((option) => {  
    return  <Indivoption option={option} inputchange={this.props.inputChangeOption}/>
    })} 
    </Row>
 <Row className="show-grid"><Col xs={12} md={12}>
    <div className="underdiv">
         <button className="add button" onClick={this.addOption}>Add Option</button>
         <button className="delete button" onClick={this.deleteOption}>Delete</button>
    </div>
     </Col>
    </Row>
     </div>
    
    );
}
else
{
   content=(
    <div></div>
    );
}
      return (
    
    <div className="questiondesign">
    <Grid>
   {content}
   
       </Grid>
    </div>
  
      );
   
}

}

