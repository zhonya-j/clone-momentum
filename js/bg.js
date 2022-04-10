bg_imgs = [
    "https://i.pinimg.com/originals/97/5e/25/975e255a1125f037aeb222b753d57b7e.jpg",
    "https://i.pinimg.com/originals/6e/cf/e6/6ecfe6eddff5991dfc699626315f71a7.jpg",
    "https://i.pinimg.com/originals/bd/7b/4d/bd7b4d89ed99aba80eb4b22b991c9280.jpg",
]

const randomNumber2 = Math.floor(Math.random() * bg_imgs.length);
const bgImage = document.createElement("img");
bgImage.src = `${bg_imgs[randomNumber2]}`;
bgImage.id = "bg"
document.body.appendChild(bgImage);