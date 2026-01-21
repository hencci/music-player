import type { Song } from "../types/song.ts";

/**
 * Mock API
 * In real apps this would be fetched from a backend
 */
export const fetchSongs = async (): Promise<Song[]> => {
  return [
    {
      id: "1",
      title: "Night Drive",
      artist: "Synthwave",
      audioUrl: "/audio/song1.mp3",
      artwork: "/artwork/art1.jpg",
    },
    {
      id: "2",
      title: "Deep Focus",
      artist: "Lo-Fi Beats",
      audioUrl: "/audio/song2.mp3",
      artwork: "/artwork/art2.jpg",
    },
  ];
};
