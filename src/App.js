import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import  Home from './Component/home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAndroid,faApple,fab  } from '@fortawesome/free-brands-svg-icons';
library.add(faAndroid,faApple, fab);

class App extends Component {

  render() {
    return(
      <Home/>
    )
  }
}
export default App;
