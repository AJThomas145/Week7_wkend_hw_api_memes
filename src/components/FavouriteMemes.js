import React from 'react';

const FavouriteMemes = ({favouriteMemes, onMemeSelected}) => {
    
    // const memeFavs = favouriteMemes.map((meme, index) => {
    //     return <ul key={index}>{meme.name}</ul>
    // })

    return(
        <div>
            <h3>Favourite Memes</h3>
            <ul>
            {favouriteMemes.map(meme => {
                return (
                    <li key={meme.index} onClick={() => onMemeSelected(meme.index)}>
                    {meme.name}
                    </li>
                )
            })}
            </ul>
        </div>
    )

}

export default FavouriteMemes;