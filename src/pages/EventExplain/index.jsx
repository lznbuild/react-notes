import React, { Component, Fragment } from 'react';
import './index.less';

class EventExplain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }
  componentDidMount() {
    document.querySelector('#addBtn').addEventListener('click', () => {
      console.log('原生事件执行'); // 先执行
      this.setState({ num: this.state.num + 1 });
    });

    document.querySelector('#parent').addEventListener('click', () => {
      console.log('parent 原生');
    });

    document.querySelector('#child').addEventListener('click', (e) => {
      // e.stopPropagation();

      console.log('child 原生');
    });

    document.addEventListener('click', () => {
      console.log('document click');
    });
  }

  handleAddNum = () => {
    console.log('合成事件执行');
    this.setState({ num: this.state.num + 1 });
  };

  parentClick = () => {
    console.log('parent 合成');
  };

  childClick = (e) => {
    // e.stopPropagation();

    // e.nativeEvent.stopImmediatePropagation();
    console.log('child 合成');
  };

  render() {
    const { num } = this.state;
    return (
      <Fragment>
        <div>
          {num}
          {/* 
        <button onClick={handleAddNum}>+1</button>
        <button id="addBtn">+1（原生事件）</button>
         */}
          <button id="addBtn" onClick={this.handleAddNum}>
            +1
          </button>
        </div>
        <div id="parent" onClick={this.parentClick} className="parent-container">
          <div id="child" className="child-container" onClick={this.childClick}></div>
        </div>
      </Fragment>
    );
  }
}

export default EventExplain;

/*
合成事件的意义 
1. 维护统一的一套事件系统，抹平关于event的浏览器兼容性问题 
  e.target || e.scrElement
  e.stopPropagation() || e.cancelBubble = true
  e.preventDefault() || e.returnValue = false
  ...

2. 相比于在复杂页面上往众多dom上一一挂事件，统一把事件委托到document上，性能优


只委托到document, 对于上层的window仍然用原生方式挂在方法

*/
