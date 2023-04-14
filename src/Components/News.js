import React, { useState, useEffect, useContext } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import SomethingWentWrong from "./SomethingWentWrong";
import NoDataFound from "./NoDataFound";
import HeadingInfo from "./HeadingInfo";
import UseContext from "../Context/UseContext";
import menuIcon from "../Images/sort-button-with-three-lines.png";
import backIcon from "../Images/back.png";

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
  const { setToggleSideBar } = useContext(UseContext); // For Closing toggleSideBar
  const { navIcon, setNavIcon } = useContext(UseContext);

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
      props.UpdateProgressBar(100);
      setLoading(false);
      setStatus(response.status);
      setError(response.message);
      console.error(response.message);
      throw Error(response.message);
    } else {
      props.UpdateProgressBar(85);
      setArticles(response.articles);
      setTotalResults(response.totalResults);
      setLoading(false);
      setStatus(response.status);
      props.UpdateProgressBar(100);
      // console.log(articles.length); //  For Development Only
    }
    // console.log(url); //  For Development Only
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
    setLoading(true);
    let data = await fetch(url);
    let response = await data.json();
    // console.log(response); // For Development Only
    if (response.status === "error") {
      setLoading(false);
      setStatus(response.status);
      setError(response.message);
      console.error(response.message);
      throw Error(response.message);
    } else {
      setArticles(articles.concat(response.articles));
      setTotalResults(response.totalResults);
      setLoading(false);
      setStatus(response.status);
    }

    // console.log(url); //  For Development Only
    // console.log(page); //  For Development Only
    // console.log(articles.length); //  For Development Only
  };

  // console.table(props)   //  For Development Only
  return (
    <div
      className="dark:bg-gray-900 min-h-screen"
      onClick={() => {
        setToggleSideBar("-translate-x-full");
        setNavIcon(navIcon === menuIcon ? backIcon : menuIcon);
      }}
    >
      {/* For Showing No Data Found */}
      {totalResults === 0 && status === "ok" && <NoDataFound />}

      {/* For Showing Heading OR For Showing Error */}
      {status === "error" && articles.length === 0 ? (
        <SomethingWentWrong error={error} />
      ) : status === "ok" && articles.length !== 0 ? (
        <HeadingInfo title={props.title} category={props.category} />
      ) : (
        ""
      )}

      <InfiniteScroll
        dataLength={articles.length}
        next={status === "ok" && articles.length && fetchMoreData}
        // hasMore={articles.length !== totalResults} // This is in working fine,but due to develper plan it fetch only 100 articles.
        hasMore={articles.length < 90}
        loader={loading && <Spinner />} // show Spinner only if loading is true in state
      >
        <div className="flex justify-center p-8 dark:bg-gray-900">
          <div className="w-screen grid gap-4 lg:gap-x-8 lg:gap-y-16 lg:justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {articles.map((element) => {
              return (
                <div key={element.url}>
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
    </div>
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
