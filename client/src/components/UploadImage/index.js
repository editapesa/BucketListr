import React from 'react';
//import { AddImage } from '../Form';
import Row from '../Row';
import Col from '../Col';

class UploadImage extends React.Component{
    state = {
        imageUrl: null,
        imageAlt: null
    }

    handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);

        formData.append('upload_preset', 'jr84oybt');
        const options = {
            method: 'POST',
            body: formData,
        };

        

        return fetch('https://api.Cloudinary.com/v1_1/djigceusu/image/upload', options)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    imageUrl: res.secure_url,
                    imageAlt: `An image of ${res.original_filename}`
                })
            })
            .catch(err => console.log(err));
      }

    render() {
        const { imageUrl, imageAlt } = this.state;

        return (
            <Row className="Cloudinary">
                <form className='form-group'>
                    <div className="form-control">
                    
                        <input type="file"/>
                        <button type="button" className="btn btn-light btn-outline-secondary" onClick={this.handleImageUpload}>Submit</button>
                        <p>View image here</p>
                        {imageUrl && (
                            <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
                        )} 
                    </div>   
                </form>
            </Row>
        );
    }
}

export default UploadImage;
