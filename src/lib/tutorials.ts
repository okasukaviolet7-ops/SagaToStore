import type { CategoryId, Idea, MaterialId } from '@/types';

/**
 * Pustaka ide + panduan langkah-demi-langkah untuk setiap kombinasi
 * kategori x bahan (3 x 4 = 12 ide). Tambahkan bahan/kategori baru di sini
 * dan di `catalog.ts`.
 */
export const IDEAS: Record<CategoryId, Record<MaterialId, Idea>> = {
  /* ------------------------------------------------------------------ */
  /*  POT TANAMAN                                                        */
  /* ------------------------------------------------------------------ */
  plant: {
    plastic_bottle: {
      title: 'Pot Gantung dari Botol Plastik',
      summary:
        'Botol bekas 1,5 liter dipotong membentuk jendela tanam dan digantung dengan tali. Hemat tempat, cocok untuk balkon, pagar, atau jendela.',
      difficulty: 'Mudah',
      minutes: 30,
      materials: [
        '1 botol plastik 1,5 liter (bentuk lurus)',
        '2 meter tali rami / paracord',
        'Media tanam (tanah + sekam/pasir)',
        'Bibit atau stek tanaman (sirih gading, kemangi, lidah mertua mini)',
        'Cat akrilik (opsional)',
      ],
      tools: ['Cutter', 'Gunting', 'Paku atau obeng panas untuk melubangi', 'Spidol', 'Penggaris'],
      steps: [
        {
          title: 'Bersihkan botol dan lepas label',
          detail:
            'Rendam botol di air sabun 10 menit, lepas label, lalu kerik sisa lem dengan sedikit minyak goreng. Bilas dan keringkan.',
        },
        {
          title: 'Tandai jendela tanam',
          detail:
            'Rebahkan botol, lalu gambar persegi panjang sekitar 15 x 8 cm di sisi atas bagian tengah botol sebagai lubang tanam.',
        },
        {
          title: 'Potong jendela',
          detail:
            'Tusukkan ujung cutter di salah satu sudut, lalu potong mengikuti garis. Potong menjauhi tubuh. Haluskan tepi dengan amplas halus atau tutup dengan lakban kertas.',
        },
        {
          title: 'Buat lubang drainase dan gantungan',
          detail:
            'Lubangi sisi bawah botol 3–4 titik (±3 mm) untuk drainase. Buat 4 lubang gantung: 2 dekat leher botol dan 2 dekat dasar.',
        },
        {
          title: 'Pasang tali',
          detail:
            'Masukkan tali ke lubang gantung, ikat dengan simpul kuat, lalu satukan kedua ujung tali di satu kait. Uji dengan beban sebelum diisi tanah.',
        },
        {
          title: 'Isi media tanam dan tanam',
          detail:
            'Letakkan lapisan kerikil/pecahan genteng 2 cm di dasar, isi media tanam, tanam bibit, lalu siram secukupnya. Gantung di tempat terang tapi tidak terik.',
        },
      ],
      tips: [
        'Cat bagian luar dengan warna gelap/solid agar akar tidak terkena cahaya langsung dan lumut tidak mudah tumbuh.',
        'Pilih tanaman berakar dangkal supaya tidak cepat sesak.',
        'Buat deretan 3–5 botol untuk membuat kebun vertikal.',
      ],
      safety: 'Cutter sangat tajam: potong menjauhi tubuh dan gunakan alas potong.',
      impact: 'Satu botol plastik terselamatkan dari tempat sampah dan dipakai kembali selama bertahun-tahun.',
    },

    cardboard: {
      title: 'Pot Kotak Kardus Tahan Air',
      summary:
        'Kardus tebal dilapis plastik dan cat menjadi sarung pot (cachepot) bergaya minimalis untuk tanaman hias atau herbal di dalam ruangan.',
      difficulty: 'Sedang',
      minutes: 90,
      materials: [
        'Kardus bergelombang tebal (dus mi instan / dus sepatu)',
        'Kantong plastik tebal atau plastik bekas',
        'Lem kayu atau lem tembak',
        'Cat akrilik / cat tembok sisa + pernis bening',
        'Lakban kertas',
        'Tanaman dalam polybag',
      ],
      tools: ['Cutter', 'Penggaris & pensil', 'Kuas', 'Alas potong'],
      steps: [
        {
          title: 'Ukur dan potong pola',
          detail:
            'Potong 4 sisi berukuran 15 x 15 cm dan 1 alas 15 x 15 cm. Buat masing-masing 2–3 lapis supaya kuat.',
        },
        {
          title: 'Rekatkan lapisan kardus',
          detail:
            'Tempel lapisan kardus dengan lem kayu, tekan dengan buku tebal selama 30 menit sampai rata dan kering.',
        },
        {
          title: 'Rakit kotak',
          detail:
            'Rekatkan keempat sisi ke alas, lalu perkuat semua sudut dengan lakban kertas di bagian dalam dan luar.',
        },
        {
          title: 'Lapisi bagian dalam',
          detail:
            'Pasang plastik di dalam kotak sebagai pelindung kelembapan. Lubangi sedikit di dasar jika dipakai langsung sebagai pot, lalu lem tepi plastik di bibir kotak.',
        },
        {
          title: 'Cat dan finishing',
          detail:
            'Cat 2 lapis (tunggu kering antar lapisan), lalu beri 1 lapis pernis bening agar tahan percikan air. Biarkan kering 24 jam.',
        },
        {
          title: 'Tanam',
          detail:
            'Masukkan tanaman beserta polybag-nya ke dalam kotak. Alasi dengan piring/tatakan agar kardus tidak lembap.',
        },
      ],
      tips: [
        'Pakai sebagai sarung pot, bukan wadah tanah langsung, supaya awet 6–12 bulan.',
        'Hindari tempat yang selalu lembap atau terkena hujan.',
        'Tambahkan tali rami di sekeliling untuk tampilan natural.',
      ],
      impact: 'Mengubah kemasan sekali pakai menjadi dekorasi rumah yang berguna.',
    },

    old_clothes: {
      title: 'Pot Kain Semen dari Pakaian Bekas',
      summary:
        'Kain bekas dicelup bubur semen lalu dibentuk di atas cetakan sehingga menghasilkan pot dengan lipatan organik yang unik dan kokoh.',
      difficulty: 'Sedang',
      minutes: 120,
      materials: [
        'Kain katun bekas / kaos / handuk tua (±50 x 50 cm)',
        'Semen 1 kg (atau semen instan/acian)',
        'Air bersih',
        'Mangkuk atau ember kecil sebagai cetakan',
        'Plastik pembungkus',
        'Cat dan sealer (opsional)',
      ],
      tools: ['Sarung tangan karet', 'Masker', 'Wadah adukan & pengaduk', 'Amplas', 'Penyemprot air'],
      steps: [
        {
          title: 'Siapkan cetakan',
          detail:
            'Balik mangkuk/ember, bungkus dengan plastik, dan rekatkan dengan lakban agar pot mudah dilepas nanti.',
        },
        {
          title: 'Aduk bubur semen',
          detail:
            'Campur semen dan air sampai kekentalan seperti yoghurt cair. Gunakan sarung tangan, masker, dan kacamata.',
        },
        {
          title: 'Celup kain',
          detail: 'Rendam kain di bubur semen sampai seluruh serat terbasahi, lalu peras kelebihan adukan.',
        },
        {
          title: 'Bentuk di cetakan',
          detail:
            'Sampirkan kain di atas cetakan terbalik, bentuk lipatan natural, tekan agar menempel, lalu rapikan bagian tepi.',
        },
        {
          title: 'Keringkan',
          detail:
            'Diamkan 24–48 jam di tempat teduh. Semprot air tipis sesekali agar semen tidak retak karena kering terlalu cepat.',
        },
        {
          title: 'Lepas, haluskan, dan beri lubang drainase',
          detail:
            'Angkat dari cetakan, amplas tepi, beri lubang drainase kecil, lalu cat/seal bila diinginkan. Biarkan mengeras 3 hari sebelum ditanami.',
        },
      ],
      tips: [
        'Kain tipis menghasilkan tekstur halus, kain tebal menghasilkan tekstur kasar bergaya industrial.',
        'Tambahkan sedikit pewarna semen untuk warna pastel.',
        'Cocok untuk sukulen dan kaktus karena media tanamnya sedikit.',
      ],
      safety: 'Semen bersifat iritan: pakai sarung tangan, masker, dan kacamata, serta kerjakan di area berventilasi.',
      impact: 'Memberi nyawa kedua pada kain yang tak lagi dipakai dan mengurangi limbah tekstil.',
    },

    tin_can: {
      title: 'Pot Kaleng Bercat Ceria',
      summary:
        'Kaleng susu atau sarden dibersihkan, dicat dengan motif sendiri, dan diubah menjadi pot mungil untuk sukulen atau herbal.',
      difficulty: 'Mudah',
      minutes: 45,
      materials: [
        'Kaleng bekas (susu, sarden, biskuit)',
        'Cat semprot / akrilik + primer anti karat',
        'Kerikil kecil dan media tanam',
        'Tanaman kecil (sukulen, kaktus, kemangi)',
        'Tali atau kawat untuk menggantung (opsional)',
      ],
      tools: ['Tang', 'Paku & palu', 'Amplas', 'Kuas', 'Lakban kertas untuk membuat motif'],
      steps: [
        {
          title: 'Bersihkan dan amankan tepi',
          detail:
            'Cuci kaleng, lepas label, dan rendam sisa lem. Periksa bibir kaleng: tekuk tepi tajam dengan tang atau amplas sampai halus.',
        },
        {
          title: 'Buat lubang drainase',
          detail:
            'Isi kaleng dengan air lalu bekukan. Paku 3–4 lubang di dasar saat es masih padat agar kaleng tidak penyok.',
        },
        {
          title: 'Amplas dan beri primer',
          detail: 'Amplas permukaan agar cat menempel, lalu semprot 1 lapis primer anti karat dan tunggu kering.',
        },
        {
          title: 'Cat dan buat motif',
          detail:
            'Cat 2 lapis warna dasar. Setelah kering, tempel lakban kertas untuk membuat garis, zig-zag, atau polkadot, lalu cat warna kedua.',
        },
        {
          title: 'Beri lapisan pelindung',
          detail: 'Semprot clear coat agar warna tahan cuaca dan tidak mudah baret.',
        },
        {
          title: 'Tanam',
          detail: 'Isi dengan kerikil dasar, media tanam, lalu tanam sukulen atau herbal pilihanmu.',
        },
      ],
      tips: [
        'Gunakan kaleng dengan ukuran berbeda lalu susun bertingkat.',
        'Tambahkan tali jute di bibir kaleng untuk gantungan dinding.',
      ],
      safety: 'Tepi kaleng bisa melukai: haluskan dulu dan kenakan sarung tangan saat memotong atau memaku.',
      impact: 'Kaleng logam yang biasanya terbuang bisa dipakai bertahun-tahun sebagai wadah tanaman.',
    },
  },

  /* ------------------------------------------------------------------ */
  /*  FASHION                                                            */
  /* ------------------------------------------------------------------ */
  clothes: {
    plastic_bottle: {
      title: 'Bros Bunga dari Botol Plastik',
      summary:
        'Dasar botol bergerigi dipotong menjadi kelopak lalu dirangkai menjadi bros bunga untuk mempercantik baju, hijab, atau tas.',
      difficulty: 'Sedang',
      minutes: 60,
      materials: [
        '1–2 botol plastik PET (dasar botol bergerigi paling bagus)',
        'Manik atau kancing bekas untuk pusat bunga',
        'Peniti bros',
        'Lem tembak',
        'Cat akrilik / spidol permanen',
        'Potongan kain perca atau felt',
      ],
      tools: ['Gunting tajam', 'Cutter', 'Penjepit/pinset', 'Kuas kecil'],
      steps: [
        {
          title: 'Potong dasar botol',
          detail: 'Potong bagian dasar botol setinggi ±4 cm, lalu cuci dan keringkan sepenuhnya.',
        },
        {
          title: 'Gunting menjadi kelopak',
          detail:
            'Gunting dari tepi ke arah tengah untuk membentuk 6–8 kelopak membulat. Sisakan lingkaran pusat selebar 1 cm.',
        },
        {
          title: 'Warnai kelopak',
          detail:
            'Cat bagian belakang kelopak dengan akrilik atau spidol permanen supaya warna tidak mudah tergores. Tunggu kering.',
        },
        {
          title: 'Bentuk lengkungan',
          detail:
            'Lengkungkan ujung kelopak dengan menggesekkan sisi gunting (seperti mengeriting pita). Buat lapisan kedua yang lebih kecil.',
        },
        {
          title: 'Susun dan rekatkan',
          detail:
            'Tumpuk lapisan besar dan kecil dengan lem tembak, lalu pasang manik/kancing di tengah sebagai pusat bunga.',
        },
        {
          title: 'Pasang peniti bros',
          detail:
            'Rekatkan potongan felt di bagian belakang, lalu tempel peniti bros. Biarkan lem mengeras sebelum dipakai.',
        },
      ],
      tips: [
        'Botol berwarna menghasilkan bunga yang lebih menarik tanpa perlu dicat.',
        'Pakai pemanas hanya jika perlu; pelengkungan dengan gunting sudah cukup dan lebih aman.',
        'Buat set 3 ukuran bros untuk hadiah.',
      ],
      safety: 'Lem tembak panas: gunakan pinset saat menekan bagian kecil.',
      impact: 'Limbah plastik jadi aksesori yang bernilai dan bisa dijadikan usaha kecil.',
    },

    cardboard: {
      title: 'Kalung Statement Geometris dari Kardus',
      summary:
        'Potongan kardus bergelombang berbentuk geometris dilapisi cat atau kain lalu dirangkai menjadi kalung statement yang ringan dan unik.',
      difficulty: 'Sedang',
      minutes: 75,
      materials: [
        'Kardus bergelombang tipis',
        'Cat akrilik atau potongan kain perca',
        'Tali kur / rantai bekas',
        'Lem serbaguna + pernis bening',
        'Pengait kalung (opsional)',
      ],
      tools: ['Cutter', 'Penggaris', 'Penusuk/paku kecil', 'Kuas', 'Tang jepit'],
      steps: [
        {
          title: 'Rancang pola',
          detail:
            'Gambar 5–7 bentuk geometris (persegi, segitiga, lingkaran) berukuran 2–5 cm. Susun di meja untuk menguji komposisi.',
        },
        {
          title: 'Potong dan gandakan',
          detail:
            'Potong tiap bentuk 2 lapis, lalu rekatkan agar kuat dan tidak mudah melengkung.',
        },
        {
          title: 'Lapisi permukaan',
          detail:
            'Cat dengan warna kontras atau tempel kain perca dengan lem. Tambahkan garis atau titik dekoratif.',
        },
        {
          title: 'Pernis',
          detail: 'Beri 2 lapis pernis bening agar tahan keringat dan percikan air.',
        },
        {
          title: 'Lubangi dan rangkai',
          detail:
            'Tusuk dua lubang kecil di tiap bentuk, lalu rangkai pada tali/rantai dengan komposisi simetris.',
        },
        {
          title: 'Pasang pengait',
          detail: 'Ikat atau pasang pengait di kedua ujung, lalu uji kenyamanan di leher.',
        },
      ],
      tips: [
        'Gunakan kardus tipis agar kalung tetap ringan.',
        'Kenakan di atas kaos polos supaya terlihat menonjol.',
        'Hindari terkena air; simpan di tempat kering.',
      ],
      safety: 'Cutter tajam: gunakan alas potong dan potong menjauhi jari.',
      impact: 'Kemasan kardus bekas menjadi aksesori fashion tanpa bahan baru.',
    },

    old_clothes: {
      title: 'Crop Tank Top Tanpa Jahit dari Kaos Bekas',
      summary:
        'Kaos longgar yang tak terpakai dipotong menjadi tank top atau crop top modern tanpa perlu mesin jahit.',
      difficulty: 'Mudah',
      minutes: 40,
      materials: [
        '1 kaos katun/jersey bekas (ukuran L atau XL)',
        'Pita atau kain perca (opsional)',
      ],
      tools: ['Gunting kain', 'Kapur jahit atau spidol kain', 'Penggaris', 'Jarum pentul'],
      steps: [
        {
          title: 'Cuci dan setrika',
          detail:
            'Cuci kaos supaya bersih dan setrika agar rata. Kenakan, lalu tandai panjang crop yang diinginkan dengan kapur.',
        },
        {
          title: 'Potong lengan',
          detail:
            'Gunting di sepanjang garis jahitan bahu untuk melepas lengan, lalu lebarkan lubang lengan secukupnya untuk model tank atau racerback.',
        },
        {
          title: 'Bentuk leher',
          detail:
            'Gunting kerah menjadi bentuk U atau scoop. Potong sedikit demi sedikit (±1 cm) dan coba pakai agar ukurannya pas.',
        },
        {
          title: 'Potong panjang hem',
          detail: 'Lipat kaos menjadi dua, lalu gunting hem lurus sesuai tanda panjang crop.',
        },
        {
          title: 'Regangkan tepi',
          detail:
            'Tarik pelan tepi potongan: bahan jersey akan menggulung sendiri dan menghasilkan tepi rapi tanpa kelim.',
        },
        {
          title: 'Tambahkan detail',
          detail:
            'Buat fringe pada hem (potongan 1 x 8 cm) atau ikat pita di bahu sebagai hiasan.',
        },
      ],
      tips: [
        'Jersey katun menggulung rapi; bahan yang tidak menggulung bisa dilipat dan dilem kain atau dijelujur.',
        'Potong lebih sedikit dulu; bagian yang terpotong tidak bisa dikembalikan.',
      ],
      impact: 'Memperpanjang umur pakaian dan mengurangi limbah tekstil yang menumpuk.',
    },

    tin_can: {
      title: 'Anting Pull-Tab Kaleng Metalik',
      summary:
        'Tab pembuka kaleng aluminium diperhalus dan dirangkai dengan manik menjadi anting ringan dengan tampilan metalik.',
      difficulty: 'Sedang',
      minutes: 50,
      materials: [
        '10–20 pull-tab kaleng minuman',
        'Kait anting (ear hook) dan jump ring',
        'Manik-manik',
        'Cat kuku atau cat akrilik (opsional)',
        'Clear coat/pernis bening',
      ],
      tools: ['Tang jepit', 'Amplas halus 400–800', 'Kuas kecil'],
      steps: [
        {
          title: 'Bersihkan pull-tab',
          detail: 'Rendam di air sabun, sikat, lalu keringkan.',
        },
        {
          title: 'Amplas tepi',
          detail:
            'Haluskan semua sisi dan sudut hingga tidak ada bagian tajam yang bisa menggores kulit.',
        },
        {
          title: 'Warnai (opsional)',
          detail: 'Beri cat kuku atau akrilik pada satu sisi, tunggu hingga kering penuh.',
        },
        {
          title: 'Lapisi bening',
          detail: 'Oleskan clear coat agar tidak mudah terkelupas dan tidak meninggalkan noda hitam di kulit.',
        },
        {
          title: 'Rangkai',
          detail:
            'Sambungkan pull-tab dengan jump ring ke kait anting, tambahkan manik di bagian bawah sebagai aksen.',
        },
        {
          title: 'Uji kenyamanan',
          detail: 'Pastikan sepasang anting simetris, ringan, dan tidak ada ujung yang menusuk.',
        },
      ],
      tips: [
        'Mulai dari desain sederhana (1 tab + 1 manik) sebelum membuat rangkaian bertingkat.',
        'Gunakan kait anting berbahan stainless jika kulit sensitif.',
      ],
      safety: 'Aluminium tipis dapat menggores: amplas hingga halus dan lakukan uji alergi logam sebelum dipakai lama.',
      impact: 'Limbah kecil yang sering terabaikan berubah menjadi aksesori fashion.',
    },
  },

  /* ------------------------------------------------------------------ */
  /*  TAS                                                                */
  /* ------------------------------------------------------------------ */
  bags: {
    plastic_bottle: {
      title: 'Pouch Resleting dari Botol Plastik',
      summary:
        'Botol 1,5 liter dipotong dan diberi resleting menjadi tempat pensil/kosmetik transparan yang kuat dan tahan percikan air.',
      difficulty: 'Sedang',
      minutes: 75,
      materials: [
        '1 botol plastik 1,5 liter (bagian lurus)',
        '1 resleting bekas 25–30 cm',
        'Kain perca atau felt',
        'Lem fleksibel / lem tembak',
        'Pita kecil untuk tarikan resleting',
      ],
      tools: ['Cutter', 'Gunting', 'Penggaris', 'Spidol', 'Penjepit kertas'],
      steps: [
        {
          title: 'Siapkan botol',
          detail: 'Bersihkan botol dan lepas label. Potong bagian leher dan dasar sehingga tersisa tabung lurus sepanjang ±18 cm.',
        },
        {
          title: 'Buat celah resleting',
          detail:
            'Tandai garis memanjang 16 cm di satu sisi tabung, lalu potong dengan cutter membentuk celah selebar 1 cm.',
        },
        {
          title: 'Pasang resleting',
          detail:
            'Rekatkan pita resleting di sepanjang tepi celah dengan lem fleksibel. Jepit dengan penjepit hingga lem kering.',
        },
        {
          title: 'Tutup kedua sisi',
          detail:
            'Gunting dua lingkaran kain/felt sedikit lebih besar dari diameter tabung, lalu rekatkan sebagai penutup ujung pouch.',
        },
        {
          title: 'Rapikan tepi',
          detail: 'Tutup tepi plastik dengan potongan pita atau felt agar nyaman dipegang dan tidak tajam.',
        },
        {
          title: 'Beri tarikan resleting',
          detail: 'Ikat pita kecil pada kepala resleting agar mudah dibuka. Pouch siap dipakai.',
        },
      ],
      tips: [
        'Pilih botol bening agar isi pouch kelihatan.',
        'Hiasi dengan stiker atau tulisan spidol permanen.',
      ],
      safety: 'Gunakan alas potong dan sarung tangan tipis saat memotong plastik.',
      impact: 'Botol sekali pakai berubah menjadi tempat penyimpanan yang tahan lama.',
    },

    cardboard: {
      title: 'Tas Jinjing Kardus Berlapis Kain',
      summary:
        'Kardus bergelombang dirakit menjadi tas kotak yang kokoh, lalu dibungkus kain dan diberi tali rami sebagai pegangan.',
      difficulty: 'Menantang',
      minutes: 150,
      materials: [
        'Kardus bergelombang tebal',
        'Kain perca atau kertas kado',
        'Lem kain / lem kayu',
        'Tali rami 80 cm',
        'Mata ayam (eyelet) atau ring kecil',
        'Pernis bening (opsional)',
      ],
      tools: ['Cutter', 'Penggaris', 'Gunting', 'Palu kecil & paku untuk eyelet', 'Penjepit'],
      steps: [
        {
          title: 'Ukur pola tas',
          detail:
            'Target ukuran tas 25 x 30 x 10 cm. Potong 2 panel depan/belakang (25 x 30), 2 panel samping (10 x 30), dan 2 alas (25 x 10).',
        },
        {
          title: 'Gandakan panel',
          detail: 'Rekatkan dua lapis kardus untuk setiap panel agar tidak mudah melengkung, lalu tekan sampai kering.',
        },
        {
          title: 'Rakit kotak tas',
          detail: 'Rekatkan panel samping dan alas ke panel utama, kemudian perkuat sudut dengan lakban kertas.',
        },
        {
          title: 'Lapisi dengan kain',
          detail: 'Tempel kain di permukaan luar dengan lem tipis, rapikan lipatan di sudut, dan lipat ujung kain ke bagian dalam.',
        },
        {
          title: 'Pasang pegangan',
          detail:
            'Lubangi dua titik di tiap sisi atas, pasang eyelet, lalu masukkan tali rami dan simpul kuat dari dalam.',
        },
        {
          title: 'Finishing',
          detail: 'Beri pernis bening agar tahan lecet dan percikan air, lalu biarkan kering 24 jam.',
        },
      ],
      tips: [
        'Gunakan untuk barang ringan (kado, buku, camilan), bukan beban berat.',
        'Tambahkan lapisan kertas karton di dalam sebagai penguat alas.',
      ],
      safety: 'Berhati-hatilah saat memotong kardus tebal; gunakan cutter baru dan alas potong.',
      impact: 'Kemasan bekas menjadi tas kado yang bisa dipakai berulang kali.',
    },

    old_clothes: {
      title: 'Tote Bag Tanpa Jahit dari Kaos Bekas',
      summary:
        'Kaos bekas dipotong dan disimpul menjadi tote bag fleksibel tanpa mesin jahit. Lengan menjadi tali bahu.',
      difficulty: 'Mudah',
      minutes: 45,
      materials: ['1 kaos katun bekas (ukuran L/XL)', 'Kain perca untuk kantong (opsional)'],
      tools: ['Gunting kain', 'Penggaris', 'Kapur jahit'],
      steps: [
        {
          title: 'Siapkan kaos',
          detail: 'Cuci dan setrika kaos, lalu rebahkan rata di meja dengan bagian depan dan belakang saling menumpuk.',
        },
        {
          title: 'Potong lengan dan leher',
          detail: 'Gunting lengan di garis jahitan bahu, lalu lebarkan lubang leher sehingga bagian atas membentuk dua tali bahu.',
        },
        {
          title: 'Gunting fringe di bagian bawah',
          detail:
            'Gunting hem bawah kaos (kedua lapisan sekaligus) menjadi jumbai selebar ±2 cm dan sepanjang 10 cm.',
        },
        {
          title: 'Ikat jumbai',
          detail: 'Simpul pasangan jumbai depan dan belakang dengan simpul ganda sehingga dasar tas tertutup.',
        },
        {
          title: 'Perkuat dasar',
          detail:
            'Buat baris simpul kedua: ikat separuh jumbai bersebelahan dengan jumbai tetangganya agar tidak ada celah.',
        },
        {
          title: 'Tambahkan detail',
          detail: 'Jahit atau lem kantong kecil dari kain perca di bagian dalam bila diinginkan.',
        },
      ],
      tips: [
        'Gunakan kaos tebal untuk tas yang lebih kuat.',
        'Isi tas dengan beban ringan–sedang saja, karena bahan jersey melar.',
      ],
      impact: 'Menjadi pengganti kantong plastik belanja dan mengurangi limbah tekstil.',
    },

    tin_can: {
      title: 'Tas Mini Anyaman Pull-Tab Kaleng',
      summary:
        'Ratusan pull-tab kaleng dirangkai menjadi tas mini metalik yang unik dan sangat tahan lama. Butuh kesabaran tapi hasilnya istimewa.',
      difficulty: 'Menantang',
      minutes: 300,
      materials: [
        '150–250 pull-tab kaleng minuman',
        'Jump ring atau benang kait/rajut kuat',
        'Kain lapisan dalam',
        'Resleting atau kancing magnet',
        'Rantai atau tali untuk strap',
      ],
      tools: ['Tang jepit', 'Gunting', 'Amplas halus', 'Jarum & benang'],
      steps: [
        {
          title: 'Kumpulkan dan bersihkan pull-tab',
          detail: 'Cuci semua pull-tab dengan sabun, keringkan, lalu pilah yang tidak penyok.',
        },
        {
          title: 'Amplas tepi',
          detail: 'Haluskan setiap tab agar tidak ada sisi tajam yang bisa melukai tangan atau merusak kain.',
        },
        {
          title: 'Rangkai panel depan dan belakang',
          detail:
            'Sambungkan tab dalam baris dan kolom dengan jump ring atau benang kait. Buat dua panel berukuran sama.',
        },
        {
          title: 'Rakit tas',
          detail:
            'Hubungkan kedua panel dan satu panel alas di sisi dan bagian bawah sehingga membentuk kotak.',
        },
        {
          title: 'Pasang lapisan dalam',
          detail: 'Jahit kain lapisan dalam agar isi tas tidak tersangkut. Pasang resleting atau kancing magnet.',
        },
        {
          title: 'Pasang strap',
          detail: 'Sambungkan rantai atau tali pada sisi kiri dan kanan, lalu uji kekuatannya.',
        },
      ],
      tips: [
        'Kumpulkan pull-tab dari teman atau lingkungan sekitar untuk mempercepat.',
        'Mulai dari tas mini (clutch) sebelum membuat ukuran lebih besar.',
      ],
      safety: 'Pakai sarung tangan tipis saat mengamplas dan merangkai; pastikan seluruh tepi sudah halus.',
      impact: 'Limbah kecil yang sulit didaur ulang berubah menjadi karya fashion yang bernilai tinggi.',
    },
  },
};

export function getIdea(category: CategoryId, material: MaterialId): Idea {
  return IDEAS[category][material];
}
