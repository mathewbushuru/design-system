import { motion, type Variants } from "framer-motion";

const sidebarListVariants: Variants = {
  open: {
    opacity: 1,
    y: 70,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    y: 120,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function SidebarListItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.li
      variants={sidebarListVariants}
      className="flex items-center gap-4"
    >
      <div className="h-9 w-9 rounded-full bg-muted" />
      <div className="w-52 rounded-md px-4 py-2 bg-muted">
        {children}
      </div>
    </motion.li>
  );
}
