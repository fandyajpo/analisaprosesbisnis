import Link from "next/link";
import { Play } from "../public/svg";
import { motion } from "framer-motion";

const ourDb = [
  {
    name: "I Komang Pasek Jun Dharma Adnyana",
    initial: "J",
    status: "Happy meal!",
  },
  {
    name: "I Kadek Dwijaputra",
    initial: "D",
    status: "Happy meal!",
  },
  {
    name: "I Dewa Nyoman Wisnu Mirah Mahyoga",
    initial: "D",
    status: "Happy meal!",
  },
  {
    name: "Fandy Ahmad Januar Pratama",
    initial: "F",
    status: "Beban",
  },
];

export default function Perkenalan() {
  return (
    <div className="bg-gray-800 w-full h-screen flex flex-col md:flex-col lg:flex-row pt-16  md:pt-16 lg:pt-0 md:px-24 lg:px-64 gap-x-20 items-center relative">
      <motion.div className="">
        <Link href={"topic"}>
          <a className="absolute border-2 border-black bg-white w-14 h-14 top-4 right-4 rounded-full flex items-center justify-center">
            <Play className={`w-8 h-8`} />
          </a>
        </Link>
      </motion.div>

      <div className="w-full px-4 md:px-0 md:w-full lg:w-2/4 h-full flex flex-col gap-y-4 items-center justify-center">
        {ourDb.map(({ name, initial, status }) => {
          return (
            <motion.div
              className="group bg-blue-700 w-full h-20 md:h-36 rounded-3xl flex items-center overflow-hidden"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-10 h-10 md:w-28 md:h-28 group-hover:mx-0 group-hover:rounded-none rounded-full mx-4 md:mx-6 bg-white flex items-center text-gray-600 justify-center font-bold text-sm md:text-3xl group-hover:w-full group-hover:h-full duration-200 overflow-hidden">
                {name}
              </div>
              <div className="group-hover:w-0 group-hover:opacity-0 duration-100">
                <p className="text-base md:text-3xl font-bold text-white">
                  {name}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
