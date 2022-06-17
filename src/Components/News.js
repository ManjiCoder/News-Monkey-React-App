import React, { useState, useEffect } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Emoji from "../Images/emoji.png";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [status, setStatus] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null); // Null is Important because it prevent from no data found while fetching
  const [error, setError] = useState(null);

  // To Remove Catergory
  if (totalResults === 0) {
    document.title = `${props.title}`;
  } else {
    document.title = `${capitalizeFirstLetter(props.category)} ${props.title}`;
  }

  const updataNews = async () => {
    props.UpdateProgressBar(20);
    let url = `${props.url}&apikey=${props.API_KEY}&page=${page}&pageSize=${props.pagesize}`;
    props.UpdateProgressBar(40);
    let data = await fetch(url);
    props.UpdateProgressBar(60);
    let response = await data.json();
    props.UpdateProgressBar(80);
    // console.log(response); // For Development Only
    if (response.status === "error") {
      console.log(response.message);
      props.UpdateProgressBar(100);
      setLoading(false);
      setStatus(response.status);
      setError(response.message);
      // throw Error(response.message);
    } else {
      props.UpdateProgressBar(85);
      setArticles(response.articles);
      setTotalResults(response.totalResults);
      setLoading(false);
      setStatus(response.status);
      props.UpdateProgressBar(100);
      // console.log(articles.length); //  For Development Only
    }
    console.log(url); //  For Development Only
    // console.log(page); //  For Development Only
  };

  useEffect(() => {
    updataNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    // Url Takes Time In Miliseconds To Load, So SetPage(page + 1) Is In Next Line From Url
    let url = `${props.url}&apikey=${props.API_KEY}&page=${page + 1}&pageSize=${
      props.pagesize
    }`;
    setPage(page + 1);
    setLoading(true)
    let data = await fetch(url);
    let response = await data.json();
    // console.log(response); // For Development Only
    if (response.status === "error") {
      console.log(response.message);
      setLoading(false);
      setStatus(response.status);
      setError(response.message);
      throw Error(response.message);
    } else {
      setArticles(articles.concat(response.articles));
      setTotalResults(response.totalResults);
      setLoading(false);
      setStatus(response.status);
    }

    // console.log(url);  //  For Development Only
    // console.log(page); //  For Development Only
    // console.log(articles.length); //  For Development Only
  };
  // console.table(props)   //  For Development Only
  return (
    <>
      {/* For Showing No Data Found */}
      {totalResults === 0 && status === "ok" && (
        <div style={{ display: "grid", placeItems: "center" }}>
          <img className="emoji" src={Emoji} alt="No Data Found" />
          <h1 className="showError text-center text-capitalize">
            No Data Found
          </h1>
        </div>
      )}

      {/* For Showing Error */}
      {status === "error" && (
        <h1 className="somethingwentwrong">
          Something Went Wrong..
          <details style={{ fontSize: "1rem" }}>{error}</details>
        </h1>
      )}

      {/* For Showing Heading  */}
      {status === "ok" && articles.length !== 0 && (
        <h1
          className="text-center text-capitalize"
          style={{ margin: "37px 0" }}
        >
          {props.title} - {props.category} Top Headlines
        </h1>
      )}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        // hasMore={articles.length !== totalResults} // This is in working fine,but due to develper plan it fetch only 100 articles.
        hasMore={articles.length < 100}
        loader={loading && <Spinner />} // show Spinner only if loading is true in state
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    newsTitle={element.title ? element.title : "null"}
                    newsDescription={
                      element.description ? element.description : "null"
                    }
                    imgUrl={
                      !element.urlToImage
                        ? "https://images.livemint.com/img/2022/02/21/600x338/Cygnus_spacecraft_1645444527769_1645444527963.jpg"
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    newsDate={new Date(element.publishedAt).toGMTString()}
                    source={element.source.name}
                    color={props.badgeColor}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
News.defaultProps = {
  title: "NewsMonkey",
  pagesize: 12,
  badgeColor: "dark",
  country: "in", //  Country is set to India as a Default
};

News.propTypes = {
  title: PropTypes.string,
  API_KEY: PropTypes.string,
  country: PropTypes.string,
  category: PropTypes.string,
  pagesize: PropTypes.number,
  badgeColor: PropTypes.string,
  UpdateProgressBar: PropTypes.func,
  url: PropTypes.string,
};

export default News;
