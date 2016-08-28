import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import { fetchData } from '../actions/index_actions.jsx';
import GameIcon from './GameIcon.jsx';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.renderGames = this.renderGames.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  renderGames() {
    const { games } = this.props.games;

    const masonryOptions = {
      transitionDuration: 0
    }

    if(games.length === 0) {
      return (
        <p>Loading...</p>
      );
    } else {
      return (
        <div>
          {
            games.map((game) => {
              return (
                <Masonry
                  elementType={'div'}
                  options={masonryOptions}
                  disableImagesLoaded={false}
                  updateOnEachImageLoad={false}
                >
                  <GameIcon {...game} key={game.id}/>
                </Masonry>
              )
            })
          }
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
