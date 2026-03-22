const container = document.querySelector(".categories");
const leftBtn = document.querySelector(".tabArrow.left");
const rightBtn = document.querySelector(".tabArrow.right");

// 點擊滑動
leftBtn.addEventListener("click", () => {
container.scrollBy({ left: -120, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
container.scrollBy({ left: 120, behavior: "smooth" });
});

// 判斷箭頭顯示
function updateArrows() {
const scrollLeft = container.scrollLeft;
const maxScroll = container.scrollWidth - container.clientWidth;

if (scrollLeft > 10) {
    leftBtn.classList.add("show");
} else {
    leftBtn.classList.remove("show");
}

if (scrollLeft < maxScroll - 10) {
    rightBtn.classList.add("show");
} else {
    rightBtn.classList.remove("show");
}
}

// 初始化 + 滾動監聽
updateArrows();
container.addEventListener("scroll", updateArrows);
window.addEventListener("resize", updateArrows);