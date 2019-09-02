import axios from "axios";

const timeApi = axios.create({
  baseURL: "http://api.timezonedb.com/v2.1/",
  validateStatus: function(status) {
    return status >= 200 && status < 500;
  }
});

export default timeApi;
