import { Outlet } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import styles from "./OutletWrapper.module.css";

export function OutletWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Outlet />
    </motion.div>
  );
}
