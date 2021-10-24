import React from 'react';

const FavouriteMemes = ({favouriteMemes, onMemeSelected}) => {
    
    // const memeFavs = favouriteMemes.map((meme, index) => {
    //     return <ul key={index}>{meme.name}</ul>
    // })

    return(
        <div>
            <h3>Favourite Memes</h3>
            <p>
            {favouriteMemes.map(meme => {
                return (
                    <ul key={meme.index} onClick={() => onMemeSelected(meme.index)}>
                    {meme.name}
                    </ul>
                )
            })}
            </p>
        </div>
    )

}

export default FavouriteMemes;