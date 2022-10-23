import { motion } from "framer-motion";
import Link from "next/link";
const Primer = () => {
  return (
    <div className="w-full h-full bg-gray-800">
      <div className="flex flex-col justify-center gap-y-6 p-4 md:p-24">
        <p className="text-3xl text-blue-500 font-extrabold">Data Primer</p>
        <p className="text-3xl text-orange-500 font-extrabold">
          Hal utama yang digunakan dalam penelitian.
        </p>
        <hr />
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-1xl md:text-4xl lg:text-3xl font-bold text-white  text-left"
        >
          Usaha yang yang jalanki adalah usaha mikro kecil menengah dibidang
          kuliner khas daerah Bali bernama Jajebali Bu Dewi. usaha jajebali ini
          kita produksi dari rumah atau yang biasa disebut Homemade, berlokasi
          di Perumahan Kori Nuansa Selatan, Jimbaran
        </motion.p>
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-1xl md:text-4xl lg:text-3xl font-bold text-white  text-left"
        >
          Usaha ini mulai berjalan di tahun 2011, dan sekarang sudah berjalan
          selama 12 tahun.
        </motion.p>
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-1xl md:text-4xl lg:text-3xl font-bold text-white  text-left"
        >
          Sementara belum ada partner usaha yang ikut untuk mensupport usaha
          kami, tetapi anak anak saya yang membantu untuk promosi usaha kami di
          media sosial. dan juga kami sudah banyak berpartisipasi sebagai
          sponsor di event kampus, seperti contohnya kemarin kampus Instiki
          menyelenggarakan acara PIK-M Festival itu kita sebagai sponsor yang
          menyumbangkan jajan bali produksi kami di acara mereka dan kampus
          lainnya juga.
        </motion.p>
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-1xl md:text-4xl lg:text-3xl font-bold text-white  text-left"
        >
          Selama usaha ini berjalan rintangan nya sangat banyak mulai dari awal
          mulai jualan jajan bali ini, dengan menopang keranjang dan jalan
          keliling gang perumahan tapi mendapatkan omongan yang tidak enak dari
          tetangga yang membandingkan nasibnya dengan ibu, dan baru belakangan
          ini usaha ibu mendapat masalah dibagian keuangan dipersulit dari hotel
          sebelum dan selama masa pandemi jadi kami agak kesusahan untuk
          memodalkan bahan" yang akan diperlukan untuk produksi jajan lagi
        </motion.p>
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-1xl md:text-4xl lg:text-3xl font-bold text-white  text-left"
        >
          Cara kami membuat suasana usaha tetap terjaga harmonis itu dengan cara
          konsisten untuk terus memproduksi dan enjoy dalam menjalaninya
        </motion.p>
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-1xl md:text-4xl lg:text-3xl font-bold text-white  text-left"
        >
          Untuk jenis anggota, karna dari awal dibangun nya usaha ini bersama
          keluaga, dan usaha kami masih bisa dihandle bersama keluarga, jadi
          sampai sekarang kita beranggotakan keluarga kecil kami di dalam usaha
          ini
        </motion.p>
        <Link href={"sekunder"}>
          <a className="bg-gradient-to-r from-blue-500 to-blue-600 px-24 py-4 rounded-full text-xl font-bold w-fit text-white">
            Next ke data sekuyyynnder
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Primer;
