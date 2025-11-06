import React from "react";
import { motion } from "framer-motion";

export default function LandingScreen({ onOpen }) {
  return (
    <div className="landing">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tap to open your Virtual Bouquet 💐
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onOpen}
      >
        Open Bouquet
      </motion.button>
    </div>
  );
}
