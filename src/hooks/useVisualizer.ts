/**
 * Lightweight visualizer using requestAnimationFrame
 */
export const useVisualizer = () => {
  return Array.from({ length: 20 }, () => Math.random() * 100);
};
