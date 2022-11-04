import GoogleMapReact from "google-map-react";
import { Box, Paper, Typography, useMediaQuery, Rating } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ClassNames } from "@emotion/react";
const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  const isDesktop = useMediaQuery("(min-width:600px");
  const coordinate = { lat: 0, lng: 0 };
  return (
    <Box sx={{ height: "85vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            position="absolute"
            transform="translate(-50%, -50%)"
            sx={{ zIndex: 1 }}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnIcon color="primary" fontSize="large" />
            ) : (
              <Paper
                display="flex"
                flexDirection="column"
                justifyContent="center"
                sx={{
                  width: "90px",
                  padding: "10px",
                  elevation: 3,
                }}
              >
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  width="90px"
                  cursor="pointer"
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                ></Rating>
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
