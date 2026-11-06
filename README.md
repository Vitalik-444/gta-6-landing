# GTA VI — Fan Portal

Unofficial fan portal for Grand Theft Auto VI: Leonida, Vice City, characters, official trailers, screenshot gallery, news and a live countdown to the November 19, 2026 release.

## Features

- Responsive cinematic landing page with parallax hero
- Character profiles and Leonida location guide
- Official Rockstar Games screenshots used across the hero, character, location, feature and gallery sections
- Four official GTA VI videos embedded directly on the page: Launch Trailer, An Extended Look, Trailer 2 and Trailer 1
- YouTube fallback links under every video in case playback is restricted by the browser, region or YouTube account settings
- Screenshot filters, lightbox navigation and countdown

## Tech Stack

React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React

## Installation

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Media sources

Screenshots are loaded directly from Rockstar Games' official media CDN. An internet connection is required for these images. Official media page: https://www.rockstargames.com/VI/media

Videos are embedded from the official Rockstar Games YouTube uploads. YouTube may restrict some videos from embedded playback; the visible YouTube links below each player provide a direct fallback.

## Copyright

This is an independent fan-made project. It is not affiliated with, endorsed by or connected to Rockstar Games or Take-Two Interactive. Grand Theft Auto VI and all related names, images and videos are the property of their respective owners.
