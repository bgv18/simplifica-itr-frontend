import SearchOutlined from "@mui/icons-material/SearchOutlined";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { ChangeEvent, useEffect, useState } from "react";

type SearchBarProps = {
  placeholder?: string;
  onSearch: (newValue: string) => void;
};

export const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        height: 48,
        border: "solid 1px #CCCCCC",
        borderRadius: 1,
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchOutlined sx={{ color: "#404040" }} />
      </IconButton>
      <InputBase
        sx={{ ml: 0, flex: 1, fontSize: "0.975rem", fontColor: "#404040" }}
        fullWidth
        placeholder={placeholder ?? ""}
        onChange={(e) => onSearch(e.target.value)}
      />
    </Stack>
  );
};
