# 🎧 Music Player Web App

A responsive, animated, dark-themed music player built with React, Vite, Tailwind CSS, and Framer Motion.
Includes audio playback engine, visualizer, song controls, and smooth UI animations.

---

## Screenshot

![Music player UI](/public/player-screenshot.PNG)

---

## 🚀 Live Demo

https://hencci-music-player.netlify.app

---

## ✨ Features

- 🎵 Play / Pause songs
- ⏭ Next / Previous track
- 📊 Real-time progress bar
- 🔊 Volume control
- 🎨 Animated artwork transitions
- 📈 Visualizer animation
- 📱 Fully responsive design
- 🌙 Modern dark UI
- ▶ Auto-play next song when current ends
- ⏯ Resume playback from paused position

---

## 🧠 Architecture

```css
src/
  api/            → Mock song API
  components/
    Player/
      Artwork.tsx
      Controls.tsx
      ProgressBar.tsx
      VolumeControl.tsx
      Visualizer.tsx
      Player.tsx
  hooks/
    useAudioPlayer.ts
    useVisualizer.ts
  types/
    song.ts
  App.tsx
```

---

## 📦 Installation

```bash
git clone git clone https://github.com/hencci/music-player.git
cd music-player
npm install
npm run dev
```

---

## 🧾 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Henry Moses

- [GitHub](https://github.com/hencci)
- [LinkedIn](https://linkedin.com/in/henry-orlu-moses-78bb74286)
