import React from "react";
import $ from "jquery";
import Photostab from "./Photostab.jsx";
import MyModal from "./MyModal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      showModal: false,
      slideIndex: -1
    }
  }

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "/api/restaurants/2/photos",
      success: results => {
      this.setState({photos: results[0].image}); 
      }
    });
  }

  showModalState(value, slideIndex) {
    this.setState({showModal: value, slideIndex: slideIndex}); 
  }
  render() {

    return (
      <div className='photo-gallery'>
        <h2 className='photo-gallery-header'>10 Photos</h2>
        <Photostab showModalState={this.showModalState.bind(this)} photos={this.state.photos}></Photostab>
        {this.state.showModal && (<MyModal photos={this.state.photos} slideIndex={this.state.slideIndex} showModalState={this.showModalState.bind(this)}></MyModal>)}
      </div>
    )
  }
}

export default App;

// </div><div className='container' >{this.state.photoCarousel === null ? null : <img width="500" src= {(this.state.photoCarousel[0].imageUrl)}/>}
