const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const funnyTexts = [
    "Really? 🥺",
    "Think again ❤️",
    "Are you sure? 😭",
    "Wrong answer 😂",
    "Try again 😘",
    "Nope 😜",
    "YES is better ❤️"
];

let clickCount = 0;

// Make the NO button move when clicked
noBtn.addEventListener("click", () => {

    clickCount++;

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";

    if (clickCount <= funnyTexts.length) {
        noBtn.innerText = funnyTexts[clickCount - 1];
    }

    // Make YES button bigger
    const size = 18 + (clickCount * 3);

    yesBtn.style.fontSize = size + "px";
    yesBtn.style.padding =
        (15 + clickCount * 2) + "px " +
        (30 + clickCount * 4) + "px";

});

// Mouse gets close = NO button runs away
document.addEventListener("mousemove", (e) => {

    const rect = noBtn.getBoundingClientRect();

    const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 100) {

        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        noBtn.style.position = "fixed";
        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";

    }

});

// YES button
yesBtn.addEventListener("click", () => {

    document.body.innerHTML = `
    <div style="
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background:linear-gradient(135deg,#ff9acb,#ff6fa5);
        color:white;
        text-align:center;
        font-family:Arial,sans-serif;
        overflow:hidden;
    ">

        <h1 style="font-size:60px;">
        🥳 YAAAAY!! ❤️🥳
        </h1>

        <h2>
        Relationship Status Updated ❤️
        <br><br>
        Forever Together 🥹💍
        </h2>

        <p style="font-size:22px;margin-top:20px;">
        I love you more than yesterday,<br>
        but less than tomorrow. ❤️
        </p>

    </div>
    `;

    for (let i = 0; i < 80; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.transition = "3s linear";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = "-100px";
            heart.style.opacity = "0";
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 3200);

    }

    setTimeout(() => {
        alert("❤️ Thank you for choosing YES! ❤️");
    }, 1200);

});
