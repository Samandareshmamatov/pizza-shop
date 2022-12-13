let addCart = document.querySelectorAll(".addCart");
let addItemCart = document.querySelectorAll(".addItemCart");
let shopCart = document.querySelectorAll(".shopCart");
let priceCart = document.querySelector(".price");
let countContent = document.querySelectorAll(".count")
let price = 0;
let deleteItem = document.querySelectorAll(".deleteItem")
let buyNow = document.querySelector(".buyNow")
let plusOne = document.querySelectorAll(".plusOne")


for (let i = 0; i < addCart.length; i++) {

    let count = 0;
    addCart[i].addEventListener("click", () => {
        count++;
        countContent[i].innerHTML = `${count}`
        shopCart[i].parentNode.classList.remove("d-none")
        shopCart[i].innerHTML = `${addCart[i].parentNode.children[0].innerHTML}`;
        price += parseInt(addCart[i].parentNode.children[2].innerHTML)
        priceCart.innerHTML = `Total price : ${price} $`;
        plusOne[i].innerHTML = "+1";
        setTimeout(() => {
            plusOne[i].innerHTML = "";
        }, 120)
    });

    deleteItem[i].addEventListener("click", () => {
        if (count > 0) {
            count--;
            countContent[i].textContent = `${count}`
            price -= parseInt(addCart[i].parentNode.children[2].textContent)
            priceCart.textContent = `Total price : ${price} $`;

        }
    });

    addItemCart[i].addEventListener("click", () => {
        if (count >= 0) {
            count++;
            countContent[i].textContent = `${count}`
            price += parseInt(addCart[i].parentNode.children[2].textContent)
            priceCart.textContent = `Total price : ${price} $`;
        }
    });

}


buyNow.addEventListener("click", () => document.location.reload())