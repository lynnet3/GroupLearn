import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/studies");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/studies/" + id);
  },
  // Deletes the book with the given id
  getUser: function(userData) {
    console.log(userData)
    return axios.get("/api/users", { params: { q: userData } });
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData); //makes a post of the form's data to /api/users, defined in study/routes/api/users
  }
};
