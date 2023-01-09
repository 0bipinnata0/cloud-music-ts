import usePlayer from "./hooks/usePlayer";
import MiniPlayer from "./miniPlayer";
import NormalPlayer from "./normalPlayer";

const Player = () => {
  const { currentSong } = usePlayer();
  if (!currentSong) {
    return null;
  }
  return (
    <div>
      <NormalPlayer song={currentSong} />
      <MiniPlayer song={currentSong} />
    </div>
  );
};

export default Player;
