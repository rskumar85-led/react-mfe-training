import { SongType } from "./SongTypes";

const Song = (props: SongType) : JSX.Element => {
   

    return (
    <li>
        {props.title} by {props.artist} with {props.numberOfVotes} Votes
        <button onClick={incrementVote}>Increment Vote</button>
    </li>
    );
 }
 
 export default Song

 