const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 115,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 119,
    colors: [
      {
        code: "light",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 117,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "ligtgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 126,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTittle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log("click");
    // change or switch the current slide
    wrapper.style.transform = `translate(${-100 * index}vw)`;

    // change the choosen product
    choosenProduct = products[index];

    // change text of the current product
    currentProductTittle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img
    
    // assign the product color
    currentProductColor.forEach((color,index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

// switching product image color
currentProductColor.forEach((color,index) => {
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})
  