import React, { useState, useEffect, useContext, useReducer } from 'react';
import { ThemeContext, themes } from './context';

const HookComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <ThemeContext.Provider value={themes.light}>
      {count}
      <button onClick={() => setCount(count + 1)}>add</button>
      <FatherCom></FatherCom>
    </ThemeContext.Provider>
  );
};

const FatherCom = () => {
  return (
    <div>
      fatercom
      <ChildCom></ChildCom>
      <Counter></Counter>
    </div>
  );
};

const ChildCom = () => {
  const theme = useContext(ThemeContext);

  return <div style={{ background: theme.background, color: theme.foreground }}>childcom</div>;
};

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

export default HookComponent;

/*
  为什么需要hooks语法
  - 组件之间复用状态逻辑，只能通过高阶组件，render props context, 相对不好用。
  - 复杂组件难以维护， 不相关的逻辑写在同一个方法中(componentDidMount)
  - 使用react, 需要理解class, this, props， state

  hooks使用规则
  - 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
  - 只能在 React 的函数组件或自定义hook中调用 Hook。不要在其他 JavaScript 函数中调用 Hook

  
  自定义hook应该是复用逻辑，而不是复用状态。
*/
