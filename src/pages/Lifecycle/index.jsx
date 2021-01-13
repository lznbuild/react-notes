import React, { Component } from 'react';
import lifecycle1 from 'public/imgs/lifecycle-1.jpeg';
import lifecycle2 from 'public/imgs/lifecycle-2.jpg';
import './index.less';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      numForChild: 100
    };
    console.log('parent constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('parent getDerivedStateFromProps');
    return {};
  }

  componentDidMount() {
    console.log('parent componentDidMount');
  }

  shouldComponentUpdate(nextProps) {
    console.log('parent shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('parent getSnapshotBeforeUpdate');
    return {};
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('parent componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('parent componentWillUnmount');
  }

  render() {
    console.log('parent render');
    return (
      <div>
        <h1>旧版本</h1>
        <img src={lifecycle1} width="800" />
        <h1>新版本</h1>
        <img src={lifecycle2} width="800" />
        <h2>{this.state.num}</h2>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          修改当前组件的state.num
        </button>
        <ChildrenCom numForChild={this.state.numForChild}></ChildrenCom>
      </div>
    );
  }
}

class ChildrenCom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('child constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('child getDerivedStateFromProps');
    // 从props中获取state，如果props传入的内容不需要影响到你的state，可以返回null，这个返回值是必须的
    // 会在每次组件被重新渲染前被调用, 这意味着无论是父组件的更新, props 的变化, 或是组件内部执行了 setState(), 它都会被调用.
    return null;
  }

  componentDidMount() {
    console.log('child componentDidMount');
  }

  shouldComponentUpdate(nextProps) {
    console.log('child shouldComponentUpdate');

    // return nextProps.numForChild !== this.props.numForChild;
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('child getSnapshotBeforeUpdate');
    // 在 React 对视图做出实际改动（如 DOM 更新）发生前被调用，返回值将作为 componentDidUpdate 的第三个参数。
    return { a: 1 };
  }

  componentDidUpdate(prevProps, prevState, externalOptions) {
    console.log('child componentDidUpdate', externalOptions);
  }

  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }

  render() {
    console.log('child render');
    return <div>children{this.props.numForChild}</div>;
  }
}

export default Lifecycle;
