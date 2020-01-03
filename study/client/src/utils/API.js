import axios from "axios";

export default {
  findCookie: function() {
    return axios.get("/api/users/cookie")
  },
  // Gets the book with the given id
  saveGroup: function(postData) {
    return axios.post("/api/studies", postData);
  },
  //searches for a user matching the given info
  getUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users/login", { params: { q: userData } });
  },
  getAll: function() {
    return axios.get("/api/users")
  },
  //gets all study posts, can add more specific routes for later eg: /api/studies/math
  getAllPosts: function() {
    return axios.get("/api/studies")
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users/signIn", userData); //makes a post of the form's data to /api/users, defined in study/routes/api/users
  }
};
