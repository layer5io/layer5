# Mascot Five — Pose Index

This is the single source of truth for which Five pose to use in a hero image. There is no
separate keyword-matching script — **you** (the model executing the skill) read this table at
Step 6, pick the pose whose description best fits the post's topic and tone, and pass its SVG
path straight to `--five-pose`. A human reading the post's title/angle and skimming this table
would land on the same pick most of the time; that's the bar.

All files live under `assets/mascot-five/SVG/<file>`, relative to this skill's root. Poses are
vector only, and deliberately so: the generator inlines their paths into the hero SVG, so a raster
pose cannot be composited at all. A parallel `PNG/` mirror used to exist for "quick visual
reference"; nothing read it, it duplicated 1.3MB into the repo, and passing one of its paths to
`--five-pose` failed with a UTF-8 decode error. It is gone, and the generator now rejects a
non-SVG pose with an explanation instead of a traceback.

Ten further files (`Artboard 5/8/13/16/18/20/22/25/35/38.svg`) were byte-identical copies of the
descriptively named poses below and have also been removed. Every remaining file is a distinct
pose, and all 41 are listed here.

**How to pick:** scan the Tags column for the post's theme first; if nothing matches well, prefer
`climbing-stairs` as the neutral default (plain forward motion, no props or logos to clash with an
unrelated topic) rather than picking something thematically forced. Don't reuse the same pose
across back-to-back posts if you can help it — the point of this collection is variety.

**Blank signage:** two poses have genuinely empty surfaces you can drop post-specific text or a
logo onto via `--sign-text` (see Step 6 in SKILL.md for the exact flag). No other pose has usable
blank space — the rest either have no signage at all or already have a Layer5/Meshery logo baked
into the illustration, which must never be replaced or covered.

## Named / activity poses

| ID                     | SVG path                                                                               | Description                                                    | Tags                                                                                                                              | Logo baked in          | Blank signage |
| ---------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------- |
| means-business         | `SVG/layer5-five-mascot-means-business.svg`                                            | Cigar, tie, "5" briefcase, thumbs up - playful exec caricature | enterprise, business, confident, executive humor (not a neutral default - the cigar reads strongly, use only when that tone fits) | subtle "5" (briefcase) | no            |
| caffeine-coffee        | `SVG/caffiene-coffee-tea-cup-layer5-logo.svg`                                          | Holding a steaming mug, casual gesture                         | coffee break, casual, community, day-in-the-life, engineer culture, morning                                                       | Layer5 (on mug)        | no            |
| climbing-stairs        | `SVG/climbing-stairs-progress-moving-forward-upward-success-working-hard-diligent.svg` | Jogging up a staircase, motion lines                           | progress, growth, momentum, upgrade, roadmap, scaling, milestone, onboarding                                                      | none                   | no            |
| navigating-lost        | `SVG/navigating-lost-direction-sign-with-layer5-logo.svg`                              | Scratching head, confused, facing a directional signpost       | getting started, choosing a path, decision, comparison, troubleshooting, "which one do I pick"                                    | Layer5 (on sign)       | no            |
| paper-sign-poster      | `SVG/paper-sign-poster-board-with-layer5-logo.svg`                                     | Holding up a poster with the Layer5 wordmark                   | announcement, release, cta, call-to-action, sign-up, presenting                                                                   | Layer5                 | no            |
| pondering              | `SVG/pondering-wondering-questioning-confused-thinking.svg`                            | Hand on chin, question mark overhead                           | troubleshooting, debugging, root cause, why, incident, postmortem, deep-dive, explainer, FAQ                                      | none                   | no            |
| race-finish-line       | `SVG/race-racing-finish-line-first-place-with-layer5-logo.svg`                         | Sprinting toward a Layer5 finish-line banner                   | performance, benchmark, speed, release, launch, milestone, winning, results, comparison                                           | Layer5                 | no            |
| sign-poster-meshery    | `SVG/sign-poster-board-with-meshery-logo.svg`                                          | Holding up a framed board with the Meshery logo                | meshery, announcement, feature release, showcase, presenting                                                                      | Meshery                | no            |
| skateboard-fast        | `SVG/skateboard-fast-with-meshery-logo.svg`                                            | Riding a Meshery-branded skateboard, motion lines              | fast, lightweight, developer experience, quick start, agility, ease of use                                                        | Meshery                | no            |
| speaking-speech-bubble | `SVG/speaking-speech-bubble-with-meshery-logo.svg`                                     | In a tie, finger raised, speech bubble with Meshery logo       | announcement, talk, conference, kubecon, interview, podcast, webinar, community update                                            | Meshery                | no            |
| working-rake           | `SVG/working-holding-rake-tool-stalwart-work-ethic-steadfast.svg`                      | Holding a rake over one shoulder, calm                         | maintenance, cleanup, technical debt, operations, reliability, housekeeping, diligence, upkeep                                    | none                   | no            |

