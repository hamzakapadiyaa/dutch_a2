# Product backlog — path to A2 exam readiness

North star: a beginner is ready to pass the A2 inburgeringsexamen.
Everything below is scored against that, not against "nice to have."

## 1. Readiness measurement (does the app know if you're actually ready?)
- [ ] Single composite "exam readiness %" on Home, not 5 separate bars — one number the user watches go up.
- [ ] Weight the composite by how exam-realistic the practice was (mock > chapter test > single exercise) rather than treating all attempts equally.
- [ ] Decay old scores over time — `levelFor()`/`examReadiness()` (exam-ui.js) use best-of-recent with no time decay, so a good score from a month ago still counts as "ready" today.
- [ ] Confidence calibration: ask "how sure were you?" after each answer and surface high-confidence wrong answers — the dangerous blind spots on exam day.
- [ ] A pre-exam "mock exam day" mode: all 5 parts back-to-back, timed, no pausing, no hints — nothing currently simulates the real exam morning (parts are always practiced separately).
- [ ] Days-until-exam countdown if the user enters a target exam date, with the readiness number and plan framed against that deadline instead of open-ended.

## 2. Spreken (speaking) — currently weakest feedback loop
- [ ] Self-rated only (exam-ui.js speakItem/showModel) — add lightweight auto-checks: minimum length, presence of "omdat/want" when the question demands a reason, keyword overlap with the model answer.
- [ ] Browser speech-to-text (Web Speech API) to transcribe the recording and compare against expected key phrases, instead of pure self-grading.
- [ ] Playback speed control / replay the model answer multiple times before self-rating.

## 3. Schrijven (writing) — honor-system checklist risk
- [ ] Checklist is self-ticked with zero verification (exam-ui.js writeItem) — add objective checks: word count minimum, required content words from the prompt, all form fields filled.
- [ ] Grammar/spelling sanity pass before showing the model answer, so users see their own mistakes first.
- [ ] Track common writing error patterns over time ("you keep forgetting -en verb endings"), the way weak words are tracked.

## 4. Vocabulary retention quality
- [ ] Occasional surprise reviews of "mastered" (stage 5) words to catch false mastery — current SRS doesn't retest long intervals.
- [ ] A "cumulative review" mode a few weeks out that forces review across all chapters' words, not just the most-started topic.
- [ ] Expose leech words (repeatedly wrong, never sticking) distinctly from normal weak words — needs a different fix (mnemonic/example sentence) than ordinary review.

## 5. Exam content coverage & realism
- [ ] Listening uses `speechSynthesis` TTS with two voices distinguished by pitch when only one Dutch voice is available — real exam audio has natural speakers/accents/background noise, which affects listening-skill transfer.
- [ ] KNM (civics) content is static trivia — no mechanism to flag outdated facts (laws/numbers change) over time.
- [ ] Verify mock timer lengths (`info.time`) actually match real DUO exam timing per part.

## 6. Study habits / engagement
- [ ] No reminders/notifications — streak is tracked but nothing nudges the user before it breaks.
- [ ] 6-week plan is a static template (exam-ui.js renderPlan) assigning topic/skill by day index — doesn't adapt to what the user is actually weak in. Should dynamically pull the lowest-readiness part/topic forward.
- [ ] Let the user set an actual exam date and have the whole plan compress/stretch to fit it.
- [ ] Plan checkboxes are manual ticks with no link to whether the task was actually completed.

## 7. Risk: data loss
- [ ] All progress lives in `localStorage` by default; cloud sync is optional and the Firebase key is embedded client-side (sync.js) — confirm Firestore rules actually scope `progress/{uid}` to its own user.
- [ ] No automatic backup reminder — `exportData()` exists but is manual.
- [ ] No warning before `resetAll()`'s `confirm()` that export-first is an option.

## 8. Technical / platform
- [ ] No PWA manifest or service worker — can't install or use offline, which matters for a phone-based daily habit.
- [ ] Sync conflict resolution is "replace entirely" (sync.js resolveCloudVsLocal) — a merge (union of word progress, best exam scores) would avoid the heavy-handed overwrite choice.

## 9. Onboarding / personalization
- [ ] No placement/diagnostic test for a user who already knows some Dutch — everyone starts at chapter 1 regardless of actual level.
- [ ] No way to self-report "I already know this topic" to skip ahead without grinding through it.

## 10. Source content expansion — Nederlands in gang (4e druk)
- [ ] User has access to the book's own materials via nt2school.nl (https://www.nt2school.nl/nl/lesmateriaal/nederlands-in-gang-4e-druk-) — the app's existing "NiG" chapters/topics in `words.js` and `exam.js` are already modeled after this book, so this is the natural source to pull more/better content from rather than inventing new exercises from scratch.
- [ ] Pull additional chapter vocabulary lists to fill out topics that are currently thin, and cross-check existing word lists against the book for gaps or mistranslations.
- [ ] Pull additional lezen/luisteren texts, knm questions, schrijven prompts, and spreken situations per chapter so each chapter has more than one exercise per skill (currently several chapters are light on exam.js items per skill/tier).
- [ ] Preserve the existing tiering scheme (tier 1-5, `chOf`/`tierOf` in exam-ui.js) when adding new items, so new content slots into the graduated-difficulty system instead of needing its own logic.
- [ ] Check licensing/terms of nt2school.nl material before including it verbatim — may need to paraphrase/adapt rather than copy if redistribution isn't permitted.

---

### Suggested starting point
1. One composite readiness number (#1)
2. Speaking & writing feedback (#2, #3) — weakest signal-to-actual-skill link today
3. Adaptive plan (#6)
