import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div 
      className="grid grid-cols-5 gap-2 w-full max-w-md mx-auto aspect-square p-3 rounded-lg"
      style={{
        boxShadow: '0 0 30px rgba(212, 175, 55, 0.15), 0 0 15px rgba(212, 175, 55, 0.08)',
        backgroundColor: 'rgba(26, 26, 26, 0.5)'
      }}
    >
      {board.map((square, index) => (
        <BingoSquare
          key={square.id}
          square={square}
          isWinning={winningSquareIds.has(square.id)}
          onClick={() => onSquareClick(square.id)}
          delay={index * 50}
        />
      ))}
    </div>
  );
}
