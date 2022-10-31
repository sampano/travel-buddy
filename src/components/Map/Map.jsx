import GoogleMapReact from "google-map-react";
import { Box, Paper, Typography, useMediaQuery, Rating } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Map = () => {
  const isMobile = useMediaQuery("(min-width:600px");
  const coordinate = { lat: 0, lng: 0 };
  return (
    <Box sx={{ height: "85vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC_H9s5yfg0OH2zW3LXNZ0Ouc0agxthzTs" }}
        defaultCenter={coordinate}
        center={coordinate}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
