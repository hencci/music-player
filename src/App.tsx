import { useEffect, useState } from "react";
import { fetchSongs } from "./api/songs.ts";
import { useAudioPlayer } from "./hooks/useAudioPlayer.ts";
import Player from "./components/Player/Player.tsx";
import type { Song } from "./types/song.ts";

export default function App() {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetchSongs().then(setSongs);
  }, []);

  const audio = useAudioPlayer(songs);

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      {audio.currentSong ? (
        <Player
          song={audio.currentSong}
          isPlaying={audio.isPlaying}
          progress={audio.progress}
          onPlay={audio.play}
          onPause={audio.pause}
          onNext={audio.next}
          onPrev={audio.prev}
          onSeek={audio.seek}
          onVolume={audio.changeVolume}
        />
      ) : (
        <div className="text-gray-400">Loading player...</div>
      )}
    </main>
  );
}
