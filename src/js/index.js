

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';


const state = observable({
  timer: 0
});


@Radium
@observer
class Test extends Component {

  render() {

    const styles = {
      color: 'blue',
    };

    return <h1 style={styles}>{this.props.state.timer}</h1>;

  }

}


ReactDOM.render(
  <Test state={state} />,
  document.getElementById('app')
);


setInterval(function() {
  state.timer += 1;
}, 1000);
