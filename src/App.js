import React,{Component} from 'react';
 import Mainpage from './components/Mainpage.jsx';
 



class App extends React.Component {
constructor(props)
{
super(props);
}
 
   render() {

      return (
        <div> 
         
           <Mainpage />
        </div>
      )
   }
}

export default  App;