const message = `Selamat ulang tahun, Anggita Dwi Rismawati ❤️

Selamat bertambah usia, sayang.

Hari ini adalah hari yang spesial karena seseorang yang begitu berarti dalam hidupku sedang merayakan hari lahirnya. Aku bersyukur bisa mengenal kamu, dekat dengan kamu, dan punya cerita bersamamu.

Terima kasih untuk setiap senyum, perhatian, cerita, dan momen kecil yang kita lewati bersama. Hal-hal sederhana terasa lebih indah sejak ada kamu.

Aku mungkin tidak selalu bisa memberikan hal-hal yang sempurna, tapi aku ingin terus berusaha memberikan yang terbaik untukmu.

Di usia barumu ini, aku berharap kamu selalu sehat, bahagia, dan dikelilingi hal-hal baik. Semoga impianmu tercapai satu per satu, langkahmu dimudahkan, dan kamu selalu punya alasan untuk tersenyum.

Aku berharap masih bisa menemani banyak cerita yang akan datang: mendengarkan ceritamu, tertawa bersamamu, dan melewati banyak hal bersama.

Selamat ulang tahun, cintakuuu. Semoga hari ini menjadi awal dari banyak kebahagiaan baru untukmu.

Aku sayang kamu, hari ini dan seterusnya. ❤️`;

let typingIndex = 0;
let typingStarted = false;
let surpriseOpened = false;
let musicStarted = false;
let typingTimer = null;

function startExperience() {
  const intro = document.getElementById("intro");
  const home = document.getElementById("home");
  intro.classList.add("hide");
  home.classList.add("active");
  window.setTimeout(() => {
    intro.style.display = "none";
    home.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 550);
}

async function toggleMusic() {
  const music = document.getElementById("bg-music");
  const button = document.getElementById("music-button");
  const icon = document.getElementById("music-icon");
  const label = document.getElementById("music-label");

  if (music.paused) {
    try {
      await music.play();
      musicStarted = true;
      icon.textContent = "⏸";
      label.textContent = "Jeda musik";
      button.setAttribute("aria-label", "Jeda musik");
      button.setAttribute("aria-pressed", "true");
    } catch (error) {
      label.textContent = "Coba putar lagi";
      console.warn("Musik belum bisa diputar:", error);
    }
  } else {
    music.pause();
    icon.textContent = "▶";
    label.textContent = "Putar musik";
    button.setAttribute("aria-label", "Putar musik");
    button.setAttribute("aria-pressed", "false");
  }
}

function syncMusicButton() {
  const music = document.getElementById("bg-music");
  const button = document.getElementById("music-button");
  const icon = document.getElementById("music-icon");
  const label = document.getElementById("music-label");
  if (!music || !button) return;
  const playing = !music.paused;
  icon.textContent = playing ? "⏸" : "▶";
  label.textContent = playing ? "Jeda musik" : "Putar musik";
  button.setAttribute("aria-label", playing ? "Jeda musik" : "Putar musik");
  button.setAttribute("aria-pressed", String(playing));
}

function openLetter() {
  const letter = document.getElementById("letter");
  letter.style.display = "block";
  letter.scrollIntoView({ behavior: "smooth", block: "start" });

  if (!typingStarted) {
    typingStarted = true;
    typingTimer = window.setTimeout(typeMessage, 500);
  }
}

function typeMessage() {
  const textElement = document.getElementById("typing-text");
  const cursor = document.getElementById("typing-cursor");
  if (typingIndex < message.length) {
    const char = message.charAt(typingIndex++);
    textElement.append(document.createTextNode(char));
    typingTimer = window.setTimeout(typeMessage, char === "\n" ? 180 : 28);
  } else {
    if (cursor) cursor.style.display = "none";
    document.getElementById("surprise-button").hidden = false;
    document.getElementById("surprise-button").classList.add("show-button");
  }
}

function openSurprise() {
  const surprise = document.getElementById("surprise");
  if (!surpriseOpened) {
    surpriseOpened = true;
    surprise.style.display = "block";
    window.setTimeout(() => surprise.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    createHearts();
    createConfetti();
  } else {
    surprise.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function giftClicked() {
  const gift = document.getElementById("gift");
  gift.style.transform = "scale(1.25) rotate(-9deg)";
  window.setTimeout(() => { gift.style.transform = ""; }, 450);
  createHearts();
  createConfetti();
}

function createHearts() {
  const symbols = ["❤️", "💕", "💗", "💖", "💘", "💝"];
  for (let i = 0; i < 28; i++) {
    const heart = document.createElement("div");
    heart.className = "celebration-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = (45 + Math.random() * 50) + "vh";
    heart.style.fontSize = (16 + Math.random() * 22) + "px";
    heart.style.animationDelay = Math.random() * .7 + "s";
    document.body.appendChild(heart);
    window.setTimeout(() => heart.remove(), 4200);
  }
}

function createConfetti() {
  const symbols = ["✨", "💖", "💕", "⭐", "🌸"];
  for (let i = 0; i < 26; i++) {
    const piece = document.createElement("div");
    piece.className = "celebration-confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-40px";
    piece.style.fontSize = (12 + Math.random() * 18) + "px";
    piece.style.animationDelay = Math.random() * 1.2 + "s";
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 5000);
  }
}

function replaySurprise() {
  createHearts();
  createConfetti();
}

function backToHome() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("home").classList.add("active");
  document.getElementById("home").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  if (music) {
    music.volume = 0.4;
    music.addEventListener("play", syncMusicButton);
    music.addEventListener("pause", syncMusicButton);
    music.addEventListener("ended", syncMusicButton);
  }
  const gift = document.getElementById("gift");
  if (gift) {
    gift.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        giftClicked();
      }
    });
  }
});
