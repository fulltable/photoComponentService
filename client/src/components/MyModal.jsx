
//style={{display: this.state.modal}}

import React from 'react';
import $ from "jquery";

class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: this.props.slideIndex
    }
  }

  plusSlides(n) {
    let newSlideIndex = this.state.slideIndex + n;
    newSlideIndex = newSlideIndex < 0 ? this.props.photos.length - 1: newSlideIndex;
    //if last than 0, set to 9
    newSlideIndex = newSlideIndex > this.props.photos.length - 1 ? 0: newSlideIndex;
    this.setState({slideIndex: newSlideIndex});
  }

  // currentSlide(n) {
  //   this.showSlides(this.props.slideIndex = n);
  // }

  // showSlides(n) {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("demo");
  //   if (n > slides.length) {this.props.slideIndex = 1}
  //   if (n < 1) {this.props.slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   console.log(this.props.slideIndex)
  //   slides[this.props.slideIndex-1].style.display = "block";
  //   dots[this.props.slideIndex-1].className += " active";
  // }
  render() {

    console.log(this.props.photos[0])
    //onClick={this.closeModal()}
    return (
      <div id="modal" className="modal">
      <span className="close cursor"  onClick={() => this.props.showModalState(false)}>&times;</span>
      <div className="modal-content">
      <div>
        {/* {this.props.photos.map((photo, idx) => 
          <div className="mySlides" key={`myModal${idx.toString()}`}> */}
            <img width='100%'src={this.props.photos[this.state.slideIndex].imageUrl}></img>
          {/* </div>
        )} */}
      </div>

      <a className="prev" onClick={this.plusSlides.bind(this, -1)}>&#10094;</a>
      <a className="next" onClick={this.plusSlides.bind(this, 1)}>&#10095;</a>
    </div>
    </div>

    );
  }
}

export default MyModal;