# MIND MAZE
### Human Emotion in an Artistic Digital Space

A browser-based art installation that lets anyone walk door-by-door through nine cinematic rooms, each built around a different emotion. An interactive art experience, direct from your device — no ticket, no travel, no barrier to entry.

---

## SECTION 01 — THE IDEA & MISSION

**The Idea**

Mind Maze is a browser-based installation where anyone in the world can walk door-by-door through nine emotional environments synthesized directly from how real people describe those feelings, requiring no ticket, no travel, just a device and a willingness to look inward.

**The Mission**

This project was inspired by the Hospital of Emotions exhibition in Los Angeles, an installation I followed closely through social media but was never able to experience firsthand. Not living in LA, every time I watched someone else's video of walking through those rooms, I felt the exact gap this project is built to close. Being surrounded by a feeling instead of just reading about it is what makes that kind of art powerful — and right now, that experience is only available to people who live nearby or can afford to travel.

The original physical exhibition assembled a different artist for each room, bringing individual perspectives together in one venue. Mind Maze takes that same structure and opens it up to the community instead. Rather than one artist's interpretation of an emotion, each room is built from collective, anonymous human voices — real people describing what an emotion actually feels like to them, sourced from psychology research and unfiltered community language. All source material is used in aggregate and anonymized; no individual post, comment, or person is ever quoted or identifiable in the final work.

Google Flow takes that research and turns it into the actual environments — the lighting, the atmosphere, the motion of each room. The community shares how they experience a feeling, Flow helps build that into something you can walk through, and the finished piece goes back online for free, open to anyone.

---

## SECTION 02 — THE VISITOR EXPERIENCE

Mind Maze is a first-person walkthrough visitors experience directly in their browser. The landing page opens on the central brain hub — a 3D pink brain rendered as the site's entry point, with a single door marked "Enter" at its threshold. Visitors begin by clicking that door, which plays the first video: a first-person shot walking through the threshold into Joy.

**Nine Rooms. One Emotional Journey.**

```
[Brain Hub Launch Pad] → Joy → Envy → Greed → Anger → Fear → Sadness → Nostalgia → Love → Hope
```

Each room is its own single, continuous video clip generated in Flow — the camera walks in through the entry door, moves through the space revealing the room around it, and arrives at the exit door leading to the next emotion, where it comes to rest. As visitors watch, subtle cursor movement shifts the view slightly, giving each room a sense of physical presence rather than a flat, passive clip. Once the exit door is in frame, visitors click it to trigger the next room's video, which begins exactly where the last one left off.

The progression tracks the escalation, collapse, and eventual healing of the human psyche. Joy establishes the light baseline. Envy, Greed, and Anger escalate wanting into frustration. Fear tips that tension into raw vulnerability. Sadness forms the quiet, rock-bottom floor of the experience, which immediately triggers Nostalgia — the mind's natural retreat into past warmth as a coping mechanism. This memory of safety acts as the bridge that allows the visitor to risk opening up to Love, before finally exiting into the expansive warmth of Hope. A visual node map remains accessible at the brain hub, laying out this order clearly so the entire journey reads as navigable and intentional from the first moment.

**The Closing Wall**

Every room in Mind Maze is built from the community's language — real words from research and public discourse. The Closing Wall is where that goes both ways. After Hope, visitors reach a shared wall where they can leave one word, a short phrase, or a quick drawing describing how they're feeling, or which room resonated most. It joins everyone else's response on the same wall, so what visitors take in from the community on the way through, they add back to on the way out.

---

## SECTION 03 — LOOK & FEEL

Each room is its own cinematic space, built from real sensory language people use to describe that emotion. The visual style across the walkthrough comes from a dedicated moodboard for each room, locking in the lighting, tone, and composition before generation starts.

### JOY
**Color & Texture:** High-transparency, sun-bleached yellow washes.
**Environment:** A single, sharp beam of light cutting cleanly across a soft, blurry horizon.
**Audio:** Harmonic overtone series, C major, 528Hz root tone.

