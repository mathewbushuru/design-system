import {motion} from "framer-motion";

const sidebarVariants = {
  open: (height  = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)"
  }
}

function Sidebar() {
  return (
    <motion.div 
      variants={sidebarVariants}
      className="bg-secondary absolute w-72 bottom-0 top-0"
    />
  );
}

export default Sidebar;
