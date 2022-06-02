const wrapper = document.querySelector(".sliderWrapper")
const menuItems= document.querySelectorAll(".menuItem") 

menuItems.forEach((item,index) => {
    item.addEventListener("click", () => {
        console.log("click")
        wrapper.style.transform = `translate(${-100 * index}vw)`;
        // wrapper.style.tansform = `tanslateX(${-100 * index}vw)`;    )`
    });
}); 