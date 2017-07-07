/**
 * Created by xingyuji on 12/3/17.
 */
import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import FontIcon from "material-ui/FontIcon";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import {TableRowColumn} from "material-ui/Table";
import assign from "object-assign";
import SelectField from "material-ui/SelectField";
import Checkbox from 'material-ui/Checkbox';
import getMuiTheme from "material-ui/styles/getMuiTheme";

export class CustomIconBtn extends React.Component {
  render() {
    const styles = {
      button: {
        marginRight: '12px',
        marginTop: '1em',
        marginBottom: '1em',
        width: "35%"
      }
    };

    return (
      <MuiThemeProvider muiTheme={this.props.data.theme}>
        <RaisedButton
          href={this.props.data.url}
          // target="_blank"
          label={this.props.data.label}
          secondary
          style={styles.button}
          icon={<FontIcon className={this.props.data.icon}/>}
        />
      </MuiThemeProvider>
    );
  }
}

export class FacebookGmailLoginBtn extends React.Component {

  constructor(props) {
    super(props);
    this.muiThemes = {
      tpi_facebook: getMuiTheme({
        palette: {
          accent1Color: '#36486b'
        }
      }),
      tpi_gmail: getMuiTheme({
        palette: {
          accent1Color: '#f7786b'
        }
      })
    };
    this.customIconBtn = [
      {
        label: 'Facebook',
        icon: 'ion-social-facebook-outline',
        theme: this.muiThemes.tpi_facebook,
        url: 'https://www.facebook.com/login/'
      },
      {
        label: 'Gmail',
        icon: 'ion-ios-email-outline',
        theme: this.muiThemes.tpi_gmail,
        url: 'https://accounts.google.com/ServiceLogin'
      }
    ];
  }

  render() {
    let customBtns = [];
    this.customIconBtn.forEach(function (value, index) {
      customBtns.push(<CustomIconBtn data={value} key={index} ref={'CustomIconBtn' + index}/>);
    });
    return (
      <div style={{textAlign: 'center'}}>{customBtns}</div>
    );
  }
}

export class Separator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
      styles: {
        separator: {
          clear: 'both',
          width: '100%',
          height: '100%',
          borderBottom: props.line === 'none' ? '' : '1px solid',
          borderColor: typeof props.lineColor === 'undefined' ? '#A9A9A9' : props.lineColor,
          textAlign: 'center',
          marginTop: '0.5em',
          marginBottom: '0.5em',
          marginLeft: 'auto',
          marginRight: 'auto'
        },
        separatorContent: {
          color: '#A9A9A9',
          fontSize: props.fontSize,
          fontFamily: props.fontFamily,
          backgroundColor: '#fff',
          padding: 5,
          paddingTop: 'auto',
          paddingBottom: 'auto'
        }
      }

    };
  }

  render() {
    const {separator, separatorContent} = this.state.styles;
    return (
      <div style={assign(separator, this.props.style) }>
        <span style={assign(separatorContent, this.props.contentStyle)}>
          {this.props.content}
        </span>
      </div>
    );
  }
}

export class TableSelectField extends React.Component {

  render() {

    const styles = {
      cell: {
        // paddingBottom: 0,
        // paddingRight: 0,
        whiteSpace: 'normal',
        overflow: 'visible'
      },
      field: {
        width: '100%',
        height: '100%'
      },
      label: {
        // padding: 0,
        top: '50%',
        transform: 'translate(2px, -50%)'
      },
      icon: {
        top: '50%',
        transform: 'translate(0, -50%)'
      },
      underline: {
        display: 'none'
      },
      menu: {
        width: '100%'
      }
    };

    return (
      <TableRowColumn
        onClick={this.props.disabled ? this.props.onClick : () => {
        } }
        hoverable={this.props.hoverable}
        onHover={this.props.onHover}
        onHoverExit={this.props.onHoverExit}
        style={assign(styles.cell, this.props.style)}>
        <SelectField
          value={this.props.selectedItemId}
          style={styles.field}
          labelStyle={styles.label}
          iconStyle={styles.icon}
          underlineStyle={styles.underline}
          menuItemStyle={styles.menu}
          autoWidth={false}
          hintText={this.props.hintText}
          disabled={this.props.disabled}
          onChange={this.props.onChange}
        >
          {this.props.items}
        </SelectField>
      </TableRowColumn>
    )
  }
}

const styleColorEmployerGraduate = {
  graduateBtnColorClicked: '#00BCD4',
  graduateBtnColorUnClicked: '#80ced6',
  employerBtnColorClicked: '#f7786b',
  employerBtnColorUnClicked: '#f7cac9',
  defaultTextColor: '#fff'
};

const themeColors = {
  toolbarBackgroundColor: '#00DBF8',
  fontColor: '#DC4244',
  fontFadeColor: '#6C6C6C',
};

export {styleColorEmployerGraduate, themeColors};
