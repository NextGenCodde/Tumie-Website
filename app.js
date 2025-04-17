let innermenu = document.querySelectorAll(".has-submenu");
let submenu = document.querySelectorAll(".submenu-nav");

for (let i = 0; i < innermenu.length; i++) {
  innermenu[i].addEventListener("mouseenter", function () {
    submenu[i].style.visibility = "visible";
    submenu[i].style.opacity = "1";
    submenu[i].style.pointerEvents = "visible";
  });
}

for (let i = 0; i < innermenu.length; i++) {
  innermenu[i].addEventListener("mouseleave", function () {
    submenu[i].style.visibility = "hidden";
    submenu[i].style.opacity = "0";
    submenu[i].style.pointerEvents = "none";
  });
}

let search = document.querySelector(".shopping-search-btn");
// console.log(search);
let show = document.querySelector(".offcanvas.offcanvas-top");
let searchclose = document.querySelector(".search-close");
// console.log(show);

search.addEventListener("click", function () {
  show.classList.add("showsearch");
});

searchclose.addEventListener("click", function () {
  show.classList.remove("showsearch");
});

let cartbtn = document.querySelector(".shopping-cart-btn");
let card = document.querySelector(".aside-cart-wrapper");
let cardclose = document.querySelector(".btn-aside-cart-close");
cartbtn.addEventListener("click", function () {
  card.classList.add("showsearch");
});

cardclose.addEventListener("click", function () {
  card.classList.remove("showsearch");
});

let prevbtn = document.querySelector(".swiper-btn-prev");
let sec2 = document.querySelector(".swiper-slide-duplicate");
let sec1 = document.querySelector(".swiper-slide-visible");
prevbtn.addEventListener("click", function () {
  sec2.classList.toggle("showsec2");
  sec1.classList.toggle("hidesec1");
});
let nextbtn = document.querySelector(".swiper-btn-next");
nextbtn.addEventListener("click", function () {
  sec2.classList.toggle("showsec2");
  sec1.classList.toggle("hidesec1");
});

function setActiveTab(clickedLi) {
  let listItems = document.querySelectorAll(".isotope-filter button");

  listItems.forEach((li) => {
    li.classList.remove("active");
  });
  clickedLi.classList.add("active");
}

let ourproducts = document.querySelectorAll(".isotope-item");
console.log(ourproducts);

function shownewtools() {
  for (let i = 0; i < ourproducts.length; i++) {
    if (!ourproducts[i].classList.contains("new")) {
      // Hide only non-AI products
      ourproducts[i].classList.remove("scaleshow");
      ourproducts[i].classList.add("zeroscale");
      setTimeout(() => {
        ourproducts[i].style.display = "none";
      }, 200);
    } else {
      // Make sure AI tools are visible
      ourproducts[i].style.display = "block";
      setTimeout(() => {
        ourproducts[i].classList.remove("zeroscale");
        ourproducts[i].classList.add("scaleshow");
      }, 200); // thoda delay taake transition smoothly apply ho
    }
  }
}

function showalltools() {
  for (let i = 0; i < ourproducts.length; i++) {
    ourproducts[i].style.display = "block"; // display visible karo
    setTimeout(() => {
      ourproducts[i].classList.remove("zeroscale");
      ourproducts[i].classList.add("scaleshow");
    }, 200); // chhota delay taake transition trigger ho
  }
}

function showbesttools() {
  for (let i = 0; i < ourproducts.length; i++) {
    if (!ourproducts[i].classList.contains("best")) {
      ourproducts[i].classList.remove("scaleshow");
      ourproducts[i].classList.add("zeroscale");
      setTimeout(() => {
        ourproducts[i].style.display = "none";
      }, 200);
    } else {
      ourproducts[i].style.display = "block";
      setTimeout(() => {
        ourproducts[i].classList.remove("zeroscale");
        ourproducts[i].classList.add("scaleshow");
      }, 200);
    }
  }
}

function showsfeaturetools() {
  for (let i = 0; i < ourproducts.length; i++) {
    if (!ourproducts[i].classList.contains("feature")) {
      ourproducts[i].classList.remove("scaleshow");
      ourproducts[i].classList.add("zeroscale");
      setTimeout(() => {
        ourproducts[i].style.display = "none";
      }, 10);
    } else {
      ourproducts[i].style.display = "block";
      setTimeout(() => {
        ourproducts[i].classList.remove("zeroscale");
        ourproducts[i].classList.add("scaleshow");
      }, 10);
    }
  }
}

function showselltools() {
  for (let i = 0; i < ourproducts.length; i++) {
    if (!ourproducts[i].classList.contains("sell")) {
      ourproducts[i].classList.remove("scaleshow");
      ourproducts[i].classList.add("zeroscale");
      setTimeout(() => {
        ourproducts[i].style.display = "none";
      }, 10);
    } else {
      ourproducts[i].style.display = "block";
      setTimeout(() => {
        ourproducts[i].classList.remove("zeroscale");
        ourproducts[i].classList.add("scaleshow");
      }, 10);
    }
  }
}

//add product to wishlist

let wishproduct = document.querySelectorAll(".product-action-modal");

let cartbtnshow = document.querySelectorAll(".btn-product-cart");
let viewproduct = document.querySelector(".product-cart-view-modal");
function wishbtn() {
  wishproduct[0].classList.add("show");
  viewproduct.classList.remove("show");
}

function wishclose() {
  wishproduct[0].classList.remove("show");
}

//all produt to cart


function cartshow() {
  wishproduct[1].classList.add("show");
  viewproduct.classList.remove("show");
}

function cartclose() {
    wishproduct[1].classList.remove("show");
}

function productshow() {
    viewproduct.classList.add("show");
}

function productclose() {
  viewproduct.classList.remove("show");
}
