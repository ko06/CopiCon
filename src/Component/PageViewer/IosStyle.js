import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';


class IosStyle extends Component {

  render() {
    const { toggleIos,enableSingleIosBtn, availableSizes } = this.props;
    return (

      <div className="icon">
        <p>iOS - AppIcon</p>
        <div className="icon-size">
         <Button variant="outline-primary" id="all-apple-icon" onClick={() => this.props.enableAllIcon('iosApp')}  aria-pressed="false" autocomplete="off" disabled={toggleIos}>
            All
          </Button>
         <Button variant="outline-primary" enable={availableSizes.ios_3x_icon.selected.toString()}  id="ios_3x_icon" disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="180x180">3x
            <span>180 x 180</span>

          </Button>
         <Button variant="outline-primary" enable={availableSizes.ios_2x_icon.selected.toString()} id="ios_2x_icon"  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="120x120">2x
            <span>120 X 120</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.ipad_1x_icon.selected.toString()} id="ipad_1x_icon"  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="76x76"> iPad - 1x <span>76 x 76</span>
          </Button>

         <Button variant="outline-primary" enable={availableSizes.ipad_2x_icon.selected.toString()} id="ipad_2x_icon"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="152x152">iPad - 2x
            <span>152 x 152</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.ipadpro_2x_icon.selected.toString()} id="ipadpro_2x_icon"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="167x167">iPad Pro - 2x
            <span> 167 x 167</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.ios_store_icon.selected.toString()} id="ios_store_icon"
                  disabled={toggleIos}  onClick={(e) => {enableSingleIosBtn(e)}}value="1024x1024">App Store
            <span> 1024 x 1024</span>
          </Button>

        </div>

        <p>iOS - Splash <span>( P - Portrait &nbsp; L - Landscape )</span></p>
        <div className="icon-size">

         <Button variant="outline-primary"  id="all-apple-splash" onClick={() => this.props.enableAllIcon('iosSplash')}
                  aria-pressed="false" autocomplete="off" disabled={toggleIos}>
            All
          </Button>
         <Button variant="outline-primary" enable={availableSizes.iphonexp_splash.selected.toString()} id="iphonexp_splash"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="1125x2436">iPhone X P
            <span>1125 x 2436</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.iphone6plusp_splash.selected.toString()} id="iphone6plusp_splash"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="1242x2208">iPhone 6+ P
            <span>1242 x 2208</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.iphone6p_splash.selected.toString()} id="iphone6p_splash"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="750x1334"> iPhone 6 P
            <span>750 x 1334</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.iphone5p_splash.selected.toString()} id="iphone5p_splash"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="1136x5640"> iPhone 5 P
            <span>1136 x 5640</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.iphone4sp_splash.selected.toString()} id="iphone4sp_splash"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="640x960"> iPhone 4s P
            <span>640 x 960</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.ipad1p_splash.selected.toString()} id="ipad1p_splash"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="1536x2048"> iPad P
            <span>1536 x 2048</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.ipad2p_splash.selected.toString()} id="ipad2p_splash"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="768x1024"> iPad P
            <span>768 x 1024</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.ipadprop_splash.selected.toString()} id="ipadprop_splash"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="2732x2048">
            iPad Pro P
            <span>2048 x 2732</span>
          </Button>


         <Button variant="outline-primary" enable={availableSizes.iphonexl_splash.selected.toString()} id="iphonexl_splash"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="2436x1125">iPhone X L
            <span>2436 x 1125</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.iphone6plusl_splash.selected.toString()} id="iphone6plusl_splash"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="2208x1242">
            iPhone 6+ L
            <span>2208 x 1242</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.iphone6l_splash.selected.toString()} id="iphone6l_splash"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="1334x750">
            iPhone 6 L
            <span>1334 x 750</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.iphone5l_splash.selected.toString()} id="iphone5l_splash"
                  disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="5640x1136"> iPhone 5 L
            <span>5640 x 1136</span>
          </Button>
         <Button variant="outline-primary" enable={availableSizes.iphone4sl_splash.selected.toString()} id="iphone4sl_splash" onClick={(e) => {enableSingleIosBtn(e)}} aria-pressed="false" autocomplete="off"
                  disabled={toggleIos} value="960x640">
            iPhone 4s L
            <span>960 x 640</span>
          </Button>

         <Button variant="outline-primary" enable={availableSizes.ipad1l_splash.selected.toString()} onClick={(e) => {enableSingleIosBtn(e)}} id="ipad1l_splash"
                  disabled={toggleIos} value="2048x1536">
            iPad L
            <span>2048 x 1536</span>
          </Button>

         <Button variant="outline-primary" enable={availableSizes.ipad2l_splash.selected.toString()} id="ipad2l_splash" disabled={toggleIos} onClick={(e) => {enableSingleIosBtn(e)}} value="1024x768">
            iPad L
            <span>1024 x 768</span>
          </Button>

         <Button variant="outline-primary" enable={availableSizes.ipadprol_splash.selected.toString()} id="ipadprol_splash"
                 onClick={(e) => {enableSingleIosBtn(e)}} disabled={toggleIos}>
            iPad Pro L
            <span>2732 x 2048</span>
          </Button>
        </div>
      </div>
    )
  }
}

export default IosStyle;
