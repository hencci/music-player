import { useEffect, useRef, useState } from "react";
import type { Song } from "../types/song.ts";

/**
 * Central audio engine
 * Encapsulates all HTMLAudioElement logic
 */
export const useAudioPlayer = (queue: Song[]) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const currentSong = queue[currentIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!currentSong) return;

    audio.src = currentSong.audioUrl;
    audio.load();

    // ALWAYS resume playback when track changes if player was active
    if (isPlaying) {
      audio.play().catch((err) => console.error("Autoplay blocked:", err));
    }
  }, [currentSong, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress(audio.currentTime / audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const next = () => {
    setCurrentIndex((i) => (i + 1) % queue.length);
    setIsPlaying(true); // ensures autoplay continues
  };

  const prev = () => {
    setCurrentIndex((i) => (i - 1 + queue.length) % queue.length);
    setIsPlaying(true);
  };

  const seek = (value: number) => {
    audioRef.current.currentTime = value * audioRef.current.duration;
  };

  const changeVolume = (value: number) => {
    audioRef.current.volume = value;
    setVolume(value);
  };

  return {
    currentSong,
    isPlaying,
    progress,
    volume,
    play,
    pause,
    next,
    prev,
    seek,
    changeVolume,
  };
};
