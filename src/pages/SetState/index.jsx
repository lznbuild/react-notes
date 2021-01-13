import React, { Component, Fragment } from 'react';

class SetStateExplain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }

  handleAddNum1 = () => {
    this.setState({ num: this.state.num + 1 });
    console.log(this.state.num, '1');
    this.setState({ num: this.state.num + 1 });
    console.log(this.state.num, '1');

    // 修改操作不会叠加，过程异步
    // 异步的原因： 性能
    // 同步情况 addEventListener 和setTimeout 不会触发react的批处理机制
  };

  handleAddNum2 = () => {
    this.setState(
      (prevState) => ({ num: prevState.num + 1 }),
      () => {
        // 或者componentDidUpdate
        console.log('更新完毕', this.state.num);
      }
    );

    console.log(this.state.num, '2');

    this.setState(
      (prevState) => ({ num: prevState.num + 1 }),
      () => {
        console.log('更新完毕', this.state.num);
      }
    );

    console.log(this.state.num, '2');

    // 修改操作可以叠加，框架内部做了一层缓存, 过程异步
  };

  handleAddNum3 = () => {
    this.setState({ num: this.state.num + 1 });
    console.log(this.state.num, '3');

    this.setState((prevState) => ({ num: prevState.num + 1 }));
    console.log(this.state.num, '3');
  };

  render() {
    const { num } = this.state;
    return (
      <Fragment>
        <div>{num}</div>
        <button onClick={this.handleAddNum1}>+1(常用)</button>
        <button onClick={this.handleAddNum2}>+1(回调函数)</button>
        <button onClick={this.handleAddNum3}>+1(综合)</button>
      </Fragment>
    );
  }
}

export default SetStateExplain;
