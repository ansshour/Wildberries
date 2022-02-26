const GetGoods = () => {

    const nav__items = document.querySelectorAll(".navigation-link");


    const render = (good) => {
        const goods_container = document.querySelector(".long-goods-list");
        goods_container.innerHTML = "";
        good.forEach((item) => {
            const good_item = document.createElement("div");
            good_item.classList.add("col-lg-3");
            good_item.classList.add("col-sm-6");
            good_item.innerHTML = `
            <div class="goods-card">
                <span class="label ${item.label ? null : 'd-none'}">${item.label}</span>
                <img src="db/${item.img}" alt="image: ${item.name}" class="goods-image">
                <h3 class="goods-title">${item.name}</h3>
                <p class="goods-description">${item.description}</p>
                <button class="button goods-card-btn add-to-cart" data-id="${item.id}">
                    <span class="button-price">$${item.price}</span>
                </button>
            </div>
            `
            goods_container.append(good_item);
        });
    };

    const GetData = (attrValue, itemInnerText) => {
        fetch("../db/db.json")
            .then((res) => res.json())
            .then((data) => {
                const dataFilter = attrValue ? data.filter((elem) => (elem[attrValue] == itemInnerText)) : data;
                localStorage.setItem("goods", JSON.stringify(dataFilter));
                if (window.location.pathname !== "/goods.html") {
                    window.location.href = "/goods.html";
                } else {
                    render(dataFilter);
                }

            });
    };


    nav__items.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            const itemInnerText = item.textContent;
            const attrValue = item.getAttribute("data-field");
            GetData(attrValue, itemInnerText);
        });
    });

    if (localStorage.getItem("goods") && (window.location.pathname === "/goods.html")) {
        render(JSON.parse(localStorage.getItem("goods")));
    }


    const viewmoreBtn = document.querySelector(".more");
    try {
        viewmoreBtn.addEventListener("click", () => {
            GetData();
        });
    } catch (er) {

    }
}

GetGoods();