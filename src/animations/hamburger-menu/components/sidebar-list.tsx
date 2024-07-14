import { motion, type Variants } from "framer-motion";

import SidebarListItem from "@/animations/hamburger-menu/components/sidebar-list-item";

const sidebarListVariants: Variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.2}
  },
  closed: {
    transition: {staggerChildren: 0, staggerDirection: -1}
  },
};

export default function SidebarList() {
  return (
    <motion.ul
      variants={sidebarListVariants}
      className="flex flex-col gap-5 pl-6"
    >
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <SidebarListItem key={index}>{index + 1}</SidebarListItem>
        ))}
    </motion.ul>
  );
}
