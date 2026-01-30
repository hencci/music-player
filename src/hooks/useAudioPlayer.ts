import { useEffect, useRef, useState } from "react";
import type { Song } from "../types/song";

export const useAudioPlayer = (songs: Song[]) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const currentSong = songs.length ? songs[currentIndex] : null;

  // Sync source when songs load OR index changes
  useEffect(() => {
    if (!currentSong) return;

    const audio = audioRef.current;
    audio.src = currentSong.audioUrl;
    audio.load();
  }, [currentSong]);

  // Track progress
  useEffect(() => {
    const audio = audioRef.current;

    const update = () => {
      if (!audio.duration) return;
      setProgress(audio.currentTime / audio.duration);
    };

    audio.addEventListener("timeupdate", update);
    return () => audio.removeEventListener("timeupdate", update);
  }, []);

  const play = async () => {
    if (!currentSong) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Play failed:", err);
    }
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const next = () => {
    if (!songs.length) return;
    setCurrentIndex((i) => (i + 1) % songs.length);
  };

  const prev = () => {
    if (!songs.length) return;
    setCurrentIndex((i) => (i - 1 + songs.length) % songs.length);
  };

  const seek = (value: number) => {
    const audio = audioRef.current;
    if (!audio.duration) return;
    audio.currentTime = value * audio.duration;
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
