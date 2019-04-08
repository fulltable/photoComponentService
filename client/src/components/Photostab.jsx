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
      <div >
        <div className="row">
        {this.props.photos.map((photo, idx) => 
          <div key={idx} onClick={() => this.props.showModalState(true, idx)} >
           <div className="photoContainer">
            <div className="column">
            <img className="photoC" src={photo.imageUrl} alt={photo.comment}/>
            </div>
          </div>
        </div>
        )}
        </div>
      </div>
    );
  }
}

export default Photostab;