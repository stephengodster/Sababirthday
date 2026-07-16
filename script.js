// FADE IN ANIMATIONS

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach((el) => {

observer.observe(el);

});

// FLOATING BUTTERFLIES

for(let i = 0; i < 15; i++){

const butterfly = document.createElement("div");

butterfly.classList.add("butterfly");

butterfly.innerHTML = "🦋";

butterfly.style.left = Math.random() * 100 + "vw";

butterfly.style.animationDuration =
(12 + Math.random() * 10) + "s";

butterfly.style.animationDelay =
(Math.random() * 8) + "s";

butterfly.style.fontSize =
(18 + Math.random() * 18) + "px";

document.body.appendChild(butterfly);

}

// FLOATING HEARTS IN FINAL SECTION

const finalSection = document.querySelector(".final-section");

if(finalSection){

setInterval(() => {

const heart = document.createElement("div");

heart.innerHTML = "❤️";

heart.classList.add("floating-heart");

heart.style.left =
Math.random() * 100 + "%";

finalSection.appendChild(heart);

setTimeout(() => {

heart.remove();

},5000);

},1200);

}

// SURPRISE MESSAGE

const surpriseBtn = document.createElement("button");

surpriseBtn.innerText = "🎁 Open Birthday Surprise";

surpriseBtn.classList.add("surprise-btn");

const final = document.querySelector(".final-section");

if(final){

final.appendChild(surpriseBtn);

surpriseBtn.addEventListener("click", () => {

alert(
"Happy Birthday Saba 🌹\n\nMay your life be filled with peace, happiness, beautiful beaches, butterflies, black roses, laughter and countless blessings.\n\nYou are appreciated more than you know. ❤️"
);

});

}
