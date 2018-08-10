import React from 'react'
import Rank from '../layout/Rank';
import ImageLinkForm from '../layout/ImageLinkForm';
import FaceRecognition from '../layout/FaceRecognition';

const Home = ({ user, onInputChange, onButtonSubmit, boxes, imageUrl }) => {
 return(
  <div>
    <Rank
      name={user.name}
      entries={user.entries}
    />
    <ImageLinkForm
      onInputChange={onInputChange}
      onButtonSubmit={onButtonSubmit}
    />
    <FaceRecognition  boxes={boxes} imageUrl={imageUrl} />
  </div>
 );
}

export default Home;