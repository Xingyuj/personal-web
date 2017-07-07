/**
 * Created by xingyuji on 22/4/17.
 */
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Radium from 'radium';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import {themeColors} from './commons';

injectTapEventPlugin();

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  render() {
    const {fontFadeColor} = themeColors;
    return (
      <MuiThemeProvider>
        <Toolbar style={{backgroundColor: '#CAFEEE'}}>
          <ToolbarGroup firstChild >
            <FlatButton
              label="XingyuJi's"
              labelStyle={{color: fontFadeColor, fontSize: 20, textTransform: ''}}
              onClick={() => this.props.history.push('/')}
            />
            <ToolbarSeparator />
              <a href="https://github.com/Xingyuj" target="_black">
                <FlatButton label="GitHub" labelStyle={{color: fontFadeColor}}/>
              </a>
              <a href="https://www.linkedin.com/in/xingyu-ji-382748122/" target="_black">
                <FlatButton label="LinkedIn" labelStyle={{color: fontFadeColor}}/>
              </a>
          </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {};

export default Radium(AppComponent);
