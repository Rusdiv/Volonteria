import axios from "axios";
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [news, setNews] = useState();
  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get("/api/getNews");
      setNews(response.data);
    };
    
    getNews();
  }, []);

  return (
    <div className={styles.container}>
      <ul>
        {Array.isArray(news) ? (
          news.map((post) => (
            <div className={styles.post}>{post.title.rendered}</div>
          ))
        ) : (
          <Preloader />
        )}
      </ul>
    </div>
  );
}
