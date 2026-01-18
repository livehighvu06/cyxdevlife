import { motion } from "framer-motion";
import avatar from "../images/avatar.png";

function Hero(): JSX.Element {
  return (
    <div className="relative flex justify-center items-center">
        {/* Main Avatar */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
                duration: 1,
                ease: "backOut",
                delay: 0.2
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative z-10 w-64 h-64 md:w-96 md:h-96"
        >
            <div className="absolute inset-2 bg-gradient-to-tr from-teal to-amber rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <img
                src={avatar}
                alt="Chen Yi Xian"
                className="relative w-full h-full object-scale-down rounded-full border-4 border-white/20 shadow-2xl"
            />
        </motion.div>

        {/* Floating shapes */}
        <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-16 h-16 bg-teal-light/20 backdrop-blur-md rounded-xl border border-white/10"
        />
        <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 w-24 h-24 bg-amber/10 backdrop-blur-md rounded-full border border-white/10"
        />
    </div>
  );
}

export default Hero;
