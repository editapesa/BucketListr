import React from 'react';

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
            <div className="Cloudinary">
                <section className="left-side">
                    <div className="card-pic">
                        <input type="file"/>
                    </div>

                    <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>
                </section>
                <section className="right-side">
                    <p>The resulting image will be displayed here</p>
                    {imageUrl && (
                        <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
                    )}
                </section>
            </div>
        );
    }
}

export default UploadImage;
