import React, { Component } from 'react';

export class CurationHeadItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOriginal: false,
      isHovered: false,
    };
  }

  handleImageExpand = () => {
    this.setState((prevState) => ({
      isOriginal: !prevState.isOriginal,
    }));
  }

  handleMouseEnter = () => {
    this.setState({
      isHovered: true,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      isHovered: false,
    });
  }

  render() {
    const { imageUrl, index } = this.props;
    const { isOriginal, isHovered } = this.state;
    const {image} = this.props.image;

    return (
      <div
        style={
          
          isOriginal ? {
          border: '2px white solid',
          position: 'relative',
          display: 'inline-block',
          flex: '0 0 auto',
        }
      :{
        position: 'relative',
        display: 'inline-block',
        flex: '1 1 auto',
      }
      }
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {isHovered && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '2%',
              width: '92%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button
              className="expand-button"
              onClick={this.handleImageExpand}
              style={{ color: 'white' }}
            >
              {isOriginal ? 'Dynamic Aspect Ratio' : 'Original Aspect Ratio'}
            </button>
          </div>
        )}
        <img
          src={image} // 图像的URL
          alt={`Image ${index}`} // 请确保设置合适的alt文本
          className="image"
          data-index={index}
          style={{padding:"0 2% 0 2%",width:"96%", height: 400, margin: 0 }}
        />
      </div>
    );
  }
}




