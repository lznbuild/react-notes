import React, { Component } from 'react';

class ErrorExplain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: NaN
    };
  }
  render() {
    return (
      <div>
        <ErrorBoundary>
          <div>{JSON.parse(this.state.number)}</div>
        </ErrorBoundary>
      </div>
    );
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorExplain;

/*

错误边界是一种 React 组件，这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI，
而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误。


### 无法捕获的场景

- 事件处理 
- 异步代码
- 服务端渲染
- 自身组件抛出的错误 


使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息 

只有 class 组件才可以成为错误边界组件
*/
