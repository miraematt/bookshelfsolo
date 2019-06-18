import React, { Component } from "react";
import axios from "axios";
import "./style.css";
class App extends Component {
  state = { books: [] };

  componentDidMount() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=thehobbit")
      .then(res => {
        console.log(res);
        this.setState({ books: res.data.items });
      });
  }

  render() {
    if (this.state !== {})
      return (
        <div>
          <input className="search" placeholder="Enter your search word here" />
          <ul>
            {this.state.books.map((book, i) => (
              <li key={i}>
                {i + 1}:{book.volumeInfo.title} - {book.volumeInfo.authors[0]}
              </li>
            ))}
          </ul>
        </div>
      );
  }
}
export default App;
