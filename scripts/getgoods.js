const GetGoods = () => {
    const nav__items = document.querySelectorAll(".navigation-link");
    fetch("../db/db.json")
        .then((res) => res.json())
        .then((data) => {
            nav__items.forEach((elem) => {
                elem.addEventListener("click", (event) => {
                    event.preventDefault;
                    localStorage.setItem("goods", JSON.stringify(data));
                    console.log(data);
                });
            })
        })


}

GetGoods();