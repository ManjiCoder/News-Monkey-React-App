import React, { useState, useEffect } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  document.title = `${capitalizeFirstLetter(props.category)} - ${props.title}` //  Give Props to Constructor - To use it here!

  const updataNews = async () => {
    props.UpdateProgressBar(20); //  Updating - Top Progress Bar
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.API_KEY}&page=${page}&pageSize=${props.pagesize}`
    // let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-02-11&sortBy=publishedAt&apikey=${props.API_KEY}&page=${page}&pageSize=${props.pagesize}`
    props.UpdateProgressBar(40); //  Updating - Top Progress Bar
    setLoading(true)
    let data = await fetch(url);
    props.UpdateProgressBar(60); //  Updating - Top Progress Bar
    let parsedData = await data.json();
    props.UpdateProgressBar(85); //  Updating - Top Progress Bar
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.UpdateProgressBar(100);//  Updating - Top Progress Bar
    // console.log(url);  //  For Development Only
    // console.log(page); //  For Development Only
  }

  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    updataNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    // Url Takes Time In Miliseconds To Load, So SetPage(page + 1) Is In Next Line From Url
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.API_KEY}&page=${page + 1}&pageSize=${props.pagesize}`
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    console.log(page);
  };

  return (
    <>
      <h1 className='text-center text-capitalize' style={{ marginTop: '80px', marginBottom: '40px' }}>{props.title} - {props.category} Top Headlines </h1>
      {/* show loading only if it is true in state; */}
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            {articles.map((element) => {
              return <div className="col-md-4 my-2" key={element.url}>
                <NewsItem
                  newsTitle={element.title ? element.title : "null"}
                  newsDescription={element.description ? element.description : "null"}
                  imgUrl={!element.urlToImage ? "https://images.livemint.com/img/2022/02/21/600x338/Cygnus_spacecraft_1645444527769_1645444527963.jpg" : element.urlToImage}
                  newsUrl={element.url}
                  author={element.author ? element.author : "Unknown"}
                  newsDate={new Date(element.publishedAt).toGMTString()}
                  source={element.source.name}
                  color={props.badgeColor}
                />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>
  )

}
News.defaultProps = {
  title: 'NewsMonkey',
  pagesize: 12,
  badgeColor: 'dark',
  country: 'in'         //  Country is set to India as a Default
}

News.propTypes = {
  title: PropTypes.string,
  API_KEY: PropTypes.string,
  country: PropTypes.string,
  category: PropTypes.string,
  pagesize: PropTypes.number,
  badgeColor: PropTypes.string,
  UpdateProgressBar: PropTypes.func
}

export default News