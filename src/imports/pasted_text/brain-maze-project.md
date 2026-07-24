MIND MAZE: Human Emotion in an Artistic Digital Space

An immersive, browser-based digital sanctuary that invites users into a shared journey through the human brain, traveling door-by-door through cinematic emotional environments. An interactive art experience, direct from your device — no ticket, no travel, no barrier to entry.
THE IDEA
One-Sentence Hook

Mind Maze is a browser-based installation where anyone in the world can walk door-by-door through nine emotional environments synthesized directly from how real people describe those feelings—requiring no ticket, no travel, just a device and a willingness to look inward.
THE MISSION

This project was inspired by the Hospital of Emotions exhibition in Los Angeles—an installation I followed closely through others' accounts, but was never able to experience firsthand. Not living in LA, every time I watched someone else's video of walking through those rooms, I felt the exact gap this project is built to close: the thing that makes spatial art powerful—being entirely surrounded by a feeling instead of reading about it—is currently restricted by geography and wealth.

The original physical exhibition assembled a different artist for each room, bringing individual perspectives together in one physical venue. Mind Maze takes that structural framework and opens it up to the community. Instead of an individual artist’s isolated interpretation of an emotion, I am pulling from collective, anonymous human voices—real people describing what an emotion actually feels like to them, sourced from psychology research and unfiltered community language.

Mind Maze treats the web browser not as a secondary gallery space, but as the primary destination. Google Flow acts as our translator, transforming this raw human data into volumetric, cinematic sanctuaries. The result is a continuous loop of empathy: the community shares their internal worlds, creative technology shapes them into a shared space, and the gallery is given back to the web for free, borderless access.
THE VISITOR EXPERIENCE

Mind Maze is structured as a continuous, first-person immersive digital walkthrough. Visitors aren't clicking through a grid of video clips or navigating menus; they are physically traversing a continuous, spatial architecture directly in their browser.

The topology of the brain becomes a building. Visitors move through a fixed sequence of nine emotional rooms. The progression is deliberately designed as a profound psychological arc, tracking the escalation, collapse, and eventual healing of the human psyche: Joy, Envy, Greed, Anger, Fear, Sadness, Nostalgia, Love, and Hope.

[Brain Hub] → Joy → Envy → Greed → Anger → Fear → Sadness → Nostalgia → Love → Hope

Joy establishes the light baseline; Envy, Greed, and Anger escalate wanting into visceral frustration; Fear tips that tension into raw vulnerability. Sadness forms the quiet, rock-bottom floor of the experience, which immediately triggers Nostalgia—the mind's natural retreat into past warmth as a coping mechanism. This memory of safety acts as the bridge that allows the visitor to risk opening up to Love, before finally exiting into the expansive warmth of Hope.

A visual map is shown at the central brain hub, laying out this order clearly so the journey reads as navigable and intentional rather than disorienting from the first moment.
LOOK & FEEL
Color & Texture Language

The hub itself is a 3D pink brain composed of a clean, vector-line topology. A single doorway marked "Enter" sits at its threshold. Inside the rooms, color, lighting, and texture are tied directly to the community's sensory language:

    Joy: High-transparency, sun-bleached yellow washes. A single, sharp beam of light cutting cleanly across a soft, blurry horizon.

    Envy: Murky, reaching greens. An environment of suffocating, shifting geometries that stretch outward but never fully resolve.

    Greed: A space of heavy, mirrored distortions. A low metallic hum sits beneath the faint sound of unresolving applause, where the environment's textures warp and sour the closer the viewer looks.

    Anger: Deep crimson and volatile oranges in direct, combustible contrast with sharp lime green and chartreuse line-work.

    Fear: Tight, high-contrast shadow spaces. Granular, ink-washed textures that create a subtle, heavy atmosphere of being watched without a clear source.

    Sadness: Deep, solitary indigo and ink blues. Black ink motifs moving with real gravity down the walls, referencing the quiet, drawn-out stillness of an empty pool at night—loneliness rendered as negative space.

    Nostalgia: Bold, warm tones slightly faded and bled out at the edges. Visual motifs reminiscent of old media, paired with the slow, rhythmic click of a home-video projector.

    Love: Soft, luminous pinks and open, radiating reds. Textures that evoke an editorial, lace-like delicacy—built on the concept that softness is its own form of power.

    Hope: Warm champagne light breaking through an open, cloud-like architectural horizon. Glittering water textures and bright, expanding space that emphasizes connection over isolation.

