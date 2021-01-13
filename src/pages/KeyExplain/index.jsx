import React, { Component } from 'react';

class KeyExplain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          title: '我是id1'
        },
        {
          id: 2,
          title: '我是id2'
        },
        {
          id: 3,
          title: '我是id3'
        },
        {
          id: 4,
          title: '我是id4'
        }
      ]
    };
  }

  deleteCurrentItem = (item) => {
    this.setState({
      list: this.state.list.filter((param) => param.id !== item.id)
    });
  };

  reverseList = () => {
    this.setState({
      list: this.state.list.reverse()
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={item.id}>
                {item.title} -- index{index}
                <input type="text" />
                <button onClick={() => this.deleteCurrentItem(item)}>删除</button>
              </li>
            );
          })}
        </ul>
        <button onClick={this.reverseList}>反转</button>
      </div>
    );
  }
}

export default KeyExplain;
