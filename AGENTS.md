# AGENTS.md

This file helps AI coding agents become productive quickly in this repository.

## Project Snapshot
- Stack: React 19 + TypeScript + Vite + Tailwind CSS v4.
- Node requirement: Node.js 22 or newer.
- Main app: social bingo game with a start screen, game board, and bingo modal.

## Fast Start
Run from repository root:

```bash
npm install
npm run dev
```

Quality gates:

```bash
npm run lint
npm run test
npm run build
```

## Architecture Map
- App composition and screen switching: [src/App.tsx](src/App.tsx)
- Runtime entrypoint and CSS bootstrap: [src/main.tsx](src/main.tsx)
- Main game state and actions: [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts)
- Pure bingo rules and win detection: [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts)
- Logic test coverage baseline: [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts)
- Question pool and free-space text: [src/data/questions.ts](src/data/questions.ts)
- Shared domain types: [src/types/index.ts](src/types/index.ts)

## Project Conventions (Important)
- Keep game rules pure in utilities. UI logic belongs in components/hooks, not in [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts).
- Keep board semantics stable: 5x5 board, center free space at index 12, free space is always marked.
- Prefer extending tests in [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts) when changing board generation, marking, or bingo detection.
- Persisted game state lives in localStorage via [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts) with a versioned payload. If storage shape changes, bump the storage version and keep validation strict.
- Avoid introducing side effects inside pure array transforms in game logic.

## Styling Notes
- Tailwind v4 is configured through CSS in [src/index.css](src/index.css) using `@theme` tokens.
- Prefer reusing existing theme tokens before adding new colors.

## Documentation (Link, Don't Duplicate)
- Main project overview: [README.md](README.md)
- Contribution/legal process: [CONTRIBUTING.md](CONTRIBUTING.md)
- Workshop guide and lab flow: [workshop/GUIDE.md](workshop/GUIDE.md)
- Docs site assets: [docs/index.html](docs/index.html)

## Safe Change Workflow for Agents
1. Read affected files and nearby tests first.
2. Make focused edits.
3. Run the narrowest relevant checks first, then full gates (`lint`, `test`, `build`).
4. Keep changes small and easy to review.
