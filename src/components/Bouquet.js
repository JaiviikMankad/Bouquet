import React from "react";
import { motion } from "framer-motion";

export default function Bouquet({ onShowMessage }) {
  const flowers = ["🌸", "🌹", "🌻", "🌷", "🌼", "💐", "🌺"];

  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzn68FrGYe61cew3ratXh7i7xlD1Dyz0bjg3y_INP0vlgU8uNV9LzCwKEEbU6-cprg4/exec"; // replace

  function logClickToSheet({ bouquetId = "default", fromName = "YourName" } = {}) {
    const payload = {
      action: "open_message",
      bouquetId,
      fromName,
      userAgent: navigator.userAgent,
      extra: "",
    };

    // fire-and-forget POST
   fetch(APPS_SCRIPT_URL, {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})

      .then((res) => res.json())
      .then((j) => {
        if (!j.ok) console.warn("Logging failed:", j);
      })
      .catch((err) => {
        console.warn("Could not log click:", err);
      });
  }

  return (
    <div className="bouquet">
      {flowers.map((f, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: i * 0.3, type: "spring", stiffness: 120 }}
          className="flower"
          style={{
            top: `${50 + Math.sin(i) * 20}%`,
            left: `${50 + Math.cos(i) * 20}%`,
          }}
        >
          {f}
        </motion.div>
      ))}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => {
          // log it (non-blocking), then show message
          logClickToSheet({ bouquetId: "bouquet-1", fromName: "Jaivik" });
          onShowMessage();
        }}
        className="btn"
      >
        Read Your Message 💌
      </motion.button>
    </div>
  );
}
