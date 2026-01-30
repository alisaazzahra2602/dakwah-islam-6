document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // 1. DATA PUSAT
  // ==========================
  const AppData = {
    materi: [
      {
        id: 1,
        judul: "Pentingnya Zakat Mal",
        waktu: "6 min read",
        ket: "Zakat Mal adalah kewajiban membersihkan harta dan menolong sesama.",
        img: "zakat mal.jpeg",
        isi: `
        <p><span>Zakat Mal</span> merupakan salah satu pilar utama dalam Islam yang bertujuan membersihkan harta dan membantu <span>sesama muslim</span> yang membutuhkan. Dengan menunaikan zakat, seorang mukmin tidak hanya memenuhi kewajibannya, tetapi juga mendapatkan keberkahan dalam harta dan kehidupan.</p>
        <p>Zakat mengajarkan <span>kepedulian sosial</span> dan membiasakan hati untuk tidak serakah. Harta yang diberikan menjadi sarana untuk menolong fakir miskin, membangun masjid, dan menolong yang membutuhkan, sehingga menciptakan masyarakat yang harmonis dan sejahtera.</p>
        <p>Keutamaan zakat sangat besar, karena Allah SWT menjanjikan <span>pahala berlipat ganda</span> bagi yang menunaikannya dengan ikhlas. Selain itu, zakat juga menjadi perisai dari kemiskinan dan penebus dosa, sehingga seorang mukmin akan mendapat kebahagiaan dunia dan akhirat.</p>
      `,
      },
      {
        id: 2,
        judul: "Keutamaan Sabar",
        waktu: "7 min read",
        ket: "Sabar adalah pilar utama akhlak Muslim, menerima ujian dengan ridha.",
        img: "sabar (2).jpeg",
        isi: `
        <p><span>Sabar</span> merupakan pilar utama dalam akhlak seorang Muslim yang mencakup kemampuan menahan diri dari keluh kesah, kemarahan, dan tindakan impulsif saat menghadapi ketetapan Allah SWT. Sabar adalah kekuatan spiritual untuk tetap teguh di atas ketaatan dan menerima musibah dengan hati yang ridha.</p>
        <p>Allah SWT menjanjikan <span>pahala tanpa batas</span> bagi mereka yang mampu menjaga hati dan lisannya dalam ujian. Kesabaran mengubah kesulitan menjadi sarana <span>penggugur dosa</span> dan peningkat derajat, sehingga seorang mukmin sejati akan melihat ujian sebagai kasih sayang Allah.</p>
        <p>Sabar juga berfungsi sebagai <span>cahaya penuntun</span> dalam mengambil keputusan. Orang yang sabar dianugerahi kebijaksanaan untuk melihat hikmah di balik setiap peristiwa, sehingga tidak mudah putus asa dan selalu menempatkan shalat sebagai penolong dalam hidup.</p>
      `,
      },
      {
        id: 3,
        judul: "Adab Menuntut Ilmu",
        waktu: "6 min read",
        ket: "Menuntut ilmu harus dengan niat tulus dan adab kepada guru.",
        img: "menuntut ilmu.jpg",
        isi: `
        <p><span>Menuntut ilmu</span> adalah kewajiban setiap Muslim. Niat yang tulus dan adab kepada guru adalah fondasi utama agar ilmu yang diperoleh bermanfaat dan diterima oleh Allah SWT.</p>
        <p>Seorang penuntut ilmu harus menjaga <span>integritas</span> dan tidak sombong. Ilmu bukan hanya tentang hafalan, tetapi penerapan dalam kehidupan sehari-hari untuk mendekatkan diri kepada Allah dan memberi manfaat bagi masyarakat.</p>
        <p>Keutamaan menuntut ilmu sangat besar. Rasulullah SAW bersabda bahwa pencari ilmu akan mendapatkan <span>kedudukan mulia</span> di surga, serta ilmu itu menjadi cahaya yang menerangi jalan hidupnya.</p>
      `,
      },
      {
        id: 4,
        judul: "Bakti Kepada Orang Tua",
        waktu: "5 min read",
        ket: "Birrul Walidain adalah kunci ridha Allah.",
        img: "bakti ortu.jpg",
        isi: `
        <p><span>Bakti kepada orang tua</span> (Birrul Walidain) adalah kewajiban terbesar setelah beriman kepada Allah. Ridha Allah terletak pada ridha orang tua, sehingga menghormati mereka menjadi jalan menuju surga.</p>
        <p>Seorang anak harus <span>memuliakan</span> orang tua dengan ucapan, perilaku, dan perhatian, serta membantu mereka dalam kebutuhan hidup, karena itu termasuk amal shaleh yang paling dicintai Allah.</p>
        <p>Keutamaan berbakti sangat besar, karena Allah menjanjikan <span>panjang umur</span> dan keberkahan bagi keluarga yang harmonis. Anak yang berbakti akan mendapatkan doa restu dari orang tua yang menjadi pelindung dari kesulitan hidup.</p>
      `,
      },
      {
        id: 5,
        judul: "Bahaya Ghibah",
        waktu: "4 min read",
        ket: "Menjaga lisan dari membicarakan keburukan orang lain.",
        img: "ghibah.jpg",
        isi: `
        <p><span>Ghibah</span> adalah perbuatan membicarakan keburukan orang lain di belakang mereka. Islam mengingatkan bahwa ghibah ibarat memakan daging saudara sendiri yang sudah mati.</p>
        <p>Menjaga <span>lisan</span> dari ghibah adalah kewajiban agar pahala amal kita tidak terhapus dan hati tetap bersih. Ghibah menyebabkan <span>kerusakan hubungan sosial</span> dan mendatangkan murka Allah.</p>
        <p>Menghindari ghibah membawa <span>ketenangan</span> dan keberkahan hidup. Orang yang menjaga lidahnya akan dihormati di dunia dan di akhirat, serta menjadi teladan bagi umat Muslim lainnya.</p>
      `,
      },
      {
        id: 6,
        judul: "Shalat Berjamaah",
        waktu: "6 min read",
        ket: "Keutamaan pahala 27 derajat dengan shalat berjamaah di masjid.",
        img: "sholat.jpg",
        isi: `
        <p><span>Shalat berjamaah</span> memiliki keutamaan yang besar. Rasulullah SAW bersabda, pahala shalat berjamaah 27 kali lipat dibanding shalat sendirian.</p>
        <p>Dengan shalat berjamaah, umat Muslim membangun <span>persaudaraan</span> dan mempererat tali ukhuwah. Masjid menjadi pusat ibadah dan pembinaan akhlak.</p>
        <p>Shalat berjamaah juga meningkatkan <span>kedisiplinan</span> dan mendekatkan diri kepada Allah SWT. Orang yang rajin berjamaah akan merasakan kedamaian hati dan keberkahan hidup.</p>
      `,
      },
      // ... bisa ditambah materi lain
    ],
    jadwal: [
      { hari: "Senin", waktu: "19:00 - 20:30", tempat: "Masjid Al-Hikmah" },
      { hari: "Jumat", waktu: "15:30 - 17:00", tempat: "Masjid Agung" },
    ],
    dai: [
      {
        nama: "Habib Hud bin Muhammad Bagir Al Athos",
        deskripsi:
          "Da’i dan ulama yang menekankan tauhid, kesabaran, dan akhlak mulia. Beliau menjadi teladan dakwah yang konsisten meski menghadapi penolakan.",
        img: "habib hud 2.jpeg",
      },
      {
        nama: "Alwi Assegaf",
        deskripsi:
          "Da'i terkenal dengan tausiyah inspiratif dan dakwah motivatif.",
        img: "alwi assegaf.jpeg",
      },
      {
        nama: "Habib Umar bin hafidz",
        deskripsi:
          "Habib Umar bin Hafis adalah ulama dan penceramah yang fokus pada pengajaran Al-Qur'an, tasawuf, dan akhlak mulia. Beliau dikenal menekankan pentingnya menjaga adab, shalat, dan dzikir dalam kehidupan sehari-hari, serta dakwahnya penuh keteladanan dan kasih sayang.",
        img: "habib umar.jpeg",
      },
    ],
  };

  // ==========================
  // 2. UI RENDERER
  // ==========================
  const UI = {
    renderMateri(data) {
      const container = document.getElementById("list-materi");
      if (!container) return;
      container.innerHTML = data
        .map(
          (item) => `
        <div class="card-artikel" onclick="App.openMateriModal(${item.id})">
          <img src="${item.img}" alt="${item.judul}">
          <span class="tag">ARTIKEL • ${item.waktu}</span>
          <h3>${item.judul}</h3>
          <p>${item.ket}</p>
        </div>
      `,
        )
        .join("");
    },

    renderJadwal(data) {
      const container = document.getElementById("list-jadwal");
      if (!container) return;
      container.innerHTML = data
        .map(
          (item) => `
        <div class="card-jadwal">
          <div style="padding:20px">
            <h3>${item.hari}</h3>
            <p><strong>${item.waktu}</strong></p>
            <p>${item.tempat}</p>
          </div>
        </div>
      `,
        )
        .join("");
    },

    renderDai(data) {
      const container = document.getElementById("list-dai");
      if (!container) return;
      container.innerHTML = data
        .map(
          (item, index) => `
        <div class="card-dai" onclick="App.openDaiModal(${index})">
          <img src="${item.img}" alt="${item.nama}">
          <h3>${item.nama}</h3>
          <p>${item.deskripsi}</p>
        </div>
      `,
        )
        .join("");
    },
  };

  // ==========================
  // 3. APP CONTROLLER
  // ==========================
  const App = {
    init() {
      UI.renderMateri(AppData.materi);
      UI.renderJadwal(AppData.jadwal);
      UI.renderDai(AppData.dai);
      this.setupEvents();
    },

    setupEvents() {
      const searchInput = document.getElementById("globalSearch");
      if (searchInput) {
        searchInput.addEventListener("input", (e) => {
          const val = e.target.value.toLowerCase();
          const filtered = AppData.materi.filter(
            (m) =>
              m.judul.toLowerCase().includes(val) ||
              m.ket.toLowerCase().includes(val),
          );
          UI.renderMateri(filtered);
        });
      }

      // Modal materi close
      const closeMateri = document.getElementById("closeBtn");
      if (closeMateri) closeMateri.onclick = () => this.closeMateriModal();

      // Modal Da'i close
      const closeDai = document.getElementById("closeDai");
      if (closeDai) closeDai.onclick = () => this.closeDaiModal();

      // Tutup modal jika klik di luar
      window.onclick = (e) => {
        if (e.target.id === "modalMateri") this.closeMateriModal();
        if (e.target.id === "modalDai") this.closeDaiModal();
      };
    },

    // Materi Modal
    openMateriModal(id) {
      const item = AppData.materi.find((m) => m.id === id);
      if (!item) return;
      const modal = document.getElementById("modalMateri");
      const body = document.getElementById("modalBody");
      body.innerHTML = `
        <img src="${item.img}" alt="${item.judul}">
        <span class="tag">ARTIKEL • ${item.waktu}</span>
        <h2 style="color:#1e7f4f;margin:15px 0;">${item.judul}</h2>
        <div style="line-height:1.8;color:#444;">${item.isi}</div>
      `;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    },

    closeMateriModal() {
      document.getElementById("modalMateri").style.display = "none";
      document.body.style.overflow = "auto";
    },

    // Da'i Modal
    openDaiModal(index) {
      const item = AppData.dai[index];
      if (!item) return;
      const modal = document.getElementById("modalDai");
      const body = document.getElementById("modalBodyDai");
      body.innerHTML = `
        <img src="${item.img}" alt="${item.nama}" style="width:100%;max-height:400px;object-fit:cover;border-radius:10px;margin-bottom:15px;">
        <h2>${item.nama}</h2>
        <p>${item.deskripsi}</p>
      `;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    },

    closeDaiModal() {
      document.getElementById("modalDai").style.display = "none";
      document.body.style.overflow = "auto";
    },
  };

  // Ekspos App global supaya onclick bisa dipakai
  window.App = App;
  App.init();
});
