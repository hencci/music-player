import Controls from "./Controls.tsx";
import ProgressBar from "./ProgressBar.tsx";
import VolumeControl from "./VolumeControl.tsx";
import type { Song } from "../../types/song.ts";

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
      <Controls {...props} />
      <ProgressBar value={props.progress} onSeek={props.onSeek} />
      <VolumeControl onChange={props.onVolume} />
    </div>
  );
}
