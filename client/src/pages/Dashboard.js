//this is for the 4th screen in wire frame
//user can see list of Bucket List items
//options to add items, or click on an existing item to edit/delete 
/// edit/delete options will be on another page

import React, { useRef } from "react";
import { useStoreContext } from '../utils/GlobalState';
import { ADD_LISTITEM, LOADING } from '../utils/actions';
import API from '../utils/API';

function Dashboard() {
    const titleRef = useRef();
    const urlRef = useRef();
    const imageRef = useRef();
    const [state, dispatch] = useStoreContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: LOADING });
        API.saveListItem({
            title: titleRef.current.value,
            url: urlRef.current.value,
            image: imageRef.current.value,
        })
        .then((result) => {
            dispatch({
                type: ADD_LISTITEM,
                listItem: result.data,
            });
        })
        .catch((err) => console.log(err));

        titleRef.current.value = '';
        urlRef.current.value = '';
        imageRef.current.value = '';
    };

    return (
        <div>
            <div>
                <h1>Add a New Goal</h1>
                <form className='form-group mt-3 mb-3' onSubmit={handleSubmit}>
                    <textarea 
                        className='form-control'
                        required 
                        ref={titleRef}
                        id='title'
                        placeholder='Enter a new goal'
                    />
                    <input
                        className='form-control'
                        ref={urlRef}
                        id='list item url'
                        placeholder='https://www.url.com'
                    />
                    <label htmlFor='image file'>Choose file</label>
                    <input
                        className='custom-file-input'
                        ref={imageRef}
                        id='image file'
                    />
                    <button
                        className='btn btn-success'
                        disabled={state.loading}
                        type='submit'
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Dashboard;