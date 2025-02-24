import React, { useEffect, useState } from "react";

import { getVideos } from "../../service/videosService";
import VideoCard from "../../components/VideoCard";
import { Grid, Skeleton } from "@mui/material";
import CardAnimation from "../../components/CardAnimation";
import Navbar from "../../components/Navbar/navbar";

const MainPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getVideos()
      .then((data) => {
        console.log(data);
        setVideos(data);
      })
      .catch((err) => {
        alert(err?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "grid",
          width: "1416px",

          margin: "auto",
          marginTop: "50px",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "12px",
        }}
      >
        {videos &&
          videos.map((video, index) => <VideoCard key={index} video={video} />)}
        {loading && Array.from(new Array(8)).map((video) => <CardAnimation />)}
      </div>
    </div>
  );
};

export default MainPage;
