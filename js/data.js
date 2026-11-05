window.LAB_DATA = {
  labs: [
    {id:"biology",name:"Biology Lab",symbol:"⌬",desc:"Explore living systems, cells, genetics and ecological relationships.",topics:["Cell Explorer","Photosynthesis","Genetics Simulator","Ecosystem Simulator","Virtual Microscope"]},
    {id:"chemistry",name:"Chemistry Lab",symbol:"⚗",desc:"Investigate matter, solutions, reactions and molecular structures.",topics:["pH Laboratory","Periodic Table","Virtual Beaker","Molecular Builder","Titration Simulator"]},
    {id:"physics",name:"Physics Lab",symbol:"↗",desc:"Test motion, forces, energy, waves, optics and electricity.",topics:["GLB Lab","GLBB Lab","Newton Lab","Projectile Motion","Electric Circuit","Optics Lab"]},
    {id:"earth",name:"Earth & Space",symbol:"◎",desc:"Discover planetary systems, Earth's layers and natural cycles.",topics:["Earth Layer Explorer","Water Cycle","Solar System","Planet Gravity","Moon Phase"]}
  ],
  experiments:[
    {id:"glb",name:"Gerak Lurus Beraturan",field:"Physics",level:"Dasar",duration:"8 min",desc:"Amati hubungan posisi dan waktu saat kecepatan konstan.",page:"physics"},
    {id:"glbb",name:"Gerak Lurus Berubah Beraturan",field:"Physics",level:"Menengah",duration:"12 min",desc:"Uji pengaruh percepatan terhadap gerak benda.",page:"physics"},
    {id:"photo",name:"Laju Fotosintesis",field:"Biology",level:"Menengah",duration:"10 min",desc:"Ubah intensitas cahaya dan amati laju fotosintesis model.",page:"biology"},
    {id:"ph",name:"Pengukuran pH",field:"Chemistry",level:"Dasar",duration:"6 min",desc:"Bandingkan sampel asam, netral, dan basa secara virtual.",page:"chemistry"},
    {id:"cell",name:"Eksplorasi Sel",field:"Biology",level:"Dasar",duration:"7 min",desc:"Kenali organel sel dan fungsi biologisnya.",page:"biology"},
    {id:"newton",name:"Hukum II Newton",field:"Physics",level:"Menengah",duration:"10 min",desc:"Investigasi resultan gaya, massa, dan percepatan.",page:"physics"}
  ],
  organelles:[
    ["Nukleus","Pusat pengendali sel yang menyimpan sebagian besar materi genetik (DNA)."],
    ["Mitokondria","Tempat utama respirasi sel aerob dan produksi ATP."],
    ["Ribosom","Tempat sintesis protein dari informasi RNA."],
    ["Membran sel","Pembatas selektif yang mengatur pertukaran zat dengan lingkungan."],
    ["Sitoplasma","Medium tempat organel berada dan banyak reaksi metabolisme berlangsung."],
    ["Kloroplas","Organel sel tumbuhan dan alga tempat fotosintesis berlangsung."],
    ["Vakuola","Ruang penyimpanan; vakuola sentral membantu menjaga tekanan turgor tumbuhan."]
  ],
  periodic:[
    ["H","Hidrogen",1,1,"1","Nonlogam"],["He","Helium",2,18,"2","Gas mulia"],
    ["Li","Litium",3,1,"2,1","Logam alkali"],["Be","Berilium",4,2,"2,2","Logam alkali tanah"],
    ["B","Boron",5,13,"2,3","Metaloid"],["C","Karbon",6,14,"2,4","Nonlogam"],["N","Nitrogen",7,15,"2,5","Nonlogam"],["O","Oksigen",8,16,"2,6","Nonlogam"],["F","Fluorin",9,17,"2,7","Halogen"],["Ne","Neon",10,18,"2,8","Gas mulia"],
    ["Na","Natrium",11,1,"2,8,1","Logam alkali"],["Mg","Magnesium",12,2,"2,8,2","Logam alkali tanah"],["Al","Aluminium",13,13,"2,8,3","Logam"],["Si","Silikon",14,14,"2,8,4","Metaloid"],["P","Fosfor",15,15,"2,8,5","Nonlogam"],["S","Sulfur",16,16,"2,8,6","Nonlogam"],["Cl","Klorin",17,17,"2,8,7","Halogen"],["Ar","Argon",18,18,"2,8,8","Gas mulia"],
    ["K","Kalium",19,1,"2,8,8,1","Logam alkali"],["Ca","Kalsium",20,2,"2,8,8,2","Logam alkali tanah"]
  ]
};