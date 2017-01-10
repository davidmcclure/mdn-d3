

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';


@Radium
class Test extends Component {

  render() {

    const styles = {
      color: 'red',
    };

    return <h1 style={styles}>Test3</h1>;

  }

}


ReactDOM.render(<Test />, document.getElementById('app'));
