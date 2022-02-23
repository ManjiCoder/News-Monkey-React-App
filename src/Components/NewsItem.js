
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { newsTitle, newsDescription, imgUrl, newsUrl, author, newsDate, source, color } = this.props;  // Destructing 
    return (
      <div className="card">
        <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${color}`} style={{ left: "90%", zIndex: 1 }}>
          {source}
        </span>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{newsTitle}</h5>
          <p className="card-text">{newsDescription}</p>
          <p className="card-text"><small className="text-muted">By {author} on {newsDate}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark" >Read more</a>
        </div>
      </div>
    )
  }
}

export default NewsItem