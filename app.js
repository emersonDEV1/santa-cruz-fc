const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "regata frente",
    price: 59,
    colors: [
      {
        code: "white",
        img: "./img/regatafrente.png",
      },
      {
        code: "red",
        img: "./img/regatacosta.png",
      },
    ],
  },
  {
    id: 2,
    title: "regata costa",
    price: 59.90,
    colors: [
      {
        code: "white",
        img: "./img/regatacosta.png",
      },
      {
        code: "red",
        img: "./img/regatacosta.png",
      },
    ],
  },
  {
    id: 3,
    title: "regata nova",
    price: 64,
    colors: [
      {
        code: "white",
        img: "./img/regata1.png",
      },
      {
        code: "red",
        img: "./img/regata1.png",
      },
    ],
  },
  {
    id: 4,
    title: "2 em 1",
    price: 89,
    colors: [
      {
        code: "white",
        img: "./img/2regata.png",
      },
      {
        code: "red",
        img: "./img/2regata.png",
      },
    ],
  },
  {
    id: 5,
    title: "2 em 1",
    price: 89,
    colors: [
      {
        code: "white",
        img: "./img/2regata.png",
      },
      {
        code: "red",
        img: "./img/2regata.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});