// ---------- OFFER BAR CLOSE ----------
const offerClose = document.getElementById("offer-close");
const offerBar = document.querySelector(".offer-bar");

if (offerClose && offerBar) {
  offerClose.addEventListener("click", () => {
    offerBar.style.display = "none";
  });
}
// ---------- SIDE NAVBAR TOGGLE ----------
const sideNavbar = document.querySelector(".side-navbar");
const menuOpen = document.getElementById("side-navbar-activate");
const menuClose = document.getElementById("side-navbar-close");

// Open from LEFT
if (menuOpen && sideNavbar) {
  menuOpen.addEventListener("click", () => {
    sideNavbar.style.left = "0"; 
  });
}

// Close to LEFT
if (menuClose && sideNavbar) {
  menuClose.addEventListener("click", () => {
    sideNavbar.style.left = "-100%"; // 
  });
}

//product search functionality
var productContainer = document.querySelector(".products")
var search = document.querySelector(".navbar-search input")
var productlist = productContainer.querySelectorAll(".product")

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase()

    for (let count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        } else {
            productlist[count].style.display = "block"
        }
    }
})
//filter option

const checkboxes = document.querySelectorAll(".filter-checkbox");
const productElements = document.querySelectorAll(".product");

// Convert product elements into array of objects
const products = Array.from(productElements).map(product => {
  return {
    element: product,
    tags: product.querySelector("tags").textContent.toLowerCase()
  };
});

function applyFilters() {
  // Get all selected tags
  const selectedTags = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value.toLowerCase());

  // Filter products
  const filtered = products.filter(item => {
    return selectedTags.length === 0
      ? true // if no checkbox selected, show all
      : selectedTags.some(tag => item.tags.includes(tag));
  });

  // Display results
  products.forEach(item => item.element.style.display = "none");
  filtered.forEach(item => item.element.style.display = "block");
}

// Add listener to all checkboxes
checkboxes.forEach(cb => cb.addEventListener("change", applyFilters));
