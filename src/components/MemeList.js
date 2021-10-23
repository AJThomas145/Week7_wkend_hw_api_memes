import React from 'react';


const MemeList = ({memes}) => {

    const memesItems = memes.map((meme, index) => {
        return <li key={index}>{meme.name}</li>
    })
    
    return(
        <div>
            {memesItems}
        </div>
    )

}


export default MemeList;