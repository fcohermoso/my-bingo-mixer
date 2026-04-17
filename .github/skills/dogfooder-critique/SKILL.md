---
name: dogfooder-critique
description: 'Critical dogfooding review for web apps and games. Use when evaluating UX, fun factor, engagement, or asking for brutal honest feedback (dogfooding, critique, review fun, feedback critico, probar app).'
argument-hint: 'What app or area should be dogfooded critically?'
user-invocable: true
disable-model-invocation: false
---

# Dogfooder Critique

Run a fair but direct product critique that measures both functional quality and real enjoyment.

## Default Mode
- Scope: project-local only (this repository).
- Critique style: ruthless for pre-launch quality control.
- Output language: Spanish.

## When To Use
- User asks to test if an app is fun, engaging, or launch-ready.
- User requests critical dogfooding feedback, brutal honesty, or UX critique.
- Team needs prioritized What/Why/Fix recommendations.

## Inputs
- Product intent or target scenario.
- Access to app (local URL, staging URL, or screenshots/code).
- Optional focus area: onboarding, retention, game loop, mobile, accessibility.

## Procedure
1. Understand intent before judging.
- Read README and key flow/logic files.
- Define the app's job to be done in one sentence.

2. Execute the full usage loop.
- Entry: first-screen clarity and activation.
- Happy path: complete the core flow end-to-end.
- Edge cases: try unusual actions and recovery states.
- Feedback/reward: validate emotional payoff and action confirmation.
- Exit/reset: verify restart and continuation behavior.

3. Score on two axes.
- Functional axis: correctness, stability, clarity.
- Joy axis: delight, tension, replayability, social pull.

4. Classify findings by priority.
- CRITICAL: breaks core mechanic or trust.
- HIGH: strongly harms engagement or intent fit.
- MEDIUM: polish/friction with visible impact.
- LOW: optional enhancements.

5. Report each finding in What/Why/Fix.
- What: concrete behavior or gap.
- Why: impact on intent, trust, or engagement.
- Fix: actionable next step with scope.

6. Close with reality check.
- State if app is functional only, fun and sticky, or launch-ready.
- Provide a short impact-oriented next-step plan.

## Decision Points
- If no clear intent exists: ask for target audience and success metric before deep critique.
- If app is pre-alpha: prioritize concept viability over polish.
- If app claims launch readiness: apply stricter standards and call out risk directly.
- If no runnable app is available: do code-informed critique and mark confidence as lower.

## Quality Checks
- Includes at least 2 validated strengths.
- Includes prioritized issues (not just a flat list).
- Every issue has What/Why/Fix.
- Separates functional quality from fun/engagement quality.
- States confidence and test coverage boundaries.

## Output Template
```markdown
## Dogfooder Assessment: <app>

Intent: <one sentence>

What works:
- <strength>
- <strength>

Critical gaps:
1. <What> / <Why> / <Fix>

High-priority improvements:
1. <What> / <Why> / <Fix>

Medium-priority polish:
1. <What> / <Why> / <Fix>

Reality check:
<is it fun and ready, or still just functional?>
```

## Notes
- Be direct and demanding. Prioritize truth over comfort.
- Prefer evidence from observed behavior over assumptions.
- Compare with known alternatives only when it clarifies opportunity.
