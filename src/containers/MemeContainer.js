import React, {useState, useEffect} from 'react';
import MemeList from '../components/MemeList';
import MemeDetail from '../components/MemeDetail';
import MemeSelector from '../components/MemeSelector';
import FavouriteMemes from '../components/FavouriteMemes';
import "./MemeContainer.css"



const MemeContainer = () => {
    const [memes, setMemes] = useState([])
    const [selectedMeme, setSelectedMeme] = useState(null)
    // const [favouriteMemes, setFavouriteMemes] = useState([])

    

    const fetchMemes = function(){
        fetch('https://api.imgflip.com/get_memes')
        .then((response) => response.json())
        .then((data) => setMemes(data.data.memes))
        
    }

    useEffect(fetchMemes, [])

    // const handleMemeSelect = (meme) => {
    //     setSelectedMeme(meme)
    // }

    const onMemeSelected = index => {
        setSelectedMeme(index);
    }

    // const addFavouriteMeme = () => {
    //     const updatedFavs = [...favouriteMemes, selectedMeme];
    //     setFavouriteMemes(updatedFavs)
    // }

    const favouriteMemes = memes.filter(meme => meme.favourite)

    const handleFavToggle = (index) => {
        const updatedMemes = memes.map((meme) => {
            if(meme.index === index){
                meme.favourite = !meme.favourite
            }
            return meme
        })
        setMemes(updatedMemes)
    }



    return(
        <div id="meme-container">
            <u><h1>Meme Selector</h1></u>
            {/* <MemeList memes={memes} onMemeSelect={handleMemeSelect} /> */}
            <MemeSelector memes={memes} onMemeSelected={onMemeSelected} />
            {selectedMeme ? <MemeDetail selectedMeme={selectedMeme} onFavToggle={handleFavToggle} /> :null}
            <br></br><br></br>
            <FavouriteMemes favouriteMemes={favouriteMemes} onMemeSelected={onMemeSelected}/>
        </div>
        
    )
}

export default MemeContainer