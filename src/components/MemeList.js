import React from 'react';


const MemeList = ({memes, onMemeSelect}) => {

    const handleMemeClick = (index) => {
        const selectedMeme = memes[index]
        onMemeSelect(selectedMeme)
    }

    const memesItems = memes.map((meme, index) => {
        return <li onClick={() => handleMemeClick(index)} key={index}>{meme.name}</li>
    })
    
    return(
        <div>
            {memesItems}
        </div>
    )

}


export default MemeList;