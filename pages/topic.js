import { motion } from "framer-motion";
import Topic2 from "../components/topic2";
const Topic = () => {
  return (
    <div className="w-full h-full bg-gray-800">
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col justify-center gap-y-10 p-10 md:p-24">
          <p className="text-3xl text-white font-extrabold">Tugas</p>
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-1xl md:text-4xl lg:text-5xl font-bold text-white underline text-left"
          >
            1. Jelaskan konsep Analisa proses bisnis dalam domain teknologi
            informasi
          </motion.button>
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-1xl md:text-4xl lg:text-5xl font-bold text-white underline text-left"
          >
            2. Cari sebuah kasus kemudian klasifikasikan data primer dan data
            sekunder mengenai proses bisnisnya!
          </motion.p>
        </div>
      </div>
      <Topic2 />
    </div>
  );
};

export default Topic;
