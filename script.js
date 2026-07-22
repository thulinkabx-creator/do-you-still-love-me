const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

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
