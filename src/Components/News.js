import React, { useState, useEffect } from 'react'// In function based Component
// import React, { Component } from 'react'     // In class based Component

import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {

  // static defaultProps = {
  //   title: 'NewsMonkey',
  //   pagesize: 12,
  //   badgeColor: 'dark',
  //   country: 'in'         //  Country is set to India as a Default
  // }

  // static propTypes = {
  //   title: PropTypes.string,
  //   API_KEY: PropTypes.string,
  //   country: PropTypes.string,
  //   category: PropTypes.string,
  //   pagesize: PropTypes.number,
  //   badgeColor: PropTypes.string,
  //   UpdateProgressBar: PropTypes.func
  // }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // constructor declartion
  // constructor(props) { // order is 1st means it will come first in the console
  //   super(props) // super() to run constructor
  //   // console.log("Hello I am Constructor from NewsItem");
  //   document.title = `${this.capitalizeFirstLetter(this.props.category)} - ${this.props.title}` //  Give Props to Constructor - To use it here!
  //   this.state = {  //  state()
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalResults: 0,
  //   }
  // }
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  document.title = `${capitalizeFirstLetter(props.category)} - ${props.title}` //  Give Props to Constructor - To use it here!

  // async updataNews() {
  //   this.props.UpdateProgressBar(20); //  Updating - Top Progress Bar
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pagesize}`
  //   this.props.UpdateProgressBar(40); //  Updating - Top Progress Bar
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   this.props.UpdateProgressBar(60); //  Updating - Top Progress Bar
  //   let parsedData = await data.json();
  //   this.props.UpdateProgressBar(85); //  Updating - Top Progress Bar
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   })
  //   this.props.UpdateProgressBar(100);//  Updating - Top Progress Bar
  //   console.log(url);
  // }

  const updataNews = async () => {
    props.UpdateProgressBar(20); //  Updating - Top Progress Bar
    // this.props.UpdateProgressBar(20); //  Updating - Top Progress Bar
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.API_KEY}&page=${page}&pageSize=${props.pagesize}`
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pagesize}`
    props.UpdateProgressBar(40); //  Updating - Top Progress Bar
    // this.props.UpdateProgressBar(40); //  Updating - Top Progress Bar
    setLoading(true)
    // this.setState({ loading: true });
    let data = await fetch(url);
    props.UpdateProgressBar(60); //  Updating - Top Progress Bar
    // this.props.UpdateProgressBar(60); //  Updating - Top Progress Bar
    let parsedData = await data.json();
    props.UpdateProgressBar(85); //  Updating - Top Progress Bar
    // this.props.UpdateProgressBar(85); //  Updating - Top Progress Bar
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // })
    props.UpdateProgressBar(100);//  Updating - Top Progress Bar
    // this.props.UpdateProgressBar(100);//  Updating - Top Progress Bar
    console.log(url);
    console.log(page);
    // console.log(parsedData.articles);
  }

  useEffect(() => {
    updataNews()
  }, [])

  // async componentDidMount() {
  //   // console.log("cmd"); // order is 3rd means it will come last in the console
  //   this.updataNews();
  // }

  const fetchMoreData = async () => {
    setPage(page + 1)
    // this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.API_KEY}&page=${page}&pageSize=${props.pagesize}`
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pagesize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    console.log(page);
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults
    // })
  };

  // fetchMoreData = async () => {
  //   this.setState({ page: this.state.page + 1 })
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pagesize}`
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: this.state.articles.concat(parsedData.articles),
  //     totalResults: parsedData.totalResults
  //   })
  // };

  // console.log("render");  // order is 2nd means it will come second in the console
  return (
    <>
      <h1 className='my-5 text-center text-capitalize'>{props.title} - {props.category} Top Headlines</h1>
      {/* <h1 className='my-5 text-center text-capitalize'>{this.props.title} - {this.props.category} Top Headlines</h1> */}
      {/* show loading only if it is true in state; */}
      {loading && <Spinner />}
      {/* {this.state.loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        // dataLength={this.state.articles.length}
        next={fetchMoreData}
        // next={this.fetchMoreData}
        hasMore={articles.length !== totalResults}
        // hasMore={this.state.articles.length !== this.state.totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            {/* {!this.state.loading && this.state.articles.map((element) => { */}
            {articles.map((element) => {
              // {this.state.articles.map((element) => {
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
                // color={this.props.badgeColor}
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