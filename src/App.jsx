import { useState } from "react";

function Squar({ value, onSquareClick }) {
  return (
    <button
      className="bg-white border border-gray-300 h-12 w-12 m-1 leading-9 text-lg cursor-pointer"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="flex">
        <Squar value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Squar value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Squar value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Squar value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Squar value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Squar value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Squar value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Squar value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Squar value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
