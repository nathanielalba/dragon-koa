import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
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
          <Masonry
            elementType={'div'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {
              games.map((game) => {
                let route = "/games/" + game.slug
                return (
                  <Link to={route}>
                    <GameIcon {...game} key={game.id} />
                  </Link>
                )
              })
            }
          </Masonry>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="home-page">
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
