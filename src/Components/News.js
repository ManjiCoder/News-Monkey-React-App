import React, { useState, useEffect } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

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

  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    handleOnClick();
    // eslint-disable-next-line
  }, [])
  // const fetchMoreData = async () => {
  //   // Url Takes Time In Miliseconds To Load, So SetPage(page + 1) Is In Next Line From Url
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.API_KEY}&page=${page + 1}&pageSize=${props.pagesize}`
  //   setPage(page + 1)
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   setArticles(articles.concat(parsedData.articles))
  //   setTotalResults(parsedData.totalResults)
  //   console.log(page);
  // };
  // document.getElementById('searchBtn').addEventListener('click', fetchMoreData)

  const [searchText, setSearchText] = useState('')
  const handleOnChange = (e) => {
    setSearchText(e.target.value)
    // console.log(e.target.value);
  }
  const handleOnClick = async () => {
    // console.log('clicked ' + searchText);
    if (searchText.length === 0) {
      props.UpdateProgressBar(15); //  Updating - Top Progress Bar
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.API_KEY}&page=${page}&pageSize=${props.pagesize}`
      props.UpdateProgressBar(30); //  Updating - Top Progress Bar
      setLoading(true)
      let data = await fetch(url);
      props.UpdateProgressBar(50); //  Updating - Top Progress Bar
      let parsedData = await data.json();
      props.UpdateProgressBar(85); //  Updating - Top Progress Bar
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.UpdateProgressBar(100);//  Updating - Top Progress Bar
      console.log(url)
    }
    else {
      props.UpdateProgressBar(15); //  Updating - Top Progress Bar
      let url = `https://newsapi.org/v2/everything?q=${searchText}&from=2022-02-13&sortBy=publishedAt&apikey=e93da7be7e134c76afa08f33b2b2b96b&apikey=${props.API_KEY}&page=${page}&pageSize=${props.pagesize}`
      props.UpdateProgressBar(30); //  Updating - Top Progress Bar
      setLoading(true)
      let data = await fetch(url);
      props.UpdateProgressBar(50); //  Updating - Top Progress Bar
      let parsedData = await data.json();
      props.UpdateProgressBar(85); //  Updating - Top Progress Bar
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.UpdateProgressBar(100);//  Updating - Top Progress Bar
      console.log(url);
    }

  }
  const fetchMoreData = async () => {
    //   // Url Takes Time In Miliseconds To Load, So SetPage(page + 1) Is In Next Line From Url
    if (searchText.length === 0) {
      // props.UpdateProgressBar(15); //  Updating - Top Progress Bar
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.API_KEY}&page=${page + 1}&pageSize=${props.pagesize}`
      console.log(url + "categorywala");
      setPage(page + 1)
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      console.log(page)
    }
    else {
      // props.UpdateProgressBar(15); //  Updating - Top Progress Bar
      let url = `https://newsapi.org/v2/everything?q=${searchText}&from=2022-02-13&sortBy=publishedAt&apikey=e93da7be7e134c76afa08f33b2b2b96b&apikey=${props.API_KEY}&page=${page + 1}&pageSize=${props.pagesize}`
      console.log(url + "searchwala");
      setPage(page + 1)
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      console.log(page)
    }
  }

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-capitalize">
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
            </ul>

            <form className="d-flex">
              <input className="form-control me-2" type="text" value={`${searchText}`} onChange={handleOnChange} placeholder="Search" aria-label="Search" />
              <button disabled={searchText.length === 0} id='searchBtn' className="btn btn-outline-success" type="button" onClick={handleOnClick} >Search</button>
            </form>
          </div>
        </div>
      </nav>
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