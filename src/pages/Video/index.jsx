import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getVideoById } from "../../service/videosService";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { red } from "@mui/material/colors";
import Navbar from "../../components/Navbar/navbar";

export default function Video() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    getVideoById(id).then((data) => {
      setVideo(data);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div className="videoLeft">
          <Box
            sx={{
              maxWidth: "none",
              height: "auto",
              // bgcolor: "background.paper",
              bgcolor: "transparent",
            }}
          >
            <CardMedia
              component="video"
              controls
              autoPlay
              sx={{
                marginTop: "50px",
                width: "100%",
                borderRadius: "16px",
              }}
              src={video?.videoUrl}
              alt="Video thumbnail"
            />
            <CardContent sx={{ padding: "0", marginTop: "20px" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "text.primary" }}
              >
                {video?.title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <IconButton aria-label="play" sx={{ color: red[500] }}>
                  <PlayArrowIcon />
                </IconButton>
                <Typography
                  variant="subtitle1"
                  sx={{ ml: 1, color: "text.secondary" }}
                >
                  {video?.views} Views
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  mt: 1,
                  bgcolor: "#191919",
                  width: "100%",
                  borderRadius: "10px",
                  padding: "12px",
                }}
              >
                {video?.description}
              </Typography>
            </CardContent>
          </Box>
        </div>
        <div className="videoRight">
          <div className="miniContainer">
            <div className="miniVideos">
              <CardMedia
                component="video"
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                }}
                src={video?.videoUrl}
                alt="Video thumbnail"
              />
              <Typography
                component="div"
                sx={{
                  color: "text.primary",
                  fontSize: "12px",
                  padding: "10px",
                }}
              >
                {video?.title}
              </Typography>
            </div>

            <div className="miniVideos">
              <CardMedia
                component="video"
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                }}
                src={video?.videoUrl}
                alt="Video thumbnail"
              />
              <Typography
                component="div"
                sx={{
                  color: "text.primary",
                  fontSize: "12px",
                  padding: "10px",
                }}
              >
                {video?.title}
              </Typography>
            </div>

            <div className="miniVideos">
              <CardMedia
                component="video"
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                }}
                src={video?.videoUrl}
                alt="Video thumbnail"
              />
              <Typography
                component="div"
                sx={{
                  color: "text.primary",
                  fontSize: "12px",
                  padding: "10px",
                }}
              >
                {video?.title}
              </Typography>
            </div>

            <div className="miniVideos">
              <CardMedia
                component="video"
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                }}
                src={video?.videoUrl}
                alt="Video thumbnail"
              />
              <Typography
                component="div"
                sx={{
                  color: "text.primary",
                  fontSize: "12px",
                  padding: "10px",
                }}
              >
                {video?.title}
              </Typography>
            </div>

            <div className="miniVideos">
              <CardMedia
                component="video"
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                }}
                src={video?.videoUrl}
                alt="Video thumbnail"
              />
              <Typography
                component="div"
                sx={{
                  color: "text.primary",
                  fontSize: "12px",
                  padding: "10px",
                }}
              >
                {video?.title}
              </Typography>
            </div>

            <div className="miniVideos">
              <CardMedia
                component="video"
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                }}
                src={video?.videoUrl}
                alt="Video thumbnail"
              />
              <Typography
                component="div"
                sx={{
                  color: "text.primary",
                  fontSize: "12px",
                  padding: "10px",
                }}
              >
                {video?.title}
              </Typography>
            </div>

            <div className="miniVideos">
              <CardMedia
                component="video"
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                }}
                src={video?.videoUrl}
                alt="Video thumbnail"
              />
              <Typography
                component="div"
                sx={{
                  color: "text.primary",
                  fontSize: "12px",
                  padding: "10px",
                }}
              >
                {video?.title}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
