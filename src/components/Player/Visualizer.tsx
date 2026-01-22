import { motion } from "framer-motion";
import { useVisualizer } from "../../hooks/useVisualizer.ts";

export default function Visualizer() {
  const bars = useVisualizer();

  return (
    <div className="flex gap-1 h-20 items-end mt-4">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          animate={{ height: h }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 bg-accent rounded"
        />
      ))}
    </div>
  );
}
