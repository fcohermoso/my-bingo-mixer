interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.85) 100%)'
      }}
    >
      <div 
        className="bg-charcoal-800 rounded-xl p-8 max-w-xs w-full text-center shadow-2xl border-t-4 border-gold"
        style={{
          animation: 'scale-up 0.3s ease-out'
        }}
      >
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-4xl font-bold text-gold mb-2 font-display">BINGO!</h2>
        <p className="text-off-white/70 mb-6 font-display">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-midnight-600 text-gold-light font-semibold py-3 px-6 rounded-lg font-display transition-all duration-200 hover:bg-midnight-500 hover:text-gold active:scale-95"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
