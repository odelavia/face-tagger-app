import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='imagelinkform'>
            <p>
                {'This input box will detect faces in your pictures. Feed it image URLs and give it a try.'}
            </p>
            <div className='form-container'>
                <div className='center form'>
                    <input className='imageinput' onChange={ onInputChange } />
                    <button className='imagebutton'
                    onClick={ onButtonSubmit }
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;