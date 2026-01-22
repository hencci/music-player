import { motion } from "framer-motion";

export default function Controls({
  isPlaying,
  onPlay,
  onPause,
  onNext,
  onPrev,
}: any) {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <button onClick={onPrev}>⏮</button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={isPlaying ? onPause : onPlay}
        className="text-2xl"
      >
        {isPlaying ? "⏸" : "▶"}
      </motion.button>

      <button onClick={onNext}>⏭</button>
    </div>
  );
}
