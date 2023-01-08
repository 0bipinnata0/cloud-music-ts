import usePlayer from "./hooks/usePlayer";

const Player = () => {
  const data = usePlayer();
  return <div>Player</div>;
};

export default Player;
