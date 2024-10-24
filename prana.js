// carousel defilant avec la librairie flikity.
const elem = document.querySelector(".main-carousel");
const flkty = new Flickity(elem, {
  // options
  cellAlign: "right",
  contain: true,
  initialIndex: 2,
  pageDots: false,
  wrapAround: true,
  autoPlay: 5000,
  draggable: true,
  prevNextButtons: false,
  pauseAutoPlayOnHover: false
});

// ----------section healthy----------------

// attraper les images qui se trouve dans section healthy et les changer au hover
const hoverEffect = document.querySelectorAll(".img-part");
console.log(hoverEffect);

// ecouter le hover
hoverEffect.forEach(element => {
  element.addEventListener("mouseenter", () => {
    element.classList.add("img-hover");

    const img = element.querySelector("img");

    if(img.getAttribute("src") === "images/files/granolove-defaut.webp"){
      img.setAttribute("src", "images/files/granolove-hover.webp");
    }else{
        img.setAttribute("src", "images/files/granolove-defaut.webp");
    }
    
  });
  element.addEventListener("mouseleave", () => {
    element.classList.remove("img-hover");
    const img = element.querySelector("img");

    if(img.getAttribute("src") === "images/files/granolove-defaut.webp"){
      img.setAttribute("src", "images/files/granolove-defaut.webp");
    }else{
        img.setAttribute("src", "images/files/granolove-defaut.webp");
    }
  });
});




