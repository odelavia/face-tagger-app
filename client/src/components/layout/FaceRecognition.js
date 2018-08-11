import React from 'react';
import '../../styles/components/layout/_facerecognition.scss'

const FaceRecognition = ({imageUrl, boxes}) => {
    return (
        <div className='face-recognition-container center'>
            <div className='face-recognition'>
                <img id='inputimage' alt='' src={imageUrl} />
                {boxes.map(box =>
                <div key={`box${box.topRow}${box.rightCol}`}
                    className='bounding-box'
                    style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
                </div>
                )}
            </div>
        </div>
    );
}

export default FaceRecognition;