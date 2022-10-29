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
const List = () => {
  return (
    <Box padding="25px">
      <Typography variant="h4"> Food & Dining around you</Typography>
      <Box>{/* <CircularProgress size="5rem" /> */}</Box>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="type">Type</InputLabel>
        <Select
          id="type"
          //   value={type}
          //   onChange={(e) => setType(e.target.value)}
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
          //   value={rating}
          //   onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {/* {places?.map((place, i) => (
          <Grid ref={elRefs[i]} key={i} item xs={12}>
            <PlaceDetails
              selected={Number(childClicked) === i}
              refProp={elRefs[i]}
              place={place}
            />
          </Grid>
        ))} */}
      </Grid>
    </Box>
  );
};

export default List;