### ENVY
**Color & Texture:** Murky, reaching greens.
**Environment:** An environment of suffocating, shifting geometries that stretch outward but never fully resolve.
**Audio:** Dissonant minor 9th chord. Subtle metallic resonance.

### GREED
**Color & Texture:** A space of heavy, mirrored distortions.
**Environment:** A low metallic hum sits beneath the faint sound of unresolving applause, where the environment's textures warp and sour the closer the viewer looks.
**Audio:** High-frequency metallic shimmer. Unresolved dominant 7th chord. No decay.

### ANGER
**Color & Texture:** Deep crimson and volatile oranges in direct, combustible contrast.
**Environment:** Sharp lime green and chartreuse line-work cuts through volatile orange fields.
**Audio:** Distorted 60Hz hum. Percussive sub transients at irregular intervals.

### FEAR
**Color & Texture:** Tight, high-contrast shadow spaces.
**Environment:** Granular, ink-washed textures that create a subtle, heavy atmosphere of being watched without a clear source.
**Audio:** Infrasound 18Hz subliminal pulse. White noise overtone. No melody.

### SADNESS
**Color & Texture:** Deep, solitary indigo and ink blues.
**Environment:** Black ink motifs moving with real gravity down the walls — loneliness rendered as negative space. The quiet, drawn-out stillness of an empty pool at night.
**Audio:** Sub-bass drone, 174Hz. Room reverb 8.4s decay. No attack transient.

### NOSTALGIA
**Color & Texture:** Bold, warm tones slightly faded and bled out at the edges.
**Environment:** Visual motifs reminiscent of old media, paired with the slow, rhythmic click of a home-video projector.
**Audio:** Vinyl crackle texture layer. Faded major 6th chord, slow decay.

### LOVE
**Color & Texture:** Soft, luminous pinks and open, radiating reds.
**Environment:** Textures that evoke an editorial, lace-like delicacy — built on the concept that softness is its own form of power.
**Audio:** Cello harmonic sustain, A major. Breathing rhythm LFO, 0.2Hz.

### HOPE
**Color & Texture:** Warm champagne light breaking through an open, cloud-like architectural horizon.
**Environment:** Glittering water textures and bright, expanding space that emphasizes connection over isolation.
**Audio:** Rising major 7th arpeggio. Pure sine harmonics, 432Hz root. Sustained decay.

---

## SECTION 04 — CRAFT APPROACH

**01 / Why AI is the Right Medium**

Nine rooms means nine distinct emotional environments, each built from how real people describe that feeling rather than my own interpretation alone. Building that by hand in traditional 3D software isn't realistic in six weeks — each room would take weeks on its own, and I'd be working from a single point of view rather than the range of descriptions I'm pulling from research and community language. Flow solves two specific problems: it can generate a full environment — lighting, atmosphere, motion — directly from that source material, and its batch tools let me apply the same adjustment across all nine rooms at once instead of redoing each one by hand. That's what makes nine consistent, cohesive rooms feasible within six weeks — especially with the cohort's tool workshops and 1:1 mentor office hours to work through the harder technical problems as they come up.

**02 / The Toolkit & Pipeline**

- **Data Synthesis:** I map and organize hundreds of raw community descriptions and psychological research data points using custom workspaces to establish the foundational prompt architecture.
- **Visual Curation:** Before touching generative software, I translate this research into dedicated, curated moodboards for each room to lock down the exact lighting, environmental tone, and structural props.
- **Google Flow & Veo Production:** The finalized moodboards and community scripts are fed into Flow to batch-produce the cinematic spatial segments:
  - *Cinematic Camera Tracking:* For every emotion, I use Flow to generate one continuous, directed first-person shot — a scripted camera move, not something the user controls. It starts by moving through the entry door, sweeps through the room to reveal the environment, and comes to rest with the next emotion's door in frame.
  - *Video Production:* Flow's underlying Veo models handle the heavy rendering lift, outputting each room's finished walkthrough clip — seamless motion, lighting, and atmosphere baked directly into the video.

