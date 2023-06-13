import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data);
    });
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);

  if (!videoDetail?.items[0]?.snippet) return "loading...";

  const { title, channelId, channelTitle } = videoDetail.items[0].snippet;
  const { viewCount, likeCount } = videoDetail.items[0].statistics;
  return (
    <Box minHeight="90vh">
      <Stack flexDirection={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "80px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#fff"
              fontWeight="bold"
              variant="h5"
              p={2}
            >
              {title}
            </Typography>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={0}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    fontSize="12px"
                    sx={{ ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack
                flexDirection="row"
                gap={2}
                alignItems="center"
              >
                <Typography
                  variant="body1"
                  sx={{ opacity: "0.7" }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: "0.7" }}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            px: 2,
            py: { sm: 5, md: 1 },
          }}
        >
          <Videos
            videos={videos}
            direction="column"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
