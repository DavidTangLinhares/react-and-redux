/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "yWJUin3h1swvJLIUWN"
    };

    this.search("janosch");
  }

  search = (query) => {
    giphy('bMjXzL3Y9KEZOAuAkLBcucEbvqaPoXYF').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (gifId) => {
    this.setState({ selectedGifId: gifId });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} selectGifFunction={this.selectGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGifFunction={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
