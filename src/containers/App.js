/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from '../components/HomePage';
import NavigationBar from '../components/NavigationBar';
import {systemInput} from '../actions/systemActions';

function NBWrapper(props) {
  return (
    <div>
      <NavigationBar {...props}/>
      {React.cloneElement(props.children, {...props})}
    </div>
  );
}
NBWrapper.propTypes = {
  children: PropTypes.node
};

/* Populated by react-webpack-redux:reducer */
class App extends Component {

  render() {
    // const {actions} = this.props;
    const NoMatch = ({ location }) => (
      <NBWrapper>
        <h3>No match for <code>{location.pathname}</code></h3>
      </NBWrapper>
    );

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={
              routeProps =>
                <NBWrapper {...this.props} {...routeProps}><HomePage/></NBWrapper>
            }
          />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */

function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  return {};
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {systemInput};
  return {actions: bindActionCreators(actions, dispatch)};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
