import { Button, Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        mt: 2.5,
        flexDirection: { md: "column" },
        overflowY: "auto",
        height: { sx: "auto", md: "92%" },
      }}
    >
      {categories.map((category) => {
        return (
          <Button
            onClick={() => setSelectedCategory(category.name)}
            className="category-btn"
            key={category.name}
            sx={{
              minWidth: "max-content",
              justifyContent: "left",
              backgroundColor:
                selectedCategory === category.name ? "#FC1503" : "#000",
            }}
          >
            <span
              style={{
                marginRight: "15px",
                color: selectedCategory === category.name ? "#fff" : "red",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                color: "#fff",
                opacity: selectedCategory === category.name ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </Button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
