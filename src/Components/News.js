import React, { Component } from "react";
import NewItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor form News Component");
    this.state = {
      articles: [],
      loading: true,
    };
  }

  async componentDidMount() {
    console.log("cdm"); //  it will run after render

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ec7735c4db74410f90ffeffaaa8bd570";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({ articles: parseData.articles });
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <h1 className="my-3">NewsMonkey - Top Headlines</h1>
        <div className="row justify-content-around">
          {this.state.articles.map((element) => {
            // console.log(element);
            return (
              <div className="mx-2 col-md-3" key={element.url}>
                <NewItems
                  title={
                    element.title ? element.title.slice(0, 45) + "..." : ""
                  }
                  description={
                    element.description ? element.description.slice(0, 90) + "..." : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
