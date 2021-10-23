import React from 'react';

const MemeDetail = ({selectedMeme}) => {

    return (
        <div>
            <h3>{selectedMeme.name}</h3>
            <img src = {selectedMeme.url}/>
        </div>
    )
}

export default MemeDetail;