import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(
      (data) => {
        setVideos(data.items);
      },
      [searchTerm]
    );
  });
  return (
    <Box
      p={2}
      height={{ sm: "auto", md: "86vh" }}
      sx={{ overflowY: "auto", flex: 2 }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: "#fff" }}
      >
        Search results for:{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
