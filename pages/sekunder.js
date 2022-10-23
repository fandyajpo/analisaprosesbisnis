import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import DataSekunder from "../public/sekunder.jpeg";
import DataSekunder1 from "../public/sekunder1.jpeg";
import DataSekunder2 from "../public/sekunder2.jpeg";
const Sekunder = () => {
  return (
    <div className="w-full h-full bg-gray-800">
      <div className="flex h-full">
        <div className="flex flex-col justify-center gap-y-6 p-4 md:p-24">
          <p className="text-3xl text-blue-500 font-extrabold">Data Sekunder</p>
          <p className="text-2xl md:text-3xl text-orange-500 font-extrabold">
            Berbagai informasi yang telah ada sebelumnya dan dengan sengaja
            dikumpulkan oleh peneliti yang digunakan untuk melengkapi kebutuhan
            data penelitian.
          </p>
          <hr />
          <div>
            <div className="w-full h-56 border items-center rounded-md flex flex-row gap-2 justify-around">
              <div className="flex items-center justify-center px-8 md:px-8 lg:px-10">
                <motion.div className="w-24 h-24 md:w-36 md:h-36 rounded-xl overflow-hidden">
                  <Image src={DataSekunder} />
                </motion.div>
              </div>
              <p className="text-sm md:text-1xl lg:text-4xl text-blue-300 font-bold">
                Berikut adalah lampiran sertifikat telah berpartisipasi sebagai
                sponsor di Kegiatan Lomba Fotografi yang dilaksanakan oleh
                Ikatan Putra Putri Kampus Universitas Bali International
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-56 border items-center rounded-md flex flex-row gap-2 justify-around">
              <div className="flex items-center justify-center px-8 md:px-8 lg:px-10">
                <motion.div className="w-24 h-24 md:w-36 md:h-36 rounded-xl overflow-hidden">
                  <Image src={DataSekunder1} />
                </motion.div>
              </div>
              <p className="text-sm md:text-1xl lg:text-4xl text-blue-300 font-bold">
                foto ini adalah lampiran sertifikat telah berpartisipasi sebagai
                sponsor di acara pemilihan Putra dan Putri Jurusan Kesehatan
                Lingkungan yang diselenggarakan oleh Poltekkes Kemenkes Denpasar
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-56 border items-center rounded-md flex flex-row gap-2 justify-around">
              <div className="flex items-center justify-center px-8 md:px-8 lg:px-10">
                <motion.div className="w-24 h-24 md:w-36 md:h-36 rounded-xl overflow-hidden">
                  <Image src={DataSekunder2} />
                </motion.div>
              </div>
              <p className="text-sm md:text-1xl lg:text-4xl text-blue-300 font-bold">
                Ini adalah lampiran foto media sosial dari usaha jajebali budewi
                untuk mempromosikan bisnisnya supaya lebih dikenal banyak
                kalangan
              </p>
            </div>
          </div>

          <Link href={"/"}>
            <a className="bg-gradient-to-r from-blue-500 to-blue-600 px-24 py-4 rounded-full text-xl font-bold w-fit text-white">
              UDAH TAMMAT
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sekunder;
