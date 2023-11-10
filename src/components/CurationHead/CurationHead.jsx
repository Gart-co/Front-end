// 在React组件中根据状态或属性来添加类名
import React, { Component } from 'react';
import { CurationHeadItem } from '../CurationHeadItem/CurationHeadItem';

export class CurationRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedIndex: -1,
    };
  }

  handleImageExpand = (index) => {
    this.setState({ expandedIndex: index });
  }

  handleImageCollapse = () => {
    this.setState({ expandedIndex: -1 });
  }

  render() {
    const { images } = this.props;
    const { expandedIndex } = this.state;

    return (
      <div style={{position:'relative', display:'flex', flexDirection:'row', width:1370, }}>
        {images.map((image, index) => (
          <CurationHeadItem image={{image}} index={{index}}/>
        ))}
      </div>
    );
  }
}

