import React from 'react';

export default function Error(props) {
    return(
        <div className="notifError">
            <h5>{props.error}</h5>
        </div>
    )
}