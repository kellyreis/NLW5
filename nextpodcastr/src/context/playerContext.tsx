import { type } from 'node:os';
import { createContext, useState, ReactNode, useContext } from 'react';

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
};

type PlayerContextData = {

    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    play: (episode: Episode) => void;
    TogglePlay: () => void;
    setPlayingState: (state: boolean) => void;
    playList: (list: Episode[], index: number) => void;
    PlayNext: () => void;
    playprevius: () => void;
    hasNext: boolean;
    hasPrevius: boolean;
};

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = {
    children: ReactNode
}

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const [episodeList, setEpisodelit] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [isPlaying, setPlaying] = useState(false);

    function play(episode: Episode) {
        setEpisodelit([episode]);
        setCurrentEpisodeIndex(0);
        setPlaying(true);
    }
    function TogglePlay() {
        setPlaying(!isPlaying);
    }

    function playList(list: Episode[], index: number) {

        setEpisodelit(list);
        setCurrentEpisodeIndex(index);
        setPlaying(true);

    }

    function setPlayingState(state: boolean) {
        setPlaying(state);
    }


    const hasPrevius = currentEpisodeIndex > 0;
    const hasNext = currentEpisodeIndex < episodeList.length;

    function PlayNext() {

        const nextindex = currentEpisodeIndex + 1;

        if (hasNext) {
            setCurrentEpisodeIndex(currentEpisodeIndex + 1);
        }

    }

    function playprevius() {

        if (hasPrevius) {
            setCurrentEpisodeIndex(currentEpisodeIndex - 1)
        }

    }



    return (

        <PlayerContext.Provider value={{
            episodeList,
            currentEpisodeIndex,
            play,
            isPlaying,
            TogglePlay,
            setPlayingState,
            playList,
            playprevius,
            PlayNext,
            hasNext,
            hasPrevius
        }}>
            { children}
        </PlayerContext.Provider>
    )
}


export const usePlayer = () => {
    return
    useContext(PlayerContext);

}