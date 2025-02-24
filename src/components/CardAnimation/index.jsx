import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function CardAnimation() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      {/* <Typography
        variant="subtitle2"
        sx={{
          marginLeft: 9,
        }}
        color="text.secondary"
      >
        Views: {video.views} &#183; {video.uploadTime}
      </Typography> */}
    </Card>
  );
  //     <Stack spacing={1}>
  //       <Skeleton variant="rectangular" width={345} height={194} />
  //       <div
  //         style={{
  //           display: "flex",
  //           gap: "20px",
  //           alignContent: "center",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <Skeleton variant="circular" width={40} height={40} />
  //         <Skeleton variant="text" width={280} />
  //       </div>
  //     </Stack>
  //   );
}
