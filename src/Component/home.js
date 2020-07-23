import React, {Component} from 'react';
import IosStyle from './PageViewer/IosStyle';
import AndroidStyle from './PageViewer/AndroidStyle';
import AppInfo from './PageViewer/AppInfo';
import Preview from './PageViewer/Preview';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import $ from "jquery";
import {Button} from "react-bootstrap";
import {download} from '../helper'

let availableSizes = {
  ios_3x_icon: {
    height: 180,
    width: 180,
    size: 17,
    selected: false
  },
  ios_2x_icon: {
    height: 120,
    width: 120,
    size: 12,
    selected: false
  },
  ipad_1x_icon: {
    height: 76,
    width: 76,
    size: 7,
    selected: false
  },
  ipad_2x_icon: {
    height: 152,
    width: 152,
    size: 15,
    selected: false
  },
  ipadpro_2x_icon: {
    height: 167,
    width: 167,
    size: 16,
    selected: false
  },
  ios_store_icon: {
    height: 1024,
    width: 1024,
    size: 60,
    selected: false
  },
  iphonexp_splash: {
    height: 1125,
    width: 2436,
    size: 60,
    selected: false
  },
  iphone6plusp_splash: {
    height: 1242,
    width: 2208,
    size: 60,
    selected: false
  },
  iphone6p_splash: {
    height: 750,
    width: 1334,
    size: 36,
    selected: false
  },
  iphone5p_splash: {
    height: 1136,
    width: 640,
    size: 31,
    selected: false
  },
  iphone4sp_splash: {
    height: 640,
    width: 960,
    size: 31,
    selected: false
  },
  ipad1p_splash: {
    height: 1536,
    width: 2048,
    size: 37,
    selected: false
  },
  ipad2p_splash: {
    height: 768,
    width: 1024,
    size: 74,
    selected: false
  },
  ipadprop_splash: {
    height: 2048,
    width: 2732,
    size: 99,
    selected: false
  },
  iphonexl_splash: {
    height: 2436,
    width: 1125,
    size: 60,
    selected: false
  },
  iphone6plusl_splash: {
    height: 2208,
    width: 1242,
    size: 60,
    selected: false
  },
  iphone6l_splash: {
    height: 1334,
    width: 750,
    size: 36,
    selected: false
  },
  iphone5l_splash: {
    height: 640,
    width: 1136,
    size: 31,
    selected: false
  },
  iphone4sl_splash: {
    height: 960,
    width: 640,
    size: 31,
    selected: false
  },
  ipad1l_splash: {
    height: 2048,
    width: 1536,
    size: 37,
    selected: false
  },
  ipad2l_splash: {
    height: 1024,
    width: 768,
    size: 74,
    selected: false
  },
  ipadprol_splash: {
    height: 2732,
    width: 2048,
    size: 99,
    selected: false
  },
  android_idpi_icon: {
    height: 36,
    width: 36,
    size: 3,
    selected: false
  },
  android_mdpi_icon: {
    height: 48,
    width: 48,
    size: 5,
    selected: false
  },
  android_xhdpi_icon: {
    height: 96,
    width: 96,
    size: 9,
    selected: false
  },
  android_xxhdpi_icon: {
    height: 144,
    width: 144,
    size: 14,
    selected: false
  },
  android_xxxhdpi_icon: {
    height: 192,
    width: 192,
    size: 19,
    selected: false
  },
  android_xlargep_splash: {
    height: 720,
    width: 960,
    size: 35,
    selected: false
  },
  android_largerp_splash: {
    height: 480,
    width: 640,
    size: 23,
    selected: false
  },
  android_normalp_splash: {
    height: 320,
    width: 470,
    size: 15,
    selected: false
  },
  android_smallp_splash: {
    height: 320,
    width: 426,
    size: 15,
    selected: false
  },
  android_xlargel_splash: {
    height: 960,
    width: 720,
    size: 35,
    selected: false
  },
  android_largerl_splash: {
    height: 640,
    width: 480,
    size: 23,
    selected: false
  },
  android_normall_splash: {
    height: 470,
    width: 320,
    size: 15,
    selected: false
  },
  android_smalll_splash: {
    height: 426,
    width: 320,
    size: 15,
    selected: false
  }
};
let iOSIcons = ["ios_3x_icon", "ios_2x_icon", "ipad_1x_icon", "ipad_2x_icon", "ipadpro_2x_icon", "ios_store_icon"];
let iOSSplash = ["iphonexp_splash", "iphone6plusp_splash", "iphone6p_splash", "iphone5p_splash", "iphone4sp_splash", "ipad1p_splash", "ipad2p_splash", "ipadprop_splash", "iphonexl_splash", "iphone6plusl_splash", "iphone6l_splash", "iphone5l_splash", "iphone4sl_splash", "ipad1l_splash", "ipad2l_splash", "ipadprol_splash"];
let androidIcons = ["android_idpi_icon", "android_mdpi_icon", "android_xhdpi_icon", "android_xxhdpi_icon", "android_xxxhdpi_icon"];
let androidSplash = ["android_xlargep_splash", "android_largerp_splash", "android_normalp_splash", "android_smallp_splash", "android_xlargel_splash", "android_largerl_splash", "android_normall_splash", "android_smalll_splash"];


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleAndroid: true,
      toggleIos: true,
      appName: 'App Name',
      iosSplash: true,
      iosApp: true,
      androidSplash: true,
      androidApp: true,
      color: '#ff7714',
      fontName: 'Helvetica',
      stylePath: 'https://fonts.googleapis.com/css2?family=',
    }
  }

  enableSingleIosBtn = (e) => {
    if(e.target.id === '') {
      availableSizes[e.target.parentElement.id].selected = !availableSizes[e.target.parentElement.id].selected
    } else {
     availableSizes[e.target.id].selected = !availableSizes[e.target.id].selected
    }
    this.forceUpdate()
  }
  
  isAllSelected = (keys, toggle) => {
    for (let key in availableSizes) {
      let found = $.inArray(key, keys) > -1;
      if(!toggle) {
        if (found && availableSizes[key].selected === false) {
          availableSizes[key].selected = true;
        }
      } else {
        if (found && availableSizes[key].selected === true) {
          availableSizes[key].selected = false;
        }
      }
    }
    this.forceUpdate();
  }

  appleButtonClicked = () => {
    this.setState({toggleIos: !this.state.toggleIos,iosSplash: false,iosApp: false}, () => {
      this.isAllSelected(iOSIcons, this.state.iosApp);
      this.isAllSelected(iOSSplash, this.state.iosSplash);
      this.forceUpdate();
    })
  }

  androidButtonClicked = () => {
    this.setState({toggleAndroid: !this.state.toggleAndroid,androidApp: false,androidSplash: false}, () => {
      this.isAllSelected(androidIcons, this.state.androidApp);
      this.isAllSelected(androidSplash, this.state.androidSplash);
      this.forceUpdate();
    })
  }

  enableAllIcon= (name) => {
    if(name === 'androidSplash') {
      this.setState({androidSplash: !this.state.androidSplash}, ()=> {
        this.isAllSelected(androidSplash, this.state.androidSplash)
        this.forceUpdate();
    })
    }
    else if (name === 'androidApp') {
      this.setState({androidApp: !this.state.androidApp}, ()=> {
        this.isAllSelected(androidIcons, this.state.androidApp)
        this.forceUpdate();
      })
    }
    else if (name === 'iosSplash') {
      this.setState({iosSplash: !this.state.iosSplash}, ()=> {
        this.isAllSelected(iOSSplash, this.state.iosSplash)
        this.forceUpdate();
      })
    }
    else if (name === 'iosApp') {
      this.setState({iosApp: !this.state.iosApp},()=> {
        this.isAllSelected(iOSIcons,this.state.iosApp)
        this.forceUpdate();
      })
    }
  }

  downloadBtnClicked =()=> {
    download(availableSizes, this.state.color, this.state.appName, this.state.fontName);
  }

  handleChangeComplete= (color) => {
    this.setState({
      color: color.hex,
    })
  }

  appNameChange = (e) => {
    this.setState({
      appName: e.target.value,
    })
  }
  appFontNameChange = value => {
    this.setState({ fontName: value });
  }

  render() {
    const {
      toggleAndroid,
      toggleIos,
      appName,
      iosSplash,
      iosApp,
      androidApp,
      androidSplash,
      color,
      fontName,
        stylePath,
    } = this.state;
    return (
      <Container>
        <link rel="stylesheet" type="text/css" href={stylePath+fontName} />
        <div className="header">
          <h2>CopiCon</h2>
          <h4>Sample Appicon &amp; Splash for mobile</h4>
        </div>
        <Row className={'main-layout'}>
          <Col sm={8} className={'editor-layout'}>
            <AppInfo handleChangeComplete={this.handleChangeComplete} appNameChange={this.appNameChange} appleButtonClicked={this.appleButtonClicked} androidButtonClicked={this.androidButtonClicked} appFontNameChange={this.appFontNameChange}/>
            <IosStyle availableSizes={availableSizes} enableSingleIosBtn ={this.enableSingleIosBtn} iosApp={iosApp} iosSplash={iosSplash} toggleIos={toggleIos} enableAllIcon={this.enableAllIcon}/>
            <AndroidStyle availableSizes={availableSizes} androidApp={androidApp} androidSplash={androidSplash} enableAllIcon={this.enableAllIcon} toggleAndroid={toggleAndroid}/>
            <Button onClick={this.downloadBtnClicked}> download</Button>
          </Col>
          <Col sm={4}><Preview  color={color} appName={appName} fontName={fontName}/> </Col>
        </Row>
      </Container>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    debugger;
    if(prevState.fontName !== this.state.fontName) {
      let head = document.head;
      let link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = this.state.stylePath + this.state.fontName + ':wght@500&display=swap';
      head.appendChild(link);
    }
  }
}

export default Home;
