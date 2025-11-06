import React from "react";
import { motion } from "framer-motion";

export default function MessageCard() {
  return (
    <div className="message-card">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="card"
      >
        
     <p>
  I didn’t know how to start the conversation…  
  so I thought flowers might do it better 🌷  
  <br /><br />
  Hope this little gesture makes you smile ☺️
</p>


      </motion.div>
    </div>
  );
}
