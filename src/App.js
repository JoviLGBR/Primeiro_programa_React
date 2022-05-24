import React, { Component } from "react";
import Feed from "./components/Feed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "João", curtidas: 10, comentarios: 2 },
        { id: 2, username: "Julio", curtidas: 320, comentarios: 125 },
        { id: 3, username: "Tauane", curtidas: 50, comentarios: 10 },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <div>
              <Feed
                key={item.id}
                username={item.username}
                curtidas={item.curtidas}
                comentarios={item.comentarios}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
