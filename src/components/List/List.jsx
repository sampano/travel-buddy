import {
  Box,
  FormControl,
  Typography,
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";
import { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, isLoading, type, setType, rating, setRating }) => {
  console.log("lisT", type);
  const [elRefs, setElRefs] = useState([]);

  return (
    <Box sx={{ padding: "25px" }}>
      <Typography variant="h4">
        Restaurants, Hotels & Attraction Around You
      </Typography>
      {isLoading ? (
        <Box
          sx={{ height: "600px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress size="5rem" />
        </Box>
      ) : (
        <>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="type">Type</InputLabel>
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={3} sx={{ height: "75vh", overflow: "auto" }}>
            {places?.map((place, i) => (
              <Grid key={i} item xs={12}>
                <PlaceDetails place={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default List;