**03 / WebGL Frontend Engine**

- **Sequential Cinematic Playback:** Each room's Flow-generated video plays as a standard HTML5 `<video>` element within the browser interface — a directed shot the visitor watches, not a space they freely look around in. The camera movement is entirely pre-baked into the video itself.
- **Cursor Parallax:** As the visitor moves their mouse or trackpad, the video subtly shifts and crops in that direction — a lightweight 2.5D effect layered on top of playback. It doesn't allow a full look-around, but it gives the room a real sense of physical presence, so the space feels responsive to the visitor rather than purely passive.
- **Click-to-Continue Navigation:** When a room's video reaches its final frame, it holds on the next emotion's door. An interactive click-target is overlaid on that door in the frame; clicking it loads and plays the next room's video, continuing the walkthrough exactly where the last clip ended.
- **Seamless Sequencing:** Because each clip starts precisely where the previous one left off (same door, same framing), the transition between videos reads as one continuous walk through the exhibit rather than a series of separate clips.
- **The Closing Wall:** After Hope, visitors reach a shared canvas where they can type a word or phrase, or draw freely, using a lightweight HTML5 canvas input. Submissions are stored and displayed publicly on the same wall, so each new visitor sees the accumulated responses of everyone who came before them — a simple, persistent shared space rather than a private journal entry. Basic safeguards — a character limit and simple profanity filtering — keep the wall safe without requiring active moderation.

**04 / Anticipated Technical Risks & Mitigations**

- **Precise door placement on the final frame:** Since the exit door's click-target is tied to a fixed position in the video frame, each clip is generated and reviewed to confirm the door lands in a consistent, clearly clickable spot before that position is hard-coded into the frontend.
- **Seamless clip-to-clip continuity:** Each room's video is generated to end on the exact framing the next room's video begins with — same door, same angle — treated as a deliberate matching pass between clips, not left to chance.
- **Preloading for seamlessness:** The next room's video is preloaded while the visitor is still watching the current one, so clicking the door never stalls on load.
- **Full-tier generation:** Final assets are generated on the AI Ultra tier (via the program's included promo code) specifically to avoid visible watermarking on the finished art piece.
- **Early testing on higher-risk prompts:** Rooms with more sensitive imagery are prototyped early to confirm they generate cleanly before the rest of the pipeline depends on that visual direction.

---

## SECTION 05 — OPERATIONAL TIMELINE

**WK 01 — Research Synthesis**

- Map sourced emotional language · Define cinematic prompt parameters in Flow · Establish per-room visual direction · Finalize nine-room sequence · Prototype Fear and Greed early to confirm higher-risk prompts generate cleanly

**WK 02–04 — Generation & Iteration in Flow**

- Generate each room's video clip · Batch-direct environmental adjustments · Refine lighting, contrast & camera motion · Match each clip's ending frame to the next room's opening frame · Iterate rooms in parallel

**WK 03–05 — Frontend Build**

- Build the sequential video playback engine · Door click-target and click-to-continue system · Cursor parallax effect · Preloading for seamless transitions

**WK 05 — Sound & UI Compositing**

- Spatial sound design per room · Static UI asset compositing · Brain hub node map interface · Closing wall build (canvas input + shared display) · Final asset integration

**WK 06 — Testing, Optimization & Deployment**

- Full nine-room walkthrough test, start to finish · Performance optimization · Mobile responsiveness profiling · Live deployment
---

## SECTION 06 — RESULT

### OPEN TO THE WORLD

- Nine rooms, nine feelings
- Free, borderless access
- No ticket, no travel required
- Anyone with an internet connection

**Feasibility Note**

I'm not trying to replace what a physical exhibition can do. I'm trying to reach the people who can't get to one. Mind Maze takes real, collective human language and turns it into something you can walk through, built with Google Flow. Art that anyone can feel.