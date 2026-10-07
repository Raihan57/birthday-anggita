/* ==================================================
   OPENING CINEMATIC
================================================== */

function startExperience() {

    const intro =
        document.getElementById("intro");

    const home =
        document.getElementById("home");


    if (!intro || !home) {
        return;
    }


    intro.classList.add("hide");


    setTimeout(function() {

        home.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);

}


/* ==================================================
   PESAN ULANG TAHUN
================================================== */

const message =
`Selamat ulang tahun, Anggita Dwi Rismawati ❤️

Selamat bertambah usia, sayang.

Hari ini adalah hari yang sangat spesial,
karena hari ini adalah hari lahir seseorang
yang begitu berarti dalam hidupku.

Aku bersyukur bisa mengenal kamu,
bisa dekat dengan kamu,
dan bisa memiliki begitu banyak cerita
bersama kamu.

Terima kasih sudah hadir di hidupku.
Terima kasih untuk setiap senyum,
setiap perhatian, setiap cerita,
dan setiap momen kecil yang kita lewati bersama.

Mungkin aku tidak selalu bisa memberikan
hal-hal yang sempurna untuk kamu,
tapi aku ingin kamu tahu bahwa
aku akan selalu berusaha memberikan
yang terbaik untukmu.

Di usia kamu yang baru ini,
aku berharap kamu selalu diberikan
kesehatan, kebahagiaan, dan ketenangan.

Semoga semua impian dan keinginanmu
bisa tercapai satu per satu.
Semoga langkahmu selalu dimudahkan,
dan semoga hal-hal baik selalu datang
ke dalam hidupmu.

Aku juga berharap,
di banyak cerita yang akan datang,
aku masih bisa berada di sampingmu.
Menemani kamu,
mendengarkan cerita kamu,
tertawa bersama kamu,
dan melewati banyak hal bersama kamu.

Anggita, terima kasih sudah menjadi
seseorang yang begitu spesial bagiku.

Selamat ulang tahun, sayang. ❤️

Semoga hari ini menjadi awal
dari banyak kebahagiaan baru untukmu.

Aku sayang kamu.
Hari ini, besok, dan semoga seterusnya. ❤️`;


/* ==================================================
   VARIABEL
================================================== */

let index = 0;

let typingStarted = false;

let surpriseOpened = false;


/* ==================================================
   BUKA SURAT
================================================== */

function openLetter() {

    const letter =
        document.getElementById("letter");


    if (!letter) {
        return;
    }


    letter.style.display = "flex";


    setTimeout(function() {

        letter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);


    setTimeout(function() {

        letter.classList.add("opened");

    }, 500);


    /* Musik */

    const music =
        document.getElementById("bg-music");


    if (music) {

        music.volume = 0.4;

        music.play().catch(function(error) {

            console.log(
                "Musik belum bisa diputar:",
                error
            );

        });

    }


    /* Mulai mengetik */

    if (!typingStarted) {

        typingStarted = true;


        setTimeout(function() {

            typeMessage();

        }, 1000);

    }

}


/* ==================================================
   EFEK MENGETIK
================================================== */

function typeMessage() {

    const textElement =
        document.getElementById("typing-text");


    if (!textElement) {
        return;
    }


    if (index < message.length) {


        if (
            message.charAt(index) === "\n"
        ) {

            textElement.innerHTML += "<br>";

        }

        else {

            textElement.innerHTML +=
                message.charAt(index);

        }


        index++;


        setTimeout(
            typeMessage,
            45
        );

    }

    else {


        const button =
            document.querySelector(
                ".surprise-button"
            );


        if (button) {

            button.classList.add(
                "button-show"
            );

        }

    }

}


/* ==================================================
   BUKA SURPRISE
================================================== */

function openSurprise() {

    const surprise =
        document.getElementById("surprise");


    if (!surprise) {
        return;
    }


    if (surpriseOpened) {
        return;
    }


    surpriseOpened = true;


    surprise.style.display = "flex";


    setTimeout(function() {

        surprise.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }, 100);


    createHearts();

    createConfetti();

}


/* ==================================================
   KLIK HADIAH
================================================== */

function giftClicked() {

    createHearts();

    createConfetti();


    const gift =
        document.querySelector(".gift");


    if (gift) {

        gift.style.transform =
            "scale(1.35) rotate(-8deg)";


        setTimeout(function() {

            gift.style.transform = "";

        }, 500);

    }

}


/* ==================================================
   HATI BERHAMBURAN
================================================== */

function createHearts() {

    const heartSymbols = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝"

    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {


        const heart =
            document.createElement("div");


        heart.classList.add(
            "celebration-heart"
        );


        heart.innerHTML =
            heartSymbols[
                Math.floor(
                    Math.random() *
                    heartSymbols.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.top =
            Math.random() * 100 + "vh";


        heart.style.fontSize =
            (
                15 +
                Math.random() * 25
            ) + "px";


        heart.style.animationDuration =
            (
                2 +
                Math.random() * 3
            ) + "s";


        heart.style.animationDelay =
            Math.random() * 0.8 + "s";


        document.body.appendChild(
            heart
        );


        setTimeout(function() {

            heart.remove();

        }, 5000);

    }

}


/* ==================================================
   CONFETTI
================================================== */

function createConfetti() {

    const symbols = [

        "✨",
        "💖",
        "💕",
        "❤️",
        "⭐",
        "🌸"

    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {


        const confetti =
            document.createElement("div");


        confetti.classList.add(
            "celebration-confetti"
        );


        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.top =
            "-50px";


        confetti.style.fontSize =
            (
                12 +
                Math.random() * 22
            ) + "px";


        confetti.style.animationDuration =
            (
                2 +
                Math.random() * 3
            ) + "s";


        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        document.body.appendChild(
            confetti
        );


        setTimeout(function() {

            confetti.remove();

        }, 6000);

    }

}


/* ==================================================
   ULANGI KEJUTAN
================================================== */

function replaySurprise() {

    createHearts();

    createConfetti();


    const gift =
        document.querySelector(".gift");


    if (gift) {

        gift.style.transform =
            "scale(1.35) rotate(-8deg)";


        setTimeout(function() {

            gift.style.transform = "";

        }, 500);

    }


    const music =
        document.getElementById(
            "bg-music"
        );


    if (music) {

        music.play().catch(
            function(error) {

                console.log(
                    "Musik belum bisa diputar:",
                    error
                );

            }
        );

    }

}