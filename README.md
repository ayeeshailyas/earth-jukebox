# Earth Information Jukebox

Earth Information Jukebox is an accessible, browser-based sonification experience
for exploring changing Earth imagery. It turns the colours and motion of an
image into a live musical response, allowing visitors to see, hear, and explore
environmental patterns together.

The project was built by **Greenbyte Explorers** for the **NASA Space Apps
Challenge 2026**. The experience is designed around NASA Earth Information
Center imagery, with procedural visuals available when a source video is not
present.

## Features

- Interactive Earth visualization with video and procedural fallback visuals.
- Three sonification tracks:
  - **Change in Night Lights (2012–2023)**
  - **Sea Surface Currents & Temperature**
  - **ISS Lightning Events (2017–2023)**
- Year selection that seeks to the corresponding point in a track's date range.
- Region filtering for global, northern, equatorial, and southern areas.
- Live audio generated in the browser with Tone.js.
- Audio-reactive visualization bars.
- Volume, mute, and playback-speed controls from `0.5x` to `2x`.
- Live text descriptions for screen-reader users.
- Keyboard controls and screen-reader-friendly status announcements.
- Responsive dark interface built with Tailwind CSS.

## How it works

The player samples each rendered video or canvas frame and extracts a small set
of visual measurements:

| Visual signal | Musical response |
| --- | --- |
| Cool or blue pixels | Deeper synth-pad notes |
| Warm or red-yellow pixels | Higher melodic notes |
| Overall brightness | Volume and filter brightness |
| Sudden frame-to-frame change | Bell-like chime |
| Selected track | Instrumentation, rhythm, panning, and thresholds |

Notes are selected from a C-major pentatonic scale so that the generated layers
remain harmonious. Audio is created only after the user starts playback, in line
with browser audio autoplay restrictions.

## Requirements

- Node.js 20.9 or newer
- npm
- A modern browser with Canvas, Web Audio, and Speech Synthesis support

## Getting started

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/ayeeshailyas/earth-jukebox.git
   cd earth-jukebox
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

The main player is available at
[http://localhost:3000/jukebox](http://localhost:3000/jukebox).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |

## Deploying to Vercel

This repository includes [`vercel.json`](vercel.json) with the Next.js build
commands and baseline security response headers.

### Deploy from GitHub

1. Push the repository to GitHub.
2. In the [Vercel dashboard](https://vercel.com/new), select **Add New Project**
   and import the repository.
3. Keep the detected **Next.js** framework and the repository root as the
   project root.
4. Click **Deploy**. No environment variables are required by the current app.

Vercel uses `npm ci` and the committed `package-lock.json` to install the exact
dependency versions. The project declares Node.js `20.9.0` or newer, matching
the supported Next.js 16 runtime.

### Deploy with the Vercel CLI

```bash
npm install --global vercel
vercel login
vercel
vercel --prod
```

Do not add API keys or other secrets to the repository. If future features need
secrets, add them in Vercel Project Settings under **Environment Variables**
and read them only on the server.

## Optional source videos

The player expects same-origin MP4 files at the following paths:

```text
public/datasets/night_lights.mp4
public/datasets/sea_temp.mp4
public/datasets/lightning.mp4
```

If one of these files is missing or cannot be loaded, the player automatically
uses a procedural canvas animation for that track. This keeps the audio and
interaction available without requiring large media files in the repository.

Same-origin media is recommended because the player samples video frames with
`CanvasRenderingContext2D.getImageData()`. Cross-origin media without the
appropriate CORS headers can make the canvas unreadable.

See [`public/datasets/README.md`](public/datasets/README.md) for the short media
placement reference.

## Project structure

```text
app/
  page.jsx                 Landing page
  jukebox/page.jsx         Interactive player
  about/page.jsx           Sonification explanation and track information
  accessibility/page.jsx   Keyboard and accessibility guide
  layout.jsx               Shared layout and navigation
  globals.css              Global styles
components/
  Nav.jsx                  Site navigation
lib/
  analyzer.js              Frame sampling and image metrics
  engine.js                Tone.js instruments and track presets
  fallback.js              Procedural visual animations
public/
  main.png                Landing-page artwork
  datasets/               Optional source media
```

## Player controls

- **Play/Pause**: Start or stop the visual and audio experience.
- **Previous/Next track**: Switch between the three track presets.
- **Selected Year**: Seek within the selected track's supported date range.
- **Region**: Analyze the whole frame or one of the three vertical regions.
- **Volume**: Adjust the master output level.
- **Speed**: Cycle through `0.5x`, `1x`, `1.5x`, and `2x`.
- **Mute**: Silence the master output without stopping analysis.

### Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| `Space` | Play or pause |
| `Left Arrow` | Previous track |
| `Right Arrow` | Next track |
| `Tab` / `Shift+Tab` | Move between controls |
| `Enter` or `Space` on a button | Activate the focused button |

The player avoids treating Space and the arrow keys as global shortcuts while a
form control is focused, so keyboard input does not interfere with selects,
sliders, or buttons.

## Accessibility

Accessibility is part of the core experience rather than an add-on:

- The visualization canvas has a descriptive accessible label.
- Audio-bar graphics are hidden from assistive technology because the live text
  description provides their meaning.
- What is being heard is announced through a polite live region.
- Live descriptions are exposed through a polite status region for screen-reader
  users.
- Controls are operable with a keyboard and include accessible labels.
- Playback speed, volume, and mute support different listening needs.
- The dedicated accessibility guide is available at
  [`/accessibility`](app/accessibility/page.jsx).

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page and project introduction |
| `/jukebox` | Interactive visualization and sonification player |
| `/about` | Explanation of the pixel-to-sound mapping and tracks |
| `/accessibility` | Accessibility features and keyboard guide |

## Troubleshooting

### The page shows procedural visuals

This is expected when the matching file is not available at the exact path
listed in [Optional source videos](#optional-source-videos). Confirm the
filename, extension, and location under `public/datasets/`, then refresh the
page.

### There is no sound

Click **Play** first. Browsers generally block Web Audio until it is started by
a user gesture. Also check the volume slider, mute button, operating-system
volume, and browser tab permissions.

### A video loads but the analysis does not work

Use a same-origin file or configure valid CORS headers. Canvas pixel sampling
can be blocked when a video comes from another origin without CORS support.

### The development page looks stale

Stop and restart the development server, then refresh the browser. If the
problem persists, remove the generated `.next` directory and run
`npm run dev` again.

## Technology

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 18
- [Tone.js](https://tonejs.github.io/) 15
- [Tailwind CSS](https://tailwindcss.com/) 3
- HTML Canvas and Web Audio APIs

## Contributing

1. Create a feature branch.
2. Make a focused change that preserves the accessible player experience.
3. Run `npm run build` before opening a pull request.
4. Describe any new media requirements, browser limitations, or interaction
   changes in the pull request.

## Credits

Built by **Greenbyte Explorers** for the NASA Space Apps Challenge 2026.
Imagery is intended to come from the NASA Earth Information Center. Check the
terms and attribution requirements for any source media before redistributing
it with the project.
