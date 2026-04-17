import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
  delay?: number;
}

export function BingoSquare({ square, isWinning, onClick, delay = 0 }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border rounded transition-all duration-200 select-none min-h-[60px] text-xs leading-tight font-display font-medium';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-gold-light/20 border-gold/50 text-gold'
      : 'bg-marked border-marked-border text-marked-border'
    : 'bg-charcoal-800 border-charcoal-700 text-off-white/80 hover:border-gold/50 hover:shadow-lg hover:-translate-y-0.5 active:scale-95';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm bg-charcoal-700 border-gold/30' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
      style={{
        animation: `slide-up 0.3s ease-out ${delay}ms both`,
      }}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-marked-border text-xs">✓</span>
      )}
    </button>
  );
}
