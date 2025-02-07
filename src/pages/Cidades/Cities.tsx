import { Stack, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { SearchBar } from "../../components/SearchBar";
import { CityColumns } from "./components/CityColumns";
import { useState } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useCitiesStore } from "../../stores/CitiesStore";

export const Cities = () => {
  const rows = useCitiesStore.getState().cities;

  const [filteredData, setFilteredData] = useState(rows ? rows : []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredResults = rows.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.province.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  if (rows) {
    return (
      <Stack sx={{ width: "100%", height: "100%" }}>
        <Stack sx={{ margin: 2 }} spacing={2}>
          <SearchBar
            placeholder="Pesquisar por cidade"
            onSearch={handleSearch}
          />
          <Box width="100%" height="calc(100vh - 100px)">
            <DataGrid
              rows={filteredData.length > 0 ? filteredData : rows}
              columns={CityColumns}
            />
          </Box>
        </Stack>
      </Stack>
    );
  }

  return <LoadingSpinner />;
};
