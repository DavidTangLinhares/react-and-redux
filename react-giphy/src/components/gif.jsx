/* eslint-disable react/prefer-stateless-function */

import React, { Component } from "react";

class Gif extends Component {
  handleUpdate = () => {
    this.props.selectGifFunction(this.props.id);
  }

  render () {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.webp`;
    return (
      <img src={src} alt="" className="gif"
        onClick={this.handleUpdate}
      />
    );
  }
}

export default Gif;
