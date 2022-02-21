import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    title: "NewsMonkey",
    pagesize: 12,
    apikey: `https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=ec7735c4db74410f90ffeffaaa8bd570`,

  }

  static propTypes = {
    title: PropTypes.string,
    pagesize: PropTypes.number,
    apikey: PropTypes.string,

  }


  // constructor declartion
  constructor() { // order is 1st means it will come first in the console
    super() // super() to run constructor
    console.log("Hello I am Constructor from NewsItem")
    this.state = {  //  state()
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    console.log("cmd"); // order is 3rd means it will come last in the console

    let url = `${this.props.apikey}&page=1&pageSize=${this.props.pagesize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlePreviousClick = async () => {

    let url = `${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    })
  }

  handleNextClick = async () => {

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {
      console.log("end")
    }
    else {
      let url = `${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false
      })
    }

  }

  render() {
    // console.log("render");  // order is 2nd means it will come second in the console
    return (
      <div className='container my-3'>
        <h1 className='my-5 text-center'>{this.props.title} - Top Headlines</h1>
        {/* show loading only if it is true in state; */}
        {this.state.loading && <Spinner />}

        <div className="row d-flex justify-content-center">
          {/* { this.state.articles.map((element) => { */}
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-3 mx-3 my-3" key={element.url}>
              <NewsItem
                newsTitle={element.title ? element.title.slice(0, 45) + "..." : "null"}
                newsDescription={element.description ? element.description.slice(0, 90) + "..." : "null"}
                imgUrl={!element.urlToImage ? "https://images.livemint.com/img/2022/02/21/600x338/Cygnus_spacecraft_1645444527769_1645444527963.jpg" : element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button onClick={this.handlePreviousClick} disabled={this.state.page <= 1} type="button" className="btn btn-dark"> &larr; Previous</button>
          <button onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark">Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News