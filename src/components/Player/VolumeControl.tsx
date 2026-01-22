export default function VolumeControl({ onChange }: any) {
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      defaultValue={1}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full mt-2 accent-accent"
    />
  );
}
