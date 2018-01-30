import React, { Component } from 'react';

class AppListDate extends Component {

  render() {
    return (
      <ul>

        {this.props.times.map((item, key) =>  <li key={key}>data: {item.toLocaleString()}</li>)}

      </ul>
    );
  }
}

export default AppListDate;