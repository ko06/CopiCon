import React, {Component} from 'react';
import Holder from 'holderjs';
import $ from "jquery";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontName: this.props.fontName ? this.props.fontName : "Helvetica",
    }
  }
  updatePreview = () => {
    const {appName, fontName } = this.props;
    // let fontName = this.props.fontName ? this.props.fontName : "Helvetica";
    let fontWeight = "normal";
    let backgroundColor = this.props.color;
    let foregroundColor = "#fff";

    let iconHeight = 160;
    let iconWidth = 160;
    let splashHeight = 480;
    let splashWidth = 320;
    /* Icon prview */
    var dataSource = "holder.js/" + iconHeight + "x" + iconWidth + "?theme=simple&text=" + appName;
    var image = $("<img>").attr({
      "data-src": dataSource,
      "id": "app_icon_preview",
      'style': 'marginBottom: 5px'
    });

    Holder.run({
      themes: {
        "simple": {
          bg: backgroundColor,
          fg: foregroundColor,
          font: fontName,
          fontweight: fontWeight,
        }
      },
      images: image[0]
    });

    $("#app_icon_preview").replaceWith(image);

    /* Splash preview */
    var splashDataSource = "holder.js/" + splashWidth + "x" + splashHeight + "?theme=simple&text=" + appName + "&font=" + (fontName ? fontName : "Helvetica");
    var splashImage = $("<img>").attr({
      "data-src": splashDataSource,
      "id": "app_splash_preview"
    })

    Holder.run({
      themes: {
        "simple": {
          bg: backgroundColor,
          fg: foregroundColor,
          font: fontName,
          fontweight: fontWeight,
        }
      },
      images: splashImage[0]
    });

    $("#app_splash_preview").replaceWith(splashImage);

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.fontName !== this.props.fontName) {
      this.setState({fontName: this.props.fontName})
    }
    this.updatePreview();
  }

  render() {
    const { fontName } = this.props;
    return (
      <div className={'preview-layout'}>
        <h3>Preview</h3>
        <img data-src={`holder.js/160x160?theme=simple&text=App name&font=${fontName}`} id="app_icon_preview"
             alt="App name [160x160]" style={{width: '160px', height: '160px', marginBottom: '6px'}}
             src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22160%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20160%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_172b1f6d849%20text%20%7B%20fill%3A%2300AEEF%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_172b1f6d849%22%3E%3Crect%20width%3D%22160%22%20height%3D%22160%22%20fill%3D%22%23fff%22%3E%3C%2Frect%3E%3Cpath%20d%3D%22M%201%201%20H%20159%20V%20159%20H%201%20V%200%20M%200%200%20L%200%200%20M%200%200%20L%200%200%22%20stroke-width%3D%222%22%20stroke%3D%22%23e6e6e6%22%20fill%3D%22none%22%3E%3C%2Fpath%3E%3Cg%3E%3Ctext%20x%3D%2249.609375%22%20y%3D%2284.5%22%3EApp%20name%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
             data-holder-rendered="true"/>
        <img data-src={`holder.js/320x480?theme=simple&text=App name&font=${fontName}`} id="app_splash_preview"
             alt="App name [320x480]" style={{width: '320px', height: '480px'}}
             src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22480%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20480%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_172b1f6d854%20text%20%7B%20fill%3A%2300AEEF%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A24pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_172b1f6d854%22%3E%3Crect%20width%3D%22320%22%20height%3D%22480%22%20fill%3D%22%23fff%22%3E%3C%2Frect%3E%3Cpath%20d%3D%22M%201%201%20H%20319%20V%20479%20H%201%20V%200%20M%200%200%20L%200%200%20M%200%200%20L%200%200%22%20stroke-width%3D%222%22%20stroke%3D%22%23e6e6e6%22%20fill%3D%22none%22%3E%3C%2Fpath%3E%3Cg%3E%3Ctext%20x%3D%2287.0625%22%20y%3D%22251.1%22%3EApp%20name%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
             data-holder-rendered="true"/>
      </div>
    )
  }
}

export default Preview;
