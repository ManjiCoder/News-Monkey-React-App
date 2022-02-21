
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    // let { newsTitle, newsDescription, imgUrl, newsUrl } = this.props;  // Destructing - All destructured elements are unused
    return (
        <div className="card" style={{ height: "30rem" }}>
          <img src={this.props.imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.newsTitle}</h5>
            <p className="card-text">{this.props.newsDescription}</p>
            <a href={this.props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark" style={{ position: "absolute", bottom: "1rem" }}>Read more</a>
          </div>
        </div>
    )
  }
}

export default NewsItem