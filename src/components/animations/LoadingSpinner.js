import { motion } from "framer-motion";

const LoadingSpinner = () => (
  <motion.div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    }}
  >
    <motion.div
      style={{
        width: 50,
        height: 50,
        border: "5px solid #e9e9e9",
        borderTop: "5px solid #3498db",
        borderRadius: "50%",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
);

export default LoadingSpinner;
