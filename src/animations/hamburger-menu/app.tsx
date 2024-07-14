import { useRef } from "react";
import { motion, useCycle } from "framer-motion";

import useDimensions from "@/animations/hamburger-menu/hooks/use-dimensions";

import Sidebar from "@/animations/hamburger-menu/components/sidebar";

function HamburgerMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { height } = useDimensions(containerRef);

  return (
    <div ref={containerRef} className="relative h-[700px] bg-popover">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
      >
        <Sidebar />
        <button className="absolute top-7 left-7" onClick={() => toggleOpen()}>
          Toggle
        </button>
      </motion.nav>
    </div>
  );
}

export default HamburgerMenu;
