import React, {Component} from 'react';
import './App.css';
import Demo1 from './components/Content1';
import Demo2 from './components/Content2';
import './components/style.css';


class App extends Component {
  constructor(){
      super();

        this.state = {
            message1: false,
            message2: false
        }
  }

  showMessage1(){
    this.setState(
      {
        message1: !this.state.message1 
      }
    )
  }

  showMessage2(){
    this.setState(
      {
        message2: !this.state.message2 
      }
    )
  }

  render(){
    return(
      <div className="App">

          <h1 id='heading'>Styling Using Functional and Class Component</h1>

          <button className='btn' onClick={ ()=>this.showMessage1() }>To see styling in functional component</button>
          <button className='btn' onClick={ ()=>this.showMessage2() }>To see styling in class component</button>

            {
              this.state.message1 ? <Demo1/> :null
            }
          
            {
              this.state.message2 ? <Demo2/> :null
            }

      </div>
    )
  }
}

export default App;
