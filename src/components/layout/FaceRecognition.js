import React from 'react';
import '../../styles/components/layout/_facerecognition.scss'

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='face-recognition-container center'>
            <div className='face-recognition'>
                <img id='inputimage' alt='' src={imageUrl} />
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;