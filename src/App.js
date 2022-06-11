import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";

import News from "./Components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

function App() {
  let pagesize = 20;
  let country = "in";
  // let API_KEY = process.env.REACT_APP_NEWS_API_KEY; //  Custom Local Environment Variables - API_Key is stored inside .env.local File
  // let API_KEY = "ec7735c4db74410f90ffeffaaa8bd570"  // My API_KEY
  let API_KEY = "e93da7be7e134c76afa08f33b2b2b96b"; // Other API_KEY

  // Creating Date
  let date = new Date();
  let date_ = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();
  let todayDate = `${year}-${month}-${date_}`;
  // console.log(todayDate);

  const [progress, setProgress] = useState(0)
  const setProgressBar = (UpdateProgress) => {
    setProgress(UpdateProgress)
  };

  // For Navbar - Lifting UP State (Passing Data From Child To Parent)
  const [query, setQuery] = useState("")
  const getQuery = (value) => {
    setQuery(value);
    // console.log(value);
  };

  return (
    <div>
      <Router>
        <Navbar title="NewsMonkey" getText={getQuery} />

        {/* Top Loading Bar */}
        <LoadingBar color="#f11946" height={3} progress={progress} />

        <Routes>
          <Route
            path="/"
            element={
              <News
                title="NewsMonkey"
                category={""}
                badgeColor={"dark"}
                API_KEY={API_KEY}
                pagesize={pagesize}
                UpdateProgressBar={setProgressBar}
                url={`https://newsapi.org/v2/top-headlines?country=${country}&category=general&`}
              />
            }
          />

          <Route
            path="/business"
            element={
              <News
                key={"business"}
                title="NewsMonkey"
                category={"business"}
                badgeColor={"success"}
                API_KEY={API_KEY}
                pagesize={pagesize}
                UpdateProgressBar={setProgressBar}
                url={`https://newsapi.org/v2/top-headlines?country=${country}&category=business&`}
              />
            }
          />

          <Route
            path="/entertainment"
            element={
              <News
                key={"entertainment"}
                title="NewsMonkey"
                category={"entertainment"}
                badgeColor={"primary"}
                API_KEY={API_KEY}
                pagesize={pagesize}
                UpdateProgressBar={setProgressBar}
                url={`https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&`}
              />
            }
          />

          <Route
            path="/health"
            element={
              <News
                key={"health"}
                title="NewsMonkey"
                category={"health"}
                badgeColor={"danger"}
                API_KEY={API_KEY}
                pagesize={pagesize}
                UpdateProgressBar={setProgressBar}
                url={`https://newsapi.org/v2/top-headlines?country=${country}&category=health&`}
              />
            }
          />

          <Route
            path="/science"
            element={
              <News
                key={"science"}
                title="NewsMonkey"
                category={"science"}
                badgeColor={"info"}
                API_KEY={API_KEY}
                pagesize={pagesize}
                UpdateProgressBar={setProgressBar}
                url={`https://newsapi.org/v2/top-headlines?country=${country}&category=science&`}
              />
            }
          />

          <Route
            path="/sports"
            element={
              <News
                key={"sports"}
                title="NewsMonkey"
                category={"sports"}
                badgeColor={"success"}
                API_KEY={API_KEY}
                pagesize={pagesize}
                UpdateProgressBar={setProgressBar}
                url={`https://newsapi.org/v2/top-headlines?country=${country}&category=sports&`}
              />
            }
          />

          <Route
            path="/technology"
            element={
              <News
                key={"technology"}
                title="NewsMonkey"
                category={"technology"}
                badgeColor={"dark"}
                API_KEY={API_KEY}
                pagesize={pagesize}
                UpdateProgressBar={setProgressBar}
                url={`https://newsapi.org/v2/top-headlines?country=${country}&category=technology&`}
              />
            }
          />

          <Route
            path={`/${query.replaceAll(" ", "%20")}`}
            element={
              <News
                key={query}
                title={`NewsMonkey`}
                category={query.toLowerCase()}
                badgeColor={"primary"}
                API_KEY={API_KEY}
                pagesize={pagesize}
                UpdateProgressBar={setProgressBar}
                url={`https://newsapi.org/v2/everything?q=${query.replaceAll(" ","%20")}&from=${todayDate}&sortBy=publishedAt`}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