## Generic poses

| ID                      | SVG path              | Description                                                              | Tags                                                                                              | Logo baked in          | Blank signage                                                                    |
| ----------------------- | --------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------- |
| juggling-balls          | `SVG/Artboard 2.svg`  | Juggling Layer5-pattern balls in a circle                                | juggling, multitasking, complexity, balancing priorities, orchestration                           | Layer5 (pattern motif) | no                                                                               |
| meditating              | `SVG/Artboard 3.svg`  | Cross-legged, eyes closed, calm                                          | calm, stability, reliability, mindfulness, patience, zen, steady-state                            | none                   | no                                                                               |
| pointing-at-sign        | `SVG/Artboard 4.svg`  | Standing beside a Layer5 arrow signpost, pointing                        | direction, guide, pointing the way, getting started, recommendation                               | Layer5                 | no                                                                               |
| laptop-working          | `SVG/Artboard 6.svg`  | Seated at a laptop showing the Layer5 wordmark, working                  | coding, developer, hands-on, IDE, terminal, engineering, building, tutorial                       | Layer5 (on screen)     | no                                                                               |
| launching-rocket        | `SVG/Artboard 7.svg`  | Throwing a Layer5-branded rocket, running                                | launch, announcement, release, speed, big-news, liftoff                                           | Layer5                 | no                                                                               |
| tossing-ball            | `SVG/Artboard 9.svg`  | Tossing a single Layer5-pattern ball overhead                            | easy, effortless, simple, lightweight, quick win                                                  | Layer5 (pattern motif) | no                                                                               |
| hourglass               | `SVG/Artboard 10.svg` | Holding an hourglass                                                     | time, latency, deadline, waiting, timeout, patience, countdown, time-sensitive                    | none                   | no                                                                               |
| business-thumbsup       | `SVG/Artboard 11.svg` | Tie, briefcase, cigar, thumbs up                                         | enterprise, professional, confident, endorsement, approval, production-ready                      | subtle "5" (briefcase) | no                                                                               |
| running-with-sign       | `SVG/Artboard 14.svg` | Running fast carrying a Meshery placard                                  | fast, speed, agility, meshery, quick, momentum                                                    | Meshery                | no                                                                               |
| piggyback-stairs        | `SVG/Artboard 15.svg` | Carrying another Five piggyback up stairs, holding a Layer5 sign         | teamwork, mentorship, helping, support, onboarding, community help                                | Layer5                 | no                                                                               |
| key-and-shield          | `SVG/Artboard 17.svg` | Holding a key up to a padlock/shield                                     | security, access control, authentication, encryption, unlock, protect                             | none                   | no                                                                               |
| kicking-ball-to-friend  | `SVG/Artboard 19.svg` | Kicking a Layer5-pattern ball to a smaller Five                          | collaboration, teamwork, community, sharing, pass-it-on, mentoring                                | Layer5 (pattern motif) | no                                                                               |
| team-sign               | `SVG/Artboard 21.svg` | Two Fives together holding a Layer5 sign                                 | community, team, partnership, together, collaboration, pair (two-figure composition)              | Layer5                 | no                                                                               |
| blank-signpost          | `SVG/Artboard 23.svg` | Standing on a grassy mound, holding a **blank** wooden signpost overhead | generic announcement, custom message, placeholder                                                 | none                   | **yes — sign board, large, top-center**                                          |
| meshery-sign-tilted     | `SVG/Artboard 24.svg` | Holding up a tilted framed Meshery sign                                  | meshery, announcement, presenting, showcase                                                       | Meshery                | no                                                                               |
| walking-to-meshery-sign | `SVG/Artboard 26.svg` | Walking with a backpack toward a Meshery road sign                       | getting started, onboarding, journey, adoption, migration, exploring meshery                      | Meshery                | no                                                                               |
| magnet-pulling-logo     | `SVG/Artboard 27.svg` | Reaching out with a horseshoe magnet, pulling in the Layer5 logo         | attraction, adoption, community growth, drawing users in, gravity                                 | Layer5                 | no                                                                               |
| hanging-from-bar        | `SVG/Artboard 28.svg` | Hanging from a bar, worried expression                                   | struggling, hanging on, stress, tough situation, endurance, incident                              | none                   | no                                                                               |
| mirror-reflection       | `SVG/Artboard 30.svg` | Looking at own reflection in a mirror                                    | reflection, introspection, review, retrospective, observability, self-assessment, monitoring      | none                   | no                                                                               |
| recliner-meshery-sign   | `SVG/Artboard 32.svg` | Relaxing in a recliner holding a Meshery sign                            | relaxed, ease, comfort, low-maintenance, effortless operations, downtime                          | Meshery                | no                                                                               |
| open-door               | `SVG/Artboard 33.svg` | Standing beside an open door, gesturing forward                          | opportunity, new beginning, open access, invitation, entry point, welcome                         | none                   | door panel is empty but not a natural text surface — not recommended for overlay |
| presenting-to-group     | `SVG/Artboard 34.svg` | Presenting a Meshery slide to a seated group at a table                  | presentation, meeting, team review, community talk, roadmap review, workshop                      | Meshery                | no                                                                               |
| blank-book              | `SVG/Artboard 36.svg` | Two Fives holding open a **blank** book                                  | documentation, learning, tutorial, guide, knowledge base, changelog                               | none                   | **yes — open book pages, center**                                                |
| spray-canister          | `SVG/Artboard 37.svg` | Spraying from a Layer5 canister/extinguisher                             | fix, remediate, put out fires, incident response, resolve, troubleshoot                           | Layer5                 | no                                                                               |
| cheering                | `SVG/Artboard 40.svg` | Arms up cheering under the Meshery wordmark                              | celebration, success, milestone, achievement, launch, win, excitement                             | Meshery                | no                                                                               |
| bursting-through        | `SVG/Artboard 41.svg` | Bursting head-first through a torn opening beside the Layer5 wordmark    | breakthrough, launch, arrival, big reveal, breaking news, general availability (landscape-framed) | Layer5                 | no                                                                               |
| scythe-sunhat           | `SVG/Artboard 46.svg` | Holding a scythe, wearing a sun hat, calm                                | cleanup, deprecation, sunset, retiring old code, maintenance, end-of-life                         | none                   | no                                                                               |
| headphones-relaxing     | `SVG/Artboard 47.svg` | Reclining with headphones on, listening to music                         | relaxed, downtime, background processing, passive monitoring, chill, off-hours                    | none                   | no                                                                               |
| leaning-back            | `SVG/Artboard 48.svg` | Leaning back, stretched out, relaxed                                     | relaxed, easygoing, low-effort, casual, taking it easy                                            | none                   | no                                                                               |

