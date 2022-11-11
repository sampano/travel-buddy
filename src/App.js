import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Grid } from "@mui/material";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api";
const App = () => {
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      // console.log("geolocation", coords.latitude, coords.longitude);
      setCoordinates({ lat: coords.latitude, lng: coords.longitude });
    });
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        // console.log("app bounds", bounds.sw);
        // console.log(data);
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setIsLoading(false);
        // console.log("placesssss", places);
      });
    }
  }, [type, bounds]);
  return (
    <>
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            // places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
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
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            // weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
