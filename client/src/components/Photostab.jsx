import React from 'react';
import $ from "jquery";

class Photostab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'none'
      // slideIndex: -1
    }
  }

  // let slideIndex = -1;
  // showSlides(slideIndex);

  openModal() {
    document.getElementById('myModal').style.display = "block";
  };

  currentSlide(n) {
    showSlides(slideIndex = n);
  }
  openModalCurrentSlide() {
    openModal();
    currentSlide(n);
  }


  plusSlides(n) {
    showSlides(slideIndex += n);
  }


  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }


  render() {
    return (
      this.props.photos && 
      <div>
        <div className="row">
        {this.props.photos.map((photo, idx) => 
          <div key={idx} className={`p${idx.toString()}`} onClick={() => this.props.showModalState(true, idx)} >
           <div>
          <a className="photos-gallery-link__2P8j-ADA" role="button">
          <div className="column">
          <img className={`p${idx.toString()}`} width='100%' src={photo.imageUrl} alt={photo.comment}/>
          </div>
          </a>
          </div>
          </div>
        )}
        </div>
      </div>

    );
  }
}



export default Photostab;
{/* <div>
        {this.props.photos.map((photo) => 
          <div>
            <h2>{photo.comment}</h2>
            <div>{photo.date}</div>
            <img width='500'src={photo.imageUrl}></img>
          </div>
        )}
      </div> */}


    //   <div className="main-container">
    //   <div className="column1">
    //     <img src={this.props.photos[0]} />
    //     <img src={this.props.photos[1]} />
    //   </div>
    //   <div className="column2">
    //     <img src={this.props.photos[2]} />
    //   </div>
    //   <div className="column3">
    //     <img src={this.props.photos[3]} />
    //     <img src={this.props.photos[4]} />
    //     <img src={this.props.photos[5]} />
    //     <img src={this.props.photos[6]} />
    //     <img src={this.props.photos[7]} />
    //     <img src={this.props.photos[8]} />
    //   </div>
    //   <div className="hiddenColumn">
    //     <img src={this.props.photos[9]} />
    //   </div>
    // </div>

    // return (
    //   <div>
    //     <div className="photos-gallery-layout__3OGej6HZ photos-gallery-layout-9__1BoDsEOf">
    //     {this.props.photos.map((photo, idx) => 
    //       <div key={idx} className={`p${idx.toString()}`} onClick={this.openModalCurrentSlide} >
    //        <div>
    //       <a className="photos-gallery-link__2P8j-ADA" role="button">
    //       <div className="photo__10vsfGte">
    //       <img className={`p${idx.toString()}`} width='25%' src={photo.imageUrl} alt={photo.comment}/>
    //       </div>
    //       </a>
    //       </div>
    //       </div>
    //     )}
    //     </div>
    //   </div>

    // );