import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if(forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length-1){
                    temp = 0;
                }

                return temp;
            })
        }else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0){
                    temp = props.songs.length - 1;
                }

                return temp;

        }
    }

  return (
    <div className="c-player">
        <audio ref={audioEl}></audio>
        <h4>Playing now</h4>
        <PlayerDetails song={props.song}/>
        <PlayerControls/>
        <p><strong>Next up:</strong>{props.nextSong.title} by {props.nextSong.artist}</p>
    </div>
  )
}

export default Player