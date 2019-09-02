import axios from "axios";

const api = axios.create({
  baseURL: "https://community-open-weather-map.p.rapidapi.com/",
  headers: {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "45b6a0fa02msh1f48f362de4672ep199407jsn35e877821f21"
  },
  validateStatus: function(status) {
    return status >= 200 && status < 500;
  }
});

export default api;
