import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGameData } from '../actions/games_actions.jsx';

class GameDetails extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { slug } = this.props.params;
    this.props.fetchGameData(slug);
  }

  render() {
    const { game } = this.props.game;

    return (
      <div>
        <img src={game.iconUrl} />
        <p>
          { game.title }
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps, { fetchGameData })(GameDetails);
