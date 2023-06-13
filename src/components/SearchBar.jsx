import { useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";

const SearchBar = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <Paper
      onSubmit={onHandleSubmit}
      component="form"
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        value={searchTerm}
        placeholder="search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
