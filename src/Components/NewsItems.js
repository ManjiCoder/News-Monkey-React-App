import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsItems extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    newsUrl: PropTypes.string,
  };

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={!imageUrl ? "https://st1.latestly.com/wp-content/uploads/2021/11/SWOT-satellite-in-orbit-784x441.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
          >
            Read more...
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItems;
