import React, { Component } from 'react'

export default class ClassComponent extends Component {
    state = {
        count: 0,
        date: new Date(),
    };



    componentDidMount(){
        console.log('component mounted');
        const {count} = this.state;
        let interval =  setInterval(this.tick, 1000);
        document.title = `Clicked ${count} times`;
        return interval;
    }
    componentDidUpdate(){
       // console.log('component updated');
        const {count} = this.state;
        document.title = `Clicked ${count} times`;
    }
    componentWillUnmount(){
        console.log('component unMounted');
        let interval =  setInterval(this.tick, 1000);
        clearInterval(interval);
    }

    addClick = () => {
        this.setState(({count}) => ({
            count: count + 1,
        }))
    }

    tick = () => {
        this.setState({
            date: new Date(),
        })
    }

  render() {
    const {date} = this.state;
    return (
      <div className='effectHook'>
        <p>Time: {date.toLocaleTimeString()}</p>
        <div className='btn'>
          <button type='button' onClick={this.addClick}>
            Click
          </button>
          <p>{'(Use this "Click" button & Check the "Document Title" on the top.)'}</p>
        </div>
      </div>
    )
  }
}
