import { Outlet, useNavigation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import { LightmodeContext } from "../../contexts/LightmodeContext";
import { useContext } from "react";

import styles from "./OutletWrapper.module.css";

export function OutletWrapper() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  const [isDark] = useContext(LightmodeContext);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {loading ? (
          <div className={`${styles.loader} ${isDark && styles.dark}`}>
            <ClipLoader
              size={80}
              color={isDark ? "#fff" : "#333"}
              cssOverride={{
                borderWidth: "4px",
              }}
            ></ClipLoader>
            <span>Ładowanie...</span>
          </div>
        ) : (
          <Outlet />
        )}
      </motion.div>
    </>
  );
}
