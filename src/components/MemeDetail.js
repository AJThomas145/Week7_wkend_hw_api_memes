import React from 'react';

const MemeDetail = ({selectedMeme, addFavouriteMeme}) => {

    const handleClick = () => {
        addFavouriteMeme()
    }

    return (
        <div>
            <h3>{selectedMeme.name}</h3>
            <img src = {selectedMeme.url} width="40%" height="50%"/>
            <br></br>
            <button onClick={handleClick}>Add to Favourites</button>
        </div>
    )
}

export default MemeDetail;