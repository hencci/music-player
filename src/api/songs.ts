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
      artwork: "https://picsum.photos/400",
    },
    {
      id: "2",
      title: "Third Wheel",
      artist: "Zoe Wees",
      audioUrl: "/Zoe-Wees-Third-Wheel.mp3",
      artwork: "https://picsum.photos/400",
    },
  ];
};
