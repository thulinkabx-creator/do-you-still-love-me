const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let count = 0;

const messages = [
  "Really? 🥺",
  "Think again ❤️",
  "Are you sure? 😭",
  "Wrong answer 😂",
  "Try YES 😘"
];

noBtn.addEventListener("click", () => {

  count++;

  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  noBtn.style.position = "fixed";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  if (count <= messages.length) {
    noBtn.textContent = messages[count - 1];
  }

  yesBtn.style.transform = `scale(${1 + count * 0.15})`;

});

yesBtn.addEventListener("click", () => {

document.body.innerHTML = `
<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background:linear-gradient(135deg,#ff9acb,#ff6fa5);
color:white;
font-family:Arial,sans-serif;
text-align:center;
padding:20px;
">

<h1 style="font-size:60px;">🎉 YAAAY!! ❤️</h1>

<h2>I knew you'd choose YES! 🥰</h2>

<p style="font-size:20px;margin:20px 0;">
Now prove it... ❤️
</p>

<a
href="https://wa.me/YOURNUMBER?text=I%20still%20love%20you%20%E2%9D%A4%EF%B8%8F"
style="
background:white;
color:#ff4f87;
padding:15px 30px;
border-radius:30px;
text-decoration:none;
font-weight:bold;
font-size:20px;
">
💌 Send My Answer
</a>

</div>
`;
  
