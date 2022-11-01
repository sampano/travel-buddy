import axios from "axios";
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
export const getPlacesData = async (sw, ne) => {
  try {
    console.log("getPlace", sw);
    const {
      data: { data },
    } = await axios.get(URL, {
      method: "GET",
      url: { URL },
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "5618614760msh290e6f35e2c1e30p103bd9jsn24cd5e609daa",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
