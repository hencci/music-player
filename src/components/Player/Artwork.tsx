import { motion } from "framer-motion";
import type { Song } from "../../types/song.ts";

interface ArtworkProps {
  song: Song;
}

/**
 * Artwork component
 * -----------------
 * - Displays album artwork
 * - Animates on song change
 * - Handles fallback UI
 */
export default function Artwork({ song }: ArtworkProps) {
  return (
    <motion.div
      key={song.id} // forces re-animation when song changes
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full aspect-square rounded-xl overflow-hidden bg-gray-800 shadow-lg"
    >
      <img
        src={song.artwork}
        alt={`${song.title} artwork`}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          // Fallback artwork if image fails to load
          e.currentTarget.src = "/artwork/placeholder.PNG";
        }}
      />
    </motion.div>
  );
}
