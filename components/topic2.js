import Link from "next/link";

const Topic2 = () => {
  return (
    <div className="flex h-full p-4 md:p-10 lg:p-24 bg-gray-800">
      <div className="flex flex-col gap-y-4">
        <p className="text-4xl font-bold text-gray-400 underline animate-pulse">
          Source : Brigida Arie Minartiningtyas, M.Kom
        </p>
        <p className="text-xl md:text-2xl font-bold text-yellow-500">
          Manajemen Proses bisnis akan menghasilkan suatu produk serta kegiatan
          kegiatan yang akan dilakukan berdasarkan tujuan perusahaan tersebut.
        </p>
        <hr />
        <p className="text-xl md:text-2xl font-bold text-yellow-500">
          Proses bisnis adalah instrumen kunci bagi orang yang mengorganisir
          aktivitas bisnis dan meningkatkan pemahaman dari hubungan timbal balik
          mereka Suatu proses bisnis terdiri dari satu set aktivitas yang
          dilakukan di koordinasi di dalam suatu lingkungan teknis dan
          organisatoris Manajemen Proses bisnis meliputi konsep, metoda, dan
          teknik untuk mendukung disain, administrasi, konfigurasi, dan analisa
          proses bisnis.
        </p>
        <p
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl font-bold text-blue-500"
        >
          Hal yang perlu di perhatikan
        </p>
        <div className="flex flex-col md:flex-col w-full gap-4">
          <div className="w-full">
            <p className="text-sm md:text-xl lg:text-2xl font-bold text-white">
              1. Pelatihan personel dan migrasi aplikasi jika diperlukan Dalam
              tahap inilah ujian sebenarnya dari sistem benar- benar diuji dalam
              aktivitas sehari-hari oleh perusahaan. Apakah sistem beserta
              aplikasi yang dibangun telah benar-benar dapat menjalankan bisnis
              proses dengan baik untuk mencapai tujuan Perusahaan? Log informasi
              yang dihasilkan dievaluasi menggunakan teknik monitoring
              akitivitas bisnis dan penggalian proses. Teknik ini bertujuan
              untuk mengidentifikasi model proses bisnis dan kecukupan dari
              lingkungan operasional. Siklus ini berputar terus menerus, setelah
              dilakukan evaluasi akan ditemukan poin-poin dimana bisa dilakukan
              improvement atau perbaikan atas proses bisnis yang telah
              dilakukan.
            </p>
          </div>
          <div className="flex flex-col w-full gap-y-24">
            <p className="text-xl md:text-xl lg:text-2xl font-bold text-white">
              2. Sebelum digunakan sistem {"(terutama dalam hal aplikasinya)"}{" "}
              perlu dites apakah sudah berjalan sesuai yang direncanakan atau
              belum??
            </p>
            <Link href={"primer"}>
              <a className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-4 rounded-full text-xl font-bold w-fit text-white">
                Next ke tugas analisa data primer dan sekuyyynnder
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic2;
