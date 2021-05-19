import '../styles/global.scss';
import styles from '../styles/app.module.scss';
import { Header } from '../components/Header'
import { Player } from '../components/Player';
import { PlayerContext } from '../context/playerContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [episodeList, setEpisodelit] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);

  function play(episode) {
    setEpisodelit([episode]);
    setCurrentEpisodeIndex(0);
    setPlaying(true);
  }

  function TogglePlay() {
    setPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {

    setPlaying(state);

  }

  return (

    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play, isPlaying, TogglePlay, setPlayingState }}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