Artistic Foundation

To ensure the aesthetic remains humble, human, and deeply honest, I will create a hand-drawn ink and color study for each room before generation begins. These physical illustrations will serve as the prompt seeds within Flow, ensuring the AI output honors a consistent, refined "Sketch & Wash" style rather than a generic or hyper-realistic digital look.
CRAFT APPROACH
Why AI and Google Flow are the Right Mediums

Emotion is fluid, volatile, and deeply subjective—it never holds still. If I were to build these nine environments using traditional, rigid 3D modeling, the spaces would reflect only a single, static point of view.

AI is the uniquely right medium for this project because it acts as a creative synthesizer. It allows me to take hundreds of diverse, fragmented, and even contradictory community interpretations of a single feeling and merge them into one fluid, cohesive visual experience. Because the resulting environments are built from a collective tapestry of real human voices rather than an isolated artistic guess, the final spaces possess a universal resonance, allowing the gallery to connect with a much wider, global audience.

Google Flow specifically is the exact creative engine that makes a solo-developer installation of this scale achievable within six weeks:

    Prompt Grounding via Personal Seeds: Feeding my hand-drawn ink and wash studies into Flow as structural seeds guarantees that the generated worlds remain grounded in a human, tactile aesthetic.

    Agentic Batch-Direction: Managing nine distinct visual worlds simultaneously is a massive scaling challenge. Flow's agentic workspace allows me to apply global, micro-level adjustments—such as shifting lighting direction or shadow contrast—across an entire batch of assets at once. I can iterate on the rooms in parallel rather than hand-tuning clips in isolation.

    Volumetric Texturing with Veo: Using Flow's underlying Veo models, I will generate high-fidelity, seamless 10-second video loops.

WebGL Frontend Pipeline

    The Enclosure: In the frontend, the visitor is positioned at the center of a Three.js SphereGeometry or custom curved room boundary. The seamless loops generated by Flow are projected onto the interior faces of this geometry using an optimized HTML5 <video> element as a live WebGL texture, transforming flat video into an enveloping spatial environment.

    Frictionless Interaction: Interactivity is intelligently pre-rendered, not generated live, ensuring the experience runs smoothly on any modern browser or device. The room feels responsive because custom WebGL shaders blend between pre-generated states (at rest, building, releasing) based on the user's mouse-look or trackpad movement.

Implementation Timeline

    Week 1: Research synthesis, mapping sourced emotional language to prompt parameters, and creating the hand-drawn ink/wash seed studies per room.

    Weeks 2–4: Generation and iteration in Flow—compiling and refining the seamless video textures and batch-directing environmental adjustments.

    Weeks 3–5 (Parallel): Building the Three.js/WebGL navigation, camera controls, and door-trigger systems.

    Week 5: Spatial sound design and static UI/ink motif asset compositing.

    Week 6: Performance optimization, mobile responsiveness profiling, and live deployment. (Stretch goal: Integrating a hand-tracking layer via MediaPipe for gesture-based interactions if time permits).

CLOSING

Mind Maze is not trying to replace what a physical art exhibition can do—it is trying to reach the people a physical exhibition cannot. By uniting collective human language, hand-drawn art, and the generative fluidity of Google Flow, this project opens up a digital sanctuary for shared reflection. Nine rooms, nine feelings, open to anyone with an internet connection.