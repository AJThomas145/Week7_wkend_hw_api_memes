import React from 'react';

const MemeDetail = ({selectedMeme}) => {

    return (
        <div>
            <h3>{selectedMeme.name}</h3>
            <img src = {selectedMeme.url} width="40%" height="50%"/>
        </div>
    )
}

export default MemeDetail;