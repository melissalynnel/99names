# 99 Names of Allah

A static reflection app for studying the 99 Names of Allah, taking personal notes, and connecting selected names to relevant Spotify episodes from *The Names — Shaykh Mikaeel Smith* playlist.

## What It Does

- Lists 99 Names of Allah alphabetically in a scrollable sidebar.
- Shows a detail view for the selected name with its short meaning.
- Provides reflection fields for:
  - Extended meaning
  - Recognizing the name's effects in creation
  - Embodying the ethical and spiritual implications of the name
  - Additional notes
- Saves notes automatically while typing using `localStorage`.
- Marks names with saved notes using a distinct blue glass highlight.
- Shows linked Spotify episodes when a matching episode exists.
- Uses a mobile hamburger menu for the names list.

## Design

The UI uses a deep blue gradient background, gold sparkles, gold neon hover states, transparent glass panels, and a custom cursor inspired by related Serenity / Personal Dashboard styling.

## Storage

Notes are currently stored locally in the browser via `localStorage`.

That means:

- Notes persist in the same browser on the same device.
- Notes do not sync automatically between phone and computer.
- Clearing browser site data may remove saved notes.

A future version could use Supabase or another backend for account-based syncing across devices.

## Spotify Links

The app includes Spotify links for the playlist items that could be extracted from the public Spotify page data. Names without a matching episode simply hide the Spotify button.

## Running Locally

This is a plain static site. Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Files

- `index.html` - app markup
- `styles.css` - layout, glassmorphism, responsive styles, cursor and sparkle visuals
- `script.js` - names data, localStorage persistence, Spotify mapping, mobile menu behavior

## Deployment

This can be deployed directly with GitHub Pages because it has no build step.
