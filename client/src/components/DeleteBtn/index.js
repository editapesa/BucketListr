import React from 'react';

function DeleteBtn(props) {
    return (
      <span className="delete-btn" {...props} style={{ float: 'right' }} role="button" tabIndex="0">
        ✗ 
      </span>
    );
  }
  
  export default DeleteBtn;
  