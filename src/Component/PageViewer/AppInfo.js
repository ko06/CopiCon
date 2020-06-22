import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Button from "react-bootstrap/Button";
import {SketchPicker} from 'react-color';
import reactCSS from 'reactcss'



class AppInfo extends Component {
  state = {
    displayColorPicker: false,
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
    const {androidButtonClicked, appleButtonClicked, appNameChange} = this.props;
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
            <h3>Choose color</h3>
            <span> 3</span>
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
            <span>2</span>
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
