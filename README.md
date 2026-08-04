# ShadowLoft

A high-desert night-culture salon: music, art, essays, interviews, and Jack Nightshade broadcasts, rendered in a Southwestern Aubrey Beardsley-inspired noir.

## Publish

This repository is designed for GitHub Pages. In **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.

## YouTube control room

Open `admin.html` to authenticate and configure a YouTube channel, playlist, or video. Because GitHub Pages is static, the configuration is stored only in that browser's `localStorage`; it is not a secure, global CMS. For a production control plane, move authentication and configuration to a server-side service such as a Cloudflare Worker with Access and KV/D1.

Channel IDs begin with `UC`. ShadowLoft converts a channel ID to its uploads playlist for embedding.
