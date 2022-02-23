const card = () => {
    const cardBtn = document.querySelector(".button-cart");
    const modalCard = document.querySelector("#modal-cart");
    const modalClose = document.querySelector(".modal-close");
    cardBtn.addEventListener("click", () => {
        modalCard.style.display = "flex";
    });

    modalClose.addEventListener("click", () => {
        modalCard.style.display = "";
    });
}

card();