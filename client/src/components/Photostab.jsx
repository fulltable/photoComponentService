import React from 'react';

class Photostab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        {this.props.photos.map((photo) => 
          <div>
            <h2>{photo.comment}</h2>
            <div>{photo.date}</div>
            <img width='500'src={photo.imageUrl}></img>
          </div>
        )}
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