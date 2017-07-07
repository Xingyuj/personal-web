/**
 * Created by xingyuji on 2/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';

export default class FakeLoadingIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pretendDataLoaded: false,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.handlePretendDataLoading.bind(this), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handlePretendDataLoading() {
    this.setState({pretendDataLoaded: true});
    clearInterval(this.interval);
  }

  render() {
    const {pretendDataLoaded} = this.state;
    let content = null;
    if (pretendDataLoaded) {
      content = this.props.children;
    } else {
      content = (<div style={{textAlign: 'center'}}>
        <CircularProgress size={80} thickness={7}/>
      </div>);
    }
    return (<div>{content}</div>);
  }
}

FakeLoadingIndicator.propTypes = {
  children: PropTypes.node,
};
