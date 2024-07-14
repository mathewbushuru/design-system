import { motion, useCycle } from "framer-motion";

import useDimensions from "@/animations/hamburger-menu/hooks/use-dimensions";

function HamburgerMenu() {
  const [isOpen, _toggleOpen] = useCycle(false, true);

  return (
    <div className="bg-popover h-[500px]">
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        Hamburger menu
      </motion.nav>
    </div>
  );
}

export default HamburgerMenu;
