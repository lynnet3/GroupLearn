import axios from "axios";

export default {
  findCookie: function() {
    return axios.get("/api/users/cookie")
  },
  // Gets the book with the given id
  saveGroup: function(postData) {
    return axios.post("/api/studies", postData);
  },
  // Deletes the book with the given id
  getUser: function(userData) {
    return axios.post("/api/users/login", { params: { q: userData } });
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users/signIn", userData); //makes a post of the form's data to /api/users, defined in study/routes/api/users
  }
};
