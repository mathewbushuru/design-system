import { motion, type Variants } from "framer-motion";

const sidebarVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      damping: 40,
      stiffness: 400,
    },
  },
};

function Sidebar() {
  return (
    <motion.div
      variants={sidebarVariants}
      className="absolute bottom-0 top-0 w-80 bg-secondary"
    />
  );
}

export default Sidebar;
