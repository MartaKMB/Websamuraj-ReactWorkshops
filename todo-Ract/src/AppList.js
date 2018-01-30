import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppList extends Component {

    static propTypes = {

        // chcemy items'y które mają być zawsze, patrz import
        items: PropTypes.array.isRequired
    }


  render() {
    const {items} = this.props;
    return (
      <ul>
        {
            items.map((item, key) => 
            <li key={key}>{item} 
                <button onClick={() => this.props.deleteItem(key)}>X</button>
            </li>)
        }
      </ul>
    );
  }
}

export default AppList;
