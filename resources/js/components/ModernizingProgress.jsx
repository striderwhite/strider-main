import { motion } from "framer-motion";

export default function ModernizingBar({
  label = "Modernizing your application...",
}) {
  return (
    <div className="w-full max-w-md space-y-2">
      {/* Label + status */}
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span>{label}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          in progress
        </span>
      </div>

      {/* Progress bar container */}
      <div className="relative h-6 w-full overflow-hidden rounded-full bg-slate-900/70 border border-white/5">
        {/* Animated fill */}
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-primary-glow to-accent shadow-glow"
          animate={{
            width: [
              "0%",
              "35%", "35%",  // fill, pause
              "60%", "60%",  // fill, pause
              "82%", "82%",  // fill, pause
              "100%", "100%" // fill, pause at full
            ],
          }}
          transition={{
            duration: 7,      // total cycle time
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.8, // small pause before restarting
          }}
        />

        {/* Optional subtle shimmer on top */}
        <div className="pointer-events-none absolute inset-0">
          <div className="h-full w-1/2 translate-x-[-50%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-40 blur-sm" />
        </div>
      </div>
    </div>
  );
}
