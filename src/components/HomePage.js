/**
 * Created by xingyuji on 30/5/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {themeColors} from './commons';
import ScrollTopButton from './utilities/ScrollTopButton';

export default class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.style = {
      triggerBtnGraduate: {
        // position: 'absolute',
        // top: '15%',
        // left: '5%',
        margin: '5em 0 0 15em',
        width: '250px',
      },
      triggerBtnEmployer: {
        // position: 'absolute',
        // top: '30%',
        // left: '5%',
        margin: '5em 0 5em 15em',
        width: '250px',
      },
      topSection: {
        minHeight: '30em',
        backgroundImage: 'url(../images/moving-castle01.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      middleSection: {
        position: 'relative',
        paddingTop: '1em',
        minHeight: '25em',
        // backgroundImage: 'url(../images/xx.png)',
        backgroundColor: '#fff',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        textAlign: 'center',
      },
      partnerSection: {
        minHeight: '30em',
        paddingTop: '3em',
        // backgroundImage: 'url(../images/xx.png)',
        backgroundColor: '#ECF3F6',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        textAlign: 'center',
      },
      bottomSection: {
        position: 'relative',
        minHeight: '10em',
        backgroundColor: '#333436',
        // backgroundImage: 'url(../images/homepage/xx.png)',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      },
    };
    this.muiTheme = getMuiTheme({
      fontFamily: 'Calibri'
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div style={{fontFamily: 'Calibri'}}>
          <div style={this.style.topSection}>
            <div style={{textAlign: 'center'}}>
              <p>
                <span style={{color: '#EEE', fontSize: 60}}>Xingyu JI</span>
                <span style={{color: '#f55', fontSize: 60}}>'s</span>
              </p>
              <p style={{color: '#E1E1E1', fontSize: 20}}>
                A highly self-motivated graduate with a Master of Engineering (Software).
              </p>
            </div>
          </div>
          <div style={this.style.middleSection}>
            <p style={{margin: '1em auto 1em auto', fontSize: 25, color: '#555'}}>Education & Employment History</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
              }}
            >
              <div>
                <img
                  src="/images/unimelb01.jpg" alt="ooops!"
                  style={{maxWidth: '100%', height: '12em'}}/>
                <div>
                  <p style={{margin: '1em', color: themeColors.fontFadeColor, fontSize: 15}}>March 2014 - Aug 2016 </p>
                  <p> Master of Engineering (Software)</p>
                </div>
              </div>
              <div>
                <img
                  src="/images/travelsky01.jpg" alt="ooops!"
                  style={{maxWidth: '100%', width: '12em'}}/>
                <div>
                  <p style={{margin: '1em', color: themeColors.fontFadeColor, fontSize: 15}}>July 2012 - Sept 2013</p>
                  <p> Travelsky Holding Company Shanghai Branch </p>
                </div>
              </div>
            </div>
          </div>
          <div style={this.style.partnerSection}>
            <p style={{textAlign: 'center', fontSize: 30, marginBottom: '2em'}}>Technical Skills</p>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
              <div name="j2ee" style={{maxWidth: '220px'}}>
                <a href="https://github.com/Xingyuj/AustralianTwitterAnalytics" target="_blank"
                   rel="noreferrer noopener">
                  <img
                    src="/images/j2ee01.png" alt="ooops!"
                    style={{maxWidth: '100%', maxHeight: '100%', cursor: 'pointer'}}/>
                </a>
              </div>
              <div name="ror" style={{maxWidth: '220px'}}>
                <a href="https://github.com/Xingyuj/STEAM" target="_blank" rel="noreferrer noopener">
                  <img
                    src="/images/ror01.jpg" alt="ooops!"
                    style={{maxWidth: '100%', maxHeight: '100%', cursor: 'pointer'}}/>
                </a>
              </div>
              <div name="react" style={{maxWidth: '220px'}}>
                <a href="/" target="_blank" rel="noreferrer noopener">
                  <img
                    src="/images/react01.png" alt="ooops!"
                    style={{maxWidth: '100%', maxHeight: '100%', cursor: 'pointer'}}/>
                </a>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '3em', alignItems: 'center'}}>
              <div name="node" style={{width: '220px'}}>
                <a href="https://github.com/Xingyuj/IASurveySystem" target="_blank" rel="noreferrer noopener">
                  <img
                    src="/images/nodejs01.png" alt="ooops!"
                    style={{maxWidth: '100%', maxHeight: '100%', cursor: 'pointer'}}/>
                </a>
              </div>
              <div name="golang" style={{maxWidth: '220px'}}>
                <a href="https://github.com/Xingyuj/restful_openapi_demo" target="_blank" rel="noreferrer noopener">
                  <img
                    src="/images/golang01.png" alt="ooops!"
                    style={{maxWidth: '100%', maxHeight: '100%', cursor: 'pointer'}}/>
                </a>
              </div>
              <div name="swift" style={{maxWidth: '220px'}}>
                <a href="https://github.com/Xingyuj/Agar.io-NewWorld" target="_blank" rel="noreferrer noopener">
                  <img
                    src="/images/swift01.png" alt="ooops!"
                    style={{maxWidth: '100%', maxHeight: '100%', cursor: 'pointer'}}/>
                </a>
              </div>
            </div>
          </div>
          <div style={this.style.bottomSection}>
            <div
              style={{
                padding: '1em',
                fontSize: 20,
                color: '#C9C9C9',
                maxWidth: '80vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderBottom: '2px solid #999',
                display: 'flex',
              }}
            >
              <p>XingyuJi's</p>
              <FontIcon
                color="#C9C9C9"
                hoverColor="#00A0F1"
                className="ion-social-twitter"
                style={{
                  cursor: 'pointer',
                  marginLeft: '5em'
                }}
              />
              <FontIcon
                color="#C9C9C9"
                hoverColor="#355599"
                className="ion-social-facebook"
                style={{
                  cursor: 'pointer',
                  marginLeft: '2em'
                }}
              />
              <FontIcon
                color="#C9C9C9"
                hoverColor="#0076B6"
                className="ion-social-linkedin"
                style={{
                  cursor: 'pointer',
                  marginLeft: '2em'
                }}
              />
            </div>
            <div
              style={{
                padding: '1em',
                fontSize: 15,
                display: 'flex',
                maxWidth: '80vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderBottom: '2px solid #999',
              }}
            >
              <div
                style={{
                  color: '#C9C9C9',
                  flex: 9
                }}
              >
                <p style={{fontSize: 18}}>You can reach me at:</p>
                <p><span>Email: endorathas@gmail.com</span></p>
              </div>
              <div
                style={{
                  color: '#C9C9C9',
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
              >
                <ScrollTopButton scrollStepInPx="50" delayInMs="16.66"/>
              </div>
            </div>
            <div
              style={{
                padding: '1em',
                maxWidth: '80vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                color: '#9c9c9c',
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              XingyuJi©2017
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
