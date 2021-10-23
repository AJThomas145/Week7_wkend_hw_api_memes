import React from 'react';

const MemeSelector = ({memes, onMemeSelected}) => {
    
    const handleChange = function(event) {
        const chosenMeme = memes[event.target.value]
        onMemeSelected(chosenMeme);
    }

    const memeOptions = memes.map((meme, index) => {
        return <option value={index} key={index}>{meme.name}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Meme</option>
            {memeOptions}
        </select>
    )
}

export default MemeSelector;