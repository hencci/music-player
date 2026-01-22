export default function ProgressBar({ value, onSeek }: any) {
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={value}
      onChange={(e) => onSeek(Number(e.target.value))}
      className="w-full mt-4 accent-accent"
    />
  );
}
