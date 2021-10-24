import React from 'react';

const MemeDetail = ({selectedMeme, onFavToggle}) => {

      const handleClick = () => {
        onFavToggle(selectedMeme.index)
    }

    const favouriteButtonText = selectedMeme.favourite ? "Remove from Favourites" : "Add to Favourites"
    

    return (
        <div>
            <h3>{selectedMeme.name}</h3>
            <img src = {selectedMeme.url} width="40%" height="50%"/>
            <br></br>
            <button onClick={handleClick}>{favouriteButtonText}</button>
        </div>
    )
}

export default MemeDetail;