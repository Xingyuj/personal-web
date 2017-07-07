/**
 * Created by xingyuji on 22/4/17.
 */
import React from 'react';
import IconUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import IconButton from 'material-ui/IconButton';

class ScrollTopButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
      hoverChild: false
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    const intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({intervalId});
  }

  render() {
    return (
      <IconButton
        style={{
          padding: 0,
          border: '2px solid #fff',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        hoveredStyle={{backgroundColor: '#fff'}}
        iconStyle={{
          minWidth: 30,
          minHeight: 30,
        }}
        disableTouchRipple
        onMouseOver={() => this.setState({hoverChild: true})}
        onMouseOut={() => this.setState({hoverChild: false})}
        onClick={() => this.scrollToTop()}
      >
        <IconUp
          color={this.state.hoverChild ? '#000' : '#fff'}
        />
      </IconButton>
    );
  }
}

export default ScrollTopButton;
