import React from 'react';
import $ from "jquery";

class Photostab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'none'
    }
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