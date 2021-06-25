// *** THIS IS STILL A WORK IN PROGRESS! ***
// will be used to upload user photo & possibly background pic


//Set global configuration options
//For all SDKs, you'll need to configure at least your cloud name. 
//For server-side SDKs, you'll also need to configure your api_key and api_secret. 
//Below you will find your Cloudinary credentials

var cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'djigceusu', 
    api_key: '886819323789982', 
    api_secret: 'KOBLY7ATchFrgk489A-tOUosZBw' 
  });


  //API Environment variable
CLOUDINARY_URL=cloudinary://886819323789982.KOBLY7ATchFrgk489A-tOUosZBw@djigceusu


// *** below is from pettrax ***
// let photo;

// CLOUDINARY ---------------------------------------------------
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dhx8koumu/upload/';
const CLOUDINARY_IMAGE = "https://res.cloudinary.com/dhx8koumu/image/upload/";
const CLOUDINARY_UPLOAD_PRESET = 'pyejztvw';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

imgPreview.addEventListener('click', () => {
    fileUpload.click();
});

fileUpload.addEventListener('change', function(event) {
    // console.log(event);
    var file = event.target.files[0];
    // console.log(file);
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData,
    }).then(function(res) {
        // console.log(res);
        // const format = res.data.format;
        const publicId = res.data.public_id;
        const version = res.data.version;
        // getTransformedImage(format, publicId, version);
        const newUrl = CLOUDINARY_IMAGE + "c_fill,w_125,h_125,g_auto,r_max/v" + version + "/" + publicId + ".png";
        photo = newUrl;
        imgPreview.src = newUrl;
        console.log(imgPreview);
    }).catch(function(err) {
        console.log(err);
    })
});
