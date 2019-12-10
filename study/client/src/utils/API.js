import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/studys");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/studys/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
