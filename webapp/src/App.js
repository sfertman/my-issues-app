import React, { Component } from 'react';
import logo from './asset/logo.svg';
import hbrgr from './asset/menu-button-of-three-horizontal-lines.svg'
import './App.css';


// const config = { 
//   api: {
//     host: 'backend'
//   }
// }


// look at flexbox
// bootstrap
// 


const renderIssue = (task) => {
  var marker;
  if (task.isDone === undefined) {
    marker = 'bullet grey';
  } else if (task.isDone) {
    marker = 'bullet green';
  } else {
    marker = 'bullet red'
  }


  
  return <div className='issue-row'>
    <table width='100%'>
      <tr>
        <td className='tight'>
          <input type='checkbox'/>
        </td>
        <td className='title'>
          <b>{task.title}</b>
        </td>
        <td className='tight'>
            <div class={marker} title='status'></div>
        </td>
        <td className='tight'>
          <img className='hamburger' src={hbrgr} height='15px' alt='expand' title='expand'/>
        </td>
      </tr>
      <tr>
        <td></td>
        <td colSpan='3'>
          <table width='100%'>
            <tr>
              <td className='info' width='50%' style={{'text-align':'left'}}>#{task._id} lkmlmlk: some meta info</td>
              <td className='info' width='50%' style={{'text-align':'right'}}>
                Due: {task.dueDate}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
}

class App extends Component {
  state = {
    tasks: [{
      _id: '12345',
      title: 'My task 01',
      details: 'this contains detailed description of task 1',
      dueDate: Date(),
      isDone: false
    }, {
      _id: '12346',
      title: 'Build a shed',
      details: 'this contains detailed description of task 2',
      dueDate: Date(),
      isDone: true
    }, {
      _id: '12347',
      title: 'Pet the cats',
      details: 'this contains detailed description of task 3',
      dueDate: Date(),
    }]
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Issues</h1>
        </header>
        <table className="App-intro" width='75%' align='center'>
          {tasks.map((task) => renderIssue(task))}
        </table>
      </div>
    );
  }
}

export default App;
