/**
 * Created by xingyuji on 22/4/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class CountDownTimer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: props.secondsRemaining ? props.secondsRemaining : 0
    };
    this.handleTimesUp = props.timesUpCall;
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
      this.handleTimesUp();
    }
  }

  show() {
    const secondsRemaining = this.state.secondsRemaining;
    const minutes = Math.floor(secondsRemaining / 60);
    return minutes ? `${minutes}min ${secondsRemaining % 60}s` : `${secondsRemaining}s`;
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>Time Remaining: {this.show()}</div>
    );
  }
}

CountDownTimer.propTypes = {
  secondsRemaining: PropTypes.number,
  timesUpCall: PropTypes.func,
};
