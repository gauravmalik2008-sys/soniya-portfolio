import { useMousePosition } from '../hooks/useMousePosition';

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed z-[9998] hidden md:block"
      style={{
        left: x - 150,
        top: y - 150,
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
      }}
    />
  );
}
