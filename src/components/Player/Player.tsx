import Controls from "./Controls.tsx";
import ProgressBar from "./ProgressBar.tsx";
import VolumeControl from "./VolumeControl.tsx";
import Artwork from "./Artwork.tsx";
import type { Song } from "../../types/song.ts";
import Visualizer from "./Visualizer.tsx";

interface Props {
  song: Song;
  isPlaying: boolean;
  progress: number;
  onPlay: () => void;
  onPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSeek: (v: number) => void;
  onVolume: (v: number) => void;
}

export default function Player(props: Props) {
  return (
    <div className="bg-surface rounded-xl p-6 w-full max-w-md">
      <Artwork song={props.song} />

      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold text-white truncate">
          {props.song.title}
        </h2>
        <p className="text-sm text-gray-400 truncate">{props.song.artist}</p>
      </div>

      {/* Audio visualizer appears only while playing */}
      {props.isPlaying && <Visualizer />}

      <Controls
        isPlaying={props.isPlaying}
        onPlay={props.onPlay}
        onPause={props.onPause}
        onNext={props.onNext}
        onPrev={props.onPrev}
      />
      <ProgressBar value={props.progress} onSeek={props.onSeek} />
      <VolumeControl onChange={props.onVolume} />
    </div>
  );
}
