import React, { Component } from 'react';

export default class GameDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>
          Hello
        </p>
        {console.log(this.props.params)}
      </div>
    )
  }
}
