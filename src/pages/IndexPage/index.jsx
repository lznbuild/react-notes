import React, { Component, PureComponent } from 'react';
import icon from 'public/imgs/icon.png';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'hello world',
      content: '<style>body{color: red;}</style>',
      number: 0,
      onOff: false,
      list: [1, 2, 3, 4]
    };
  }

  handleAddNumber = () => {
    this.setState({ number: this.state.number + 1 });
  };

  handleOnOff = () => {
    this.setState({ onOff: !this.state.onOff });
  };

  render() {
    const { name, content, number, onOff, list } = this.state;
    return (
      <div>
        {name}
        <img src={icon} alt="" width="100" />

        <p dangerouslySetInnerHTML={{ __html: content }}></p>

        {React.createElement('h1', { className: 'title' }, '标题')}

        <div>{number}</div>

        <div>{onOff ? '开' : '关'}</div>

        <button onClick={this.handleAddNumber}>number by setState</button>
        <button onClick={this.handleOnOff}>toggle onOff</button>
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ChildrenCom name={name}>
          <div id="testDom">测试text</div>
        </ChildrenCom>
      </div>
    );
  }
}

class ChildrenCom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.children, 'vdom');
  }

  render() {
    console.log('children 执行');
    const { name } = this.props;
    return <div>children-{name}</div>;
  }
}

export default IndexPage;

// 不能直接修改props的属性, 单向数据流， 自上而下
// state的值不能直接修改

// 频繁创建函数？？？？
// https://www.zhihu.com/question/345689944

// 看自己的blog 掘金的收藏  学习链接中的内容
// class this
