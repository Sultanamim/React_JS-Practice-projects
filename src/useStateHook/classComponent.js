import React, { Component } from 'react'

export default class ClassComponent extends Component {
   state= {
    todo: '',
    warning: null,
   }

   handleInputChange = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes('.js') ? "You need javascript skill to complete the task. Do you have it?" : null;

    this.setState({
        todo: inputValue,
        warning,
    })
   }

  render() {
    const {todo, warning} = this.state;

    return (
      <div>
        <div className='hooks'>
            <h1>{'useState() Hook'}</h1>
            <p>Check with '.js'</p>
            <p>{todo}</p>
            <p className='textarea'>
              <textarea name="todo" value={todo} onChange={this.handleInputChange} />
            </p>
            <div className='warning' style={warning? {color: "red", background: "pink"} : {color: 'yellowGreen', }}>
            <h2>{warning || "Good Choice"}</h2>
            </div>
        </div>
      </div>
    );
  }
}
