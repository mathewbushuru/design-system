import { motion, type SVGMotionProps } from "framer-motion";

import useTheme from "@/hooks/use-theme";

export default function MenuToggle({ toggle }: { toggle: () => void }) {
  return (
    <button
      className="absolute left-7 top-7 cursor-pointer"
      onClick={() => toggle()}
    >
      <svg width="23" height="23" viewBox="0  0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}

function Path(props: SVGMotionProps<SVGPathElement>) {
  const { theme } = useTheme();
  return (
    <motion.path
      stroke={theme === "light" ? "hsl(180, 4%, 5%)" : "hsl(171, 14%, 90%)"}
      strokeWidth={2}
      strokeLinecap="round"
      fill="transparent"
      {...props}
    />
  );
}
