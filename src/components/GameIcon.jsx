import React, { Component } from 'react';

export default class GameIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { iconUrl, title, id } = this.props;

    return (
      <div className="thumbnail">
        <img src={iconUrl} alt={title} />
        <div className="caption">
          <h3>{title}</h3>
        </div>
      </div>
    );
  }
}
