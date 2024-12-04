import Song from './Song';
import { useState } from 'react';
import { SongType } from './SongTypes';

const SongList = () : JSX.Element => {

    const [visible, setVisible] = useState<boolean>(false);
    const[song1, setNewSong1] = useState<SongType>({title:'Oorvashi', artist:'AR Rahman', numberOfVotes:2});
    const[song2, setNewSong2] = useState<SongType>({title:'Ordinary Man', artist:'Anirudh', numberOfVotes:3});

    const toggleVisibility = () : void => {
        setVisible(!visible);
    }

    const changeSong = () => {
        setNewSong1({...song1, title:'Modified Song1'})
        setNewSong2({...song2, title:'Modified Song2'})
    }

    const addVote = () => {
        set
    }

    return (
        <div>
            <h2>Your favourite songs are:</h2>
            <button onClick={toggleVisibility}> {visible ? 'hide' : 'show'} songs</button>
            <button onClick={changeSong}>Change Songs</button>
            <ul style= {{display : visible ? 'block' : 'none'}}>
                <Song title={song1.title} artist={song1.artist} numberOfVotes={song1.numberOfVotes}/>
                <Song title={song2.title} artist={song2.artist} numberOfVotes={song2.numberOfVotes}/>
            </ul>
        </div>);
}

export default SongList;
