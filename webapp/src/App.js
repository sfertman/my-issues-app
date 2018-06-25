import React, { Component } from 'react';
import logo from './asset/logo.svg';
import hburger from './asset/menu-button-of-three-horizontal-lines.svg'
import './App.css';


// const config = { 
//   api: {
//     host: 'backend'
//   }
// }


// look at flexbox
// bootstrap
// 


const renderCreateIssue = () => {
  return <div>
    hello
  </div>
}

const renderExistingIssue = (task) => {
  var marker;
  if (task.isDone === undefined) {
    marker = 'bullet grey';
  } else if (task.isDone) {
    marker = 'bullet green';
  } else {
    marker = 'bullet red'
  }


  
  return <table key={task._id} className='issue-row' width='100%'>
    <tbody>
      <tr>
        <td className='tight'>
          <input type='checkbox'/>
        </td>
        <td className='issue-title'>
          <b>{task.title}</b>
        </td>
        <td className='tight'>
            <div className={marker} title='status'></div>
        </td>
        <td className='tight'>
          <img className='hamburger' src={hburger} height='15px' alt='expand' title='expand'/>
        </td>
      </tr>
      <tr>
        <td></td>
        <td colSpan='3'>
          <table width='100%'>
            <tbody>  
              <tr>
                <td className='issue-info' width='50%' style={{textAlign:'left'}}>#{task._id} lkmlmlk: some meta info</td>
                <td className='info' width='50%' style={{textAlign:'right'}}>
                  Due: {task.dueDate}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
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

  createNewIssue () {
    console.log('haha');
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <header className="App-header" style={{textAlign:'left'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Issues</h1>
        </header>
        <div style={{alignItems: 'center'}}>
          nfnfnfn
          <div style={{alignItems:'center'}}> 
            <button onClick={this.createNewIssue.bind(this)} className='plus-button'>New Issue</button>
          </div>
          <div style={{maxWidth:'750px'}}>
            {tasks.map((task) => renderExistingIssue(task))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
