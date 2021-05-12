import axios from "axios";

const instance = axios.create({
  baseURL: "https://randomuser.me/api/?page=1&results=30",
});

export default instance;
