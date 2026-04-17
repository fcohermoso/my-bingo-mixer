import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-charcoal-900">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-charcoal-800 border-b border-charcoal-700">
        <button
          onClick={onReset}
          className="text-gold/60 text-sm px-3 py-1.5 rounded font-display font-medium hover:text-gold transition-colors duration-200 active:bg-charcoal-700"
        >
          ← Back
        </button>
        <h1 className="font-bold text-off-white font-display">Bingo Mixer</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-off-white/60 text-sm py-2 px-4 font-display">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-linear-to-r from-gold/20 to-gold-light/20 text-gold-light text-center py-3 font-semibold text-sm font-display border-b border-gold/30">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
