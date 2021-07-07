import React from 'react';

export function Input(props) {
    return (
        <div className='form-group'>
            <input className='form-control' {...props} />
        </div>
    );
}

export function TextArea(props) {
    return (
        <div className='form-group'>
            <textarea className='form-control' rows='5' {...props} />
        </div>
    );
}

// find/verify correct code to add image
export function AddImage(props) {
    return (
        <div className='image file'>
            <input className='custom-file-input' {...props} />
        </div>
    );
}

export function SaveBtn(props) {
    return (
        <button {...props} style={{ float: 'left' }} className='btn btn-success'>
            {props.children}
        </button>
    );
}

export function DeleteOption(props) {
    return (
        <button {...props} style={{ float: 'right' }} className='btn btn-danger'>
            {props.children}
        </button>
    );
}


