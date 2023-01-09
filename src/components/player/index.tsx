import usePlayer from "./hooks/usePlayer";
import MiniPlayer from "./miniPlayer";
import NormalPlayer from "./normalPlayer";

const Player = () => {
  const data = usePlayer();
  const currentSong = {
    al: {
      picUrl:
        "https://p1.music.126.net/JL_id1CFwNJpzgrXwemh4Q==/109951164172892390.jpg",
    },
    name: "木偶人",
    ar: [{ name: "薛之谦" }],
  };
  return (
    <div>
      {/* @ts-ignore */}
      <MiniPlayer song={currentSong} />
      <NormalPlayer song={currentSong} />
    </div>
  );
};

export default Player;
