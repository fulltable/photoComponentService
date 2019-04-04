import React from "react";
import $ from "jquery";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoCarousel: null
    }
  }

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "/api/restaurants/1/photos",
      success: results => {
        console.log(results);
        console.log(results[0].image)
        this.setState({ photoCarousel: results[0].image });
      }
    });
  }

  render() {
    return (
      <div>
      <h3>10 Photos</h3>
      {this.state.photoCarousel === null ? null : <img width="500" src= {(this.state.photoCarousel[0].imageUrl)}/>}
      {/* <PhotoCarousel photoCarousel={this.state.photoCarousel} /> */}
      </div>
    )
  }
}

export default App;