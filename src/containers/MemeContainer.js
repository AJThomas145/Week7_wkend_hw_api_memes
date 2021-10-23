import React, {useState, useEffect} from 'react';
import MemeList from '../components/MemeList';
import MemeDetail from '../components/MemeDetail';
import MemeSelector from '../components/MemeSelector';


const MemeContainer = () => {
    const [memes, setMemes] = useState([])
    const [selectedMeme, setSelectedMeme] = useState(null)

    

    const fetchMemes = function(){
        fetch('https://api.imgflip.com/get_memes')
        .then((response) => response.json())
        .then((data) => setMemes(data.data.memes))
        
    }

    useEffect(fetchMemes, [])

    const handleMemeSelect = (meme) => {
        setSelectedMeme(meme)
    }

    const onMemeSelected = function(meme){
        setSelectedMeme(meme);
    }



    return(
        <div id="meme-container">
        <h1>Meme Selector</h1>
        {/* <MemeList memes={memes} onMemeSelect={handleMemeSelect} /> */}
        <MemeSelector memes={memes} onMemeSelected={onMemeSelected} />
        {selectedMeme ? <MemeDetail selectedMeme={selectedMeme} /> :null}
        </div>
    )
}

export default MemeContainer