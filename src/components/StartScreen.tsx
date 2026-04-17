interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-full p-6 bg-linear-to-br from-charcoal-900 to-charcoal-800 animate-[fade-in_0.6s_ease-out]"
      style={{
        backgroundImage: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)'
      }}
    >
      <div className="text-center max-w-sm space-y-8">
        {/* Title */}
        <div 
          className="animate-[fade-in_0.6s_ease-out_forwards]"
          style={{ animation: 'fade-in 0.6s ease-out' }}
        >
          <h1 className="text-5xl font-bold text-off-white mb-2 font-display tracking-tight">
            Bingo Mixer
          </h1>
          <p className="text-lg text-gold-light font-display">Find your people!</p>
        </div>
        
        {/* Instructions Box */}
        <div 
          className="bg-charcoal-800 rounded-lg p-6 border-l-4 border-gold shadow-lg"
          style={{ 
            animation: 'fade-in 0.6s ease-out 0.2s both'
          }}
        >
          <h2 className="font-semibold text-off-white mb-3 font-display text-sm">How to play</h2>
          <ul className="text-left text-off-white/80 text-sm space-y-2 font-display">
            <li className="flex items-start">
              <span className="text-gold mr-2">•</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2">•</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2">•</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* Button */}
        <button
          onClick={onStart}
          className="w-full bg-midnight-600 text-gold-light font-semibold py-4 px-8 rounded-lg text-lg font-display transition-all duration-200 hover:bg-midnight-500 hover:text-gold active:scale-95 shadow-lg"
          style={{ 
            animation: 'fade-in 0.6s ease-out 0.4s both'
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
