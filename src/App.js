import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Grid, useScrollTrigger } from "@mui/material";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api";
const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log("geolocation", coords.latitude, coords.longitude);
      setCoordinates({ lat: coords.latitude, lng: coords.longitude });
    });
  }, []);

  useEffect(() => {
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        console.log("app bounds", bounds.sw);
        console.log(data);
        setPlaces(data);
      });
    }
  }, [coordinates, bounds]);
  return (
    <>
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
          // isLoading={isLoading}
          // childClicked={childClicked}
          // places={filteredPlaces.length ? filteredPlaces : places}
          // type={type}
          // setType={setType}
          // rating={rating}
          // setRating={setRating}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            // coords={coords}
            // places={filteredPlaces.length ? filteredPlaces : places}
            // weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
