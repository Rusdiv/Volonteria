import React, { useState, useEffect } from "react";
import axios from "axios";

import NewsList from "../../components/News/NewsList/NewsList";
import Preloader from "../../components/Preloader";

export default function News(props) {
  const { newsData } = props;
  return (
    <div>
      {Array.isArray(newsData) ? <NewsList news={newsData} /> : <Preloader />}
    </div>
  );
}
