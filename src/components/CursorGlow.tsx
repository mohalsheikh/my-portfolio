import { useEffect, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const pointerQuery = "(pointer: fine)";

function subscribeToPointer(onChange: () => void) {
  const media = window.matchMedia(pointerQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

const getPointerSnapshot = () => window.matchMedia(pointerQuery).matches;
const getServerSnapshot = () => false;

export default function CursorGlow() {
  // Hydration must start with the same markup as the prerendered page.
  // React reads the actual pointer capability after hydration completes.
  const enabled = useSyncExternalStore(
    subscribeToPointer,
    getPointerSnapshot,
    getServerSnapshot
  );
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 25 });
  const sy = useSpring(y, { stiffness: 120, damping: 25 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 h-[600px] w-[600px] rounded-full"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, rgba(123,104,238,0.10) 0%, rgba(123,104,238,0) 60%)",
      }}
    />
  );
}
