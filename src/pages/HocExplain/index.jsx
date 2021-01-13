import React, { Component } from 'react';

class HocExplain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'hoc component'
    };
  }

  componentDidMount() {
    console.log('component cdm');
  }

  handleName = (name) => {
    this.setState({ name });
  };

  render() {
    console.log('component render', this.props);
    return <div>hoc page {this.props.value}</div>;
  }
}

function HOC(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log('hoc cdm');
    }
    render() {
      console.log('hoc render');
      const newProps = {
        isLogin: true,
        history: {}
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}

function HocExtends(WrappedComponent) {
  return class extends WrappedComponent {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      console.log('hoc extends cdm', this);
      super.componentDidMount();
    }

    // render() {
    //   return super.render();
    // }
    render() {
      const elementsTree = super.render();
      let newProps;
      if (elementsTree && elementsTree.type === 'div') {
        newProps = { value: 'may the force be with you' };
      }
      const props = Object.assign({}, elementsTree.props, newProps);
      const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children);
      return newElementsTree;
    }
  };
}

export default HocExtends(HocExplain);
// https://github.com/lznbuild/my-blog/issues/23