## Excluded from rotation

| ID          | SVG path              | Why excluded                                                                                                                                                     |
| ----------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| driving-car | `SVG/Artboard 31.svg` | Five is a small passenger inside a car illustration, not a standalone figure — looks wrong at the large mascot treatment this skill uses. Don't select this one. |

## How a pose gets sized

The generator scales and places a pose from its **measured visible ink**, not its Illustrator
artboard, using `assets/mascot-five/pose-bounds.json`. This matters because artboards are not
tight: `pondering` paints 113 units of ink inside a 529-unit-wide viewBox (19% fill), so sizing by
artboard rendered it roughly four times smaller than a pose that fills its box. That is why mascot
scale used to wobble from post to post.

## Adding new poses

1. Drop the SVG into `assets/mascot-five/SVG/`. Vector only — no raster poses.
2. Run `python3 scripts/measure_pose_bounds.py` to refresh `pose-bounds.json`. Skipping this is not
   fatal, but the generator will warn and fall back to artboard sizing for that pose.
3. Add a row here with a real description and tags — an untagged pose won't get picked, because
   nothing will match it in Step 6.
4. If it has genuinely blank space suited to custom text, note it in the Blank signage column,
   calibrate a bounding box in `scripts/mesh_palette.py` (`SIGN_TEXT_ZONES`), and register the
   filename in `POSE_FILENAME_TO_SIGN_ZONE` in `scripts/generate_hero_image.py` the same way
   `blank-signpost` and `blank-book` are.
