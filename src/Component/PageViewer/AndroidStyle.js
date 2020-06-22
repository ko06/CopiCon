import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

class AndroidStyle extends Component {

  render() {
    const { toggleAndroid,availableSizes } = this.props;
    return (
      <div>

        <p>Android - AppIcon</p>
        <div className="icon-size">
          <Button variant="outline-primary" id="all-android-icon" onClick = {()=>this.props.enableAllIcon('androidApp')}
                  aria-pressed="false" autocomplete="off"  disabled={toggleAndroid}>
            All
          </Button>
          <Button variant="outline-primary" enable={availableSizes.android_idpi_icon.selected.toString()} id="android_idpi_icon"
                   value="36x36" disabled={toggleAndroid}> ldpi <span>36 x 36</span>
          </Button>
          <Button variant="outline-primary" enable={availableSizes.android_mdpi_icon.selected.toString()} id="android_mdpi_icon"
                  value="48x48" disabled={toggleAndroid}>mdpi <span>48 x 48</span>
          </Button>
          <Button variant="outline-primary" enable={availableSizes.android_xhdpi_icon.selected.toString()} id="android_xhdpi_icon"
                   value="96x96" disabled={toggleAndroid}>xhdpi <span>96 x 96</span>
          </Button>

          <Button variant="outline-primary" enable={availableSizes.android_xxhdpi_icon.selected.toString()} id="android_xxhdpi_icon"
                   value="144x144"
                  disabled={toggleAndroid}>xxhdpi <span>144 x 144</span>
          </Button>
          <Button variant="outline-primary" enable={availableSizes.android_xxxhdpi_icon.selected.toString()} id="android_xxxhdpi_icon"
                   value="192x192"
                  disabled={toggleAndroid}>xxxhdpi <span>192 x 192</span>
          </Button>

        </div>

        <p>Android - Splash <span> ( P - Portrait &nbsp; L - Landscape )</span></p>
        <div className="icon-size">
          <Button variant="outline-primary" id="all-android-splash"
                  onClick = {() => this.props.enableAllIcon('androidSplash')}  aria-pressed="false" autocomplete="off"  disabled={toggleAndroid}>
            All
          </Button>
          <Button variant="outline-primary" enable={availableSizes.android_xlargep_splash.selected.toString()} id="android_xlargep_splash"
                  autocomplete="off"  value="720x960" disabled={toggleAndroid}> xlarge
            P <span>720dp x 960dp</span>
          </Button>
          <Button variant="outline-primary" enable={availableSizes.android_largerp_splash.selected.toString()} id="android_largerp_splash"
                  autocomplete="off"  value="480x640" disabled={toggleAndroid}>larger
            P <span>480dp x 640dp</span>
          </Button>
          <Button variant="outline-primary" enable={availableSizes.android_normalp_splash.selected.toString()} id="android_normalp_splash"
                  autocomplete="off"  value="320x470" disabled={toggleAndroid}>normal
            P <span>320dp x 470dp</span>
          </Button>
          <Button variant="outline-primary" enable={availableSizes.android_smallp_splash.selected.toString()} id="android_smallp_splash"
                 autocomplete="off"  value="320x426" disabled={toggleAndroid}>small
            P <span>320dp x 426dp</span>
          </Button>

          <Button variant="outline-primary" enable={availableSizes.android_xlargel_splash.selected.toString()} id="android_xlargel_splash"
                  autocomplete="off"  value="960x720" disabled={toggleAndroid}> xlarge
            L <span>960dp x 720dp</span>
          </Button>
          <Button variant="outline-primary" enable={availableSizes.android_largerl_splash.selected.toString()} id="android_largerl_splash"
                  autocomplete="off"  value="640x480" disabled={toggleAndroid}>larger
            L <span>640dp x 480dp</span>
          </Button>
          <Button variant="outline-primary" enable={availableSizes.android_normall_splash.selected.toString()} id="android_normall_splash"
                  autocomplete="off"  value="470x320" disabled={toggleAndroid}>normal
            L <span>470dp x 320dp</span></Button>
          <Button variant="outline-primary" enable={availableSizes.android_smalll_splash.selected.toString()} id="android_smalll_splash"
                   value="426x320" disabled={toggleAndroid}>small
            L <span>426dp x 320dp</span>
          </Button>

        </div>
      </div>
      
    )
  }
}

export default AndroidStyle;
