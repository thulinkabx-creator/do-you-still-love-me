const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
document.addEventListener("mousemove", (e) => {

    const rect = noBtn.getBoundingClientRect();

    const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 120) {

        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";

    }

});
const funnyTexts = [
    "Really? 🥺",
    "Think again ❤️",
    "Are you sure? 😭",
    "Wrong answer 😂",
    "Try again 😘",
    "Nope 😜"
];

let clickCount = 0;

noBtn.addEventListener("click", () => {

    clickCount++;

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";

    if (clickCount <= funnyTexts.length) {
        noBtn.innerText = funnyTexts[clickCount - 1];
    }
const newSize = 18 + (clickCount * 4);

yesBtn.style.fontSize = newSize + "px";
yesBtn.style.padding = (15 + clickCount * 2) + "px " + (30 + clickCount * 4) + "px";
});

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
        overflow:hidden;
        font-family:Arial,sans-serif;
    ">

        <h1 style="font-size:60px;">🎉 YAAAAY!! ❤️ 🎉</h1>

        <h2>I knew it! 🥹💖</h2>

        <p style="font-size:22px;margin-top:20px;">
            I love you more than yesterday,<br>
            but less than tomorrow. ❤️
        </p>

    </div>
    `;

});
