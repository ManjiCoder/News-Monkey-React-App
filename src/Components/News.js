import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps = {
    title: 'NewsMonkey',
    pagesize: 12,
    badgeColor: 'dark',
    country: 'in'         //  Country is set to India as a Default
  }

  static propTypes = {
    title: PropTypes.string,
    API_KEY: PropTypes.string,
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number,
    badgeColor: PropTypes.string,
    UpdateProgressBar: PropTypes.func
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // constructor declartion
  constructor(props) { // order is 1st means it will come first in the console
    super(props) // super() to run constructor
    // console.log("Hello I am Constructor from NewsItem");
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - ${this.props.title}` //  Give Props to Constructor - To use it here!
    this.state = {  //  state()
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
  }

  async updataNews() {
    this.props.UpdateProgressBar(20); //  Updating - Top Progress Bar
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pagesize}`
    this.props.UpdateProgressBar(40); //  Updating - Top Progress Bar
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.UpdateProgressBar(60); //  Updating - Top Progress Bar
    let parsedData = await data.json();
    this.props.UpdateProgressBar(85); //  Updating - Top Progress Bar
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
    this.props.UpdateProgressBar(100);//  Updating - Top Progress Bar
    console.log(url);
  }

  async componentDidMount() {
    // console.log("cmd"); // order is 3rd means it will come last in the console
    this.updataNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pagesize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  };
  render() {
    // console.log("render");  // order is 2nd means it will come second in the console
    return (
      <>
        <h1 className='my-5 text-center text-capitalize'>{this.props.title} - {this.props.category} Top Headlines</h1>
        {/* show loading only if it is true in state; */}
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row d-flex justify-content-center">
              {/* {!this.state.loading && this.state.articles.map((element) => { */}
              {this.state.articles.map((element) => {
                return <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    newsTitle={element.title ? element.title : "null"}
                    newsDescription={element.description ? element.description : "null"}
                    imgUrl={!element.urlToImage ? "https://images.livemint.com/img/2022/02/21/600x338/Cygnus_spacecraft_1645444527769_1645444527963.jpg" : element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    newsDate={new Date(element.publishedAt).toGMTString()}
                    source={element.source.name}
                    color={this.props.badgeColor}
                  />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

      </>
    )
  }
}

export default News