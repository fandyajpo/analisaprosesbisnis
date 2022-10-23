import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800">
      <div className="flex flex-col justify-center items-center gap-y-4 ">
        <p className="text-6xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
          ANALISA PROSES BISNIS
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <Link href={"team"}>
            <a>
              <div className="bg-blue-500 w-fit shadow-md px-8 md:px-24 py-3 rounded-full text-2xl font-bold text-white">
                Get Started
              </div>
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
