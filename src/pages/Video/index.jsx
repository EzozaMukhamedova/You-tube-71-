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
      <Card
        sx={{
          maxWidth: "none",
          height: "auto",
          bgcolor: "background.paper",
          m: "auto",
          mt: 4,
          display: "flex",
          bgcolor: "#000",
          // borderRadius: "15px",
          // overflow: "hidden",
          flexDirection: "column",
          boxShadow: 3,
        }}
      >
        <CardMedia
          component="video"
          controls
          autoPlay
          sx={{
            height: 624,
            width: 870,
            margin: "left",
            borderRadius: "15px",
            marginLeft: "120px",
            alignItems: "center",
            justifyContent: "center",
            // padding: 120,
          }}
          src={video?.videoUrl}
          alt="Video thumbnail"
        />
        <CardContent sx={{ p: 2 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "text.primary", marginLeft: "105px" }}
          >
            {video?.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <IconButton
              aria-label="play"
              sx={{ color: red[500], marginLeft: "90px" }}
            >
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
              marginLeft: "105px",
              bgcolor: "#191919",
              width: "870px",
              borderRadius: "10px",
              height: "200px",
              padding: "12px",
            }}
          >
            {video?.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
