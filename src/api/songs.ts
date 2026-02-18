import type { Song } from "../types/song.ts";

/**
 * Mock API
 * In real apps this would be fetched from a backend
 */
export const fetchSongs = async (): Promise<Song[]> => {
  return [
    {
      id: "1",
      title: "Control",
      artist: "Zoe wees",
      audioUrl: "/Zoe-Wees-Control.mp3",
      artwork: "/artwork/artworks-zoe-wees.jpg",
    },
    {
      id: "2",
      title: "Third Wheel",
      artist: "Zoe Wees",
      audioUrl: "/Zoe-Wees-Third-Wheel.mp3",
      artwork: "/artwork/artworks-zoe-wees.jpg",
    },
    {
      id: "3",
      title: "Overthinking",
      artist: "Zoe Wees",
      audioUrl: "/Zoe-Wees-Overthinking.mp3",
      artwork: "/artwork/artworks-zoe-wees.jpg",
    },
    {
      id: "4",
      title: "Don't Give Up",
      artist: "Zoe Wees",
      audioUrl: "/Zoe-Wees-Dont-give-up.mp3",
      artwork: "/artwork/artworks-zoe-wees.jpg",
    },
  ];
};
