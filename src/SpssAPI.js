import axios from "axios";

const SpssAPI = axios.create({
  baseURL: "https://ssps-7wxl.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default SpssAPI;
