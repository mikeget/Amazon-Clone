import axios from "axios";


const instance = axios.create({
  baseURL: "https://us-central1-michael--clone.cloudfunctions.net/api",
});


export default instance;
