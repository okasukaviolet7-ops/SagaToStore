// Satu-satunya tempat definisi status. Tambah/ubah status cukup di sini.
// Class Tailwind ditulis utuh supaya terdeteksi saat build.
export const STATUS = {
  hoax: {
    label: "HOAX",
    name: "Hoax",
    meaning: "Klaim salah dan menyesatkan",
    badge: "border-hoax/40 bg-hoax-bg text-hoax",
    bar: "bg-hoax",
  },
  disinformasi: {
    label: "DISINFORMASI",
    name: "Disinformasi",
    meaning: "Sebagian benar, tapi dipelintir atau diberi konteks keliru",
    badge: "border-disinfo/40 bg-disinfo-bg text-disinfo",
    bar: "bg-disinfo-bar",
  },
  fakta: {
    label: "FAKTA",
    name: "Fakta",
    meaning: "Klaim terbukti benar",
    badge: "border-fakta/40 bg-fakta-bg text-fakta",
    bar: "bg-fakta",
  },
};

export const STATUS_ORDER = ["hoax", "disinformasi", "fakta"];
