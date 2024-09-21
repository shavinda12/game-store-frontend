import useGameTrailor from "../hooks/useGameTrailor";

interface GameTrailorProps {
  gameId?: number;
}

const GameTrailor = ({ gameId }: GameTrailorProps) => {
  const { data, isLoading, error } = useGameTrailor(gameId!);
  const trailor = data?.results[0];
  if(isLoading||error) return null;
  if (trailor) {
    return (
      <>
        <video src={trailor.data[480]} controls>
          {" "}
        </video>
      </>
    );
  }
  null;
};

export default GameTrailor;
