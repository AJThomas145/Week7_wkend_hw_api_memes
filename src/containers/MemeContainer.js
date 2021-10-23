import React, {useState, useEffect} from 'react';
import MemeList from '../components/MemeList';



const MemeContainer = () => {
    const [memes, setMemes] = useState([])

    

    const fetchMemes = function(){
        fetch('https://api.imgflip.com/get_memes')
        .then((response) => response.json())
        .then((data) => setMemes(data.data.memes))
        
    }

    useEffect(fetchMemes, [])





    return(
        <div id="meme-container">
        <MemeList memes={memes} />
        </div>
    )
}

export default MemeContainer