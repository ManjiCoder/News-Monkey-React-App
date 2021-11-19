import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewItems extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  render() {
    let { title, description } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://cdn.24.co.za/files/Cms/General/d/9970/67e44818862b4ecba66127ee2c037915.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="newsItems" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default NewItems;
