import React from 'react';

const FavouriteMemes = ({favouriteMemes}) => {
    
    const memeFavs = favouriteMemes.map((meme, index) => {
        return <ul key={index}>{meme.name}</ul>
    })

    return(
        <ul>
            {memeFavs}
        </ul>
    )

}

export default FavouriteMemes;