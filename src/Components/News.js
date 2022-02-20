import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
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
    })   //  setState()
    console.log(parsedData);
  }

  handlePreviousClick = async () => {
    // console.log("Previous");

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
      console.log(this.props.pagesize)
    }
    // console.log("Next");
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
        <h1>{this.props.title} - Top Headlines</h1>
        {/* show loading only if it is true in state; */}
        {this.state.loading && <Spinner />}

        <div className="row">
          {/* { this.state.articles.map((element) => { */}
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-3 mx-3 my-3" key={element.url}>
              <NewsItem
                newsTitle={element.title ? element.title.slice(0, 45) + "..." : "null"}
                newsDescription={element.description ? element.description.slice(0, 90) + "..." : "null"}
                imgUrl={!element.urlToImage ? "https://cdn.vox-cdn.com/thumbor/uKdP56NAbqE_DLmKzzzrK6gxMOI=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22461569/dseifert_20210415_4535_0002.jpg" : element.urlToImage}
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