import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Button from "react-bootstrap/Button";
import {SketchPicker} from 'react-color';
import reactCSS from 'reactcss';
import axios from 'axios';



class AppInfo extends Component {
  state = {
    displayColorPicker: false,
    fontFamily: [],
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({displayColorPicker: !this.state.displayColorPicker})
  };

  handleClose = () => {
    this.setState({displayColorPicker: false})
  };

  handleChange = (color) => {
    this.setState({color: color.rgb})
    this.props.handleChangeComplete(color)
  };

  handleChangeFont = event => {
    debugger;
    this.props.appFontNameChange(this.inputEl.value);
  }
  componentDidMount() {
    axios.get('https://www.googleapis.com/webfonts/v1/webfonts?sort=TRENDING&key=AIzaSyC8O1ufZSOGZuRTmlxhDEMrUXQNPRuTDT4')
        .then(response => {
          console.log(response.data.items);
          this.setState({fontFamily: response.data.items.map(font => font.family)});
        })
        .catch(error => console.log(error));
  }

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          height: '33px',
          borderRadius: '.25rem',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    const {androidButtonClicked, appleButtonClicked, appNameChange, appFontNameChange} = this.props, { fontFamily } = this.state;
    debugger;
    let options;
    if (fontFamily.length) {
      options = fontFamily.map((font,index) => {
        console.log(font);
        return <option value={font} key={index}>{font}</option>
      })
    }
    return (
      <div>
        <div className="heading">
          <div className="number-circle">
            <h3>App name</h3>
            <span>1</span>
          </div>
          <Form.Group>
            <Form.Control type="text" onChange={(e) => appNameChange(e)} placeholder="App name"/>
          </Form.Group>
        </div>

        <div className="heading">
          <div className="number-circle">
            <h3>Choose Font</h3>
            <span>2</span>
          </div>
          <div>
            <Form.Group>
              <Form.Control
                  as="select"
                  placeholder={"Select Font"}
                  onChange={event=>appFontNameChange(event.target.value)}
              >
                {options}
              </Form.Control>
            </Form.Group>
          </div>
        </div>

        <div className="heading">
          <div className="number-circle">
            <h3>Choose color</h3>
            <span>3</span>
          </div>
          <div>
            <div style={styles.swatch} onClick={this.handleClick}>
              <div style={styles.color}/>
            </div>
            {this.state.displayColorPicker ? <div style={styles.popover}>
              <div style={styles.cover} onClick={this.handleClose}/>
              <SketchPicker color={this.state.color} onChange={this.handleChange}/>
            </div> : null}

          </div>
        </div>

        <div className="heading">
          <div className="number-circle">
            <h3>Choose Platform</h3>
            <span>4</span>
          </div>
        </div>

        <div>
          <Button variant="outline-primary icon-bnt" onClick={() => appleButtonClicked()}>
            <FontAwesomeIcon icon={["fab", "apple"]}/>
          </Button>
          <Button variant="outline-primary icon-bnt" onClick={() => androidButtonClicked()}>
            <FontAwesomeIcon icon={["fab", "android"]}/>
          </Button>
        </div>
      </div>
    )
  }
}

export default AppInfo;
