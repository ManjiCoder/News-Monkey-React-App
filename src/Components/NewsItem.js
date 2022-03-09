
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {

  static propTypes = {
    newsTitle: PropTypes.string,
    newsDescription: PropTypes.string,
    imgUrl: PropTypes.string,
    newsUrl: PropTypes.string,
    author: PropTypes.string,
    newsDate: PropTypes.string,
    source: PropTypes.string,
    color: PropTypes.string
  }

  render() {
    let { newsTitle, newsDescription, imgUrl, newsUrl, author, newsDate, source, color } = this.props;  // Destructing 

    return (
      <div className="card align-items-end">
        <span className={`position-absolute top-0 badge rounded-pill bg-${color}`}>
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