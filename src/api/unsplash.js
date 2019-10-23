import axios from "axios";

//Allows you to have a configuration file for an API request
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID bfe073a2bdd41f1c890ad76061a9c5b7991817d9311cf179b9c8049bc27323df"
  }
});
