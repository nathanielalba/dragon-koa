import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index_actions.jsx';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.renderGames = this.renderGames.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  renderGames() {
    const { games } = this.props;

    if(games.length === 0) {
      return (
        <p>Loading...</p>
      );
    } else {
      return (
        <div>
          <p>Here is home</p>
          <p>{console.log(this.props.games)}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        { this.renderGames() }
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchData })(IndexPage);
