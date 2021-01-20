import React, { Component, Fragment } from 'react';
import { Provider, Consumer } from './context.jsx';

class SplitExplain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider value="dark">
        split page
        <ChildCom></ChildCom>
      </Provider>
    );
  }
}

function ChildCom() {
  return (
    <div>
      childcom
      <SubChildCom></SubChildCom>
    </div>
  );
}

function SubChildCom(props) {
  return (
    <Consumer>
      {(value) => (
        <div>
          subchildcom<h2>{value}</h2>
        </div>
      )}
    </Consumer>
  );
}

export default SplitExplain;
