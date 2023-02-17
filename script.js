const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];

const products = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const catContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProd = (filterProduct) => {
  products.innerHTML = filterProduct
    .map((product) => {
      return `<div class="product">
            <img src=${product.img} alt="">
          <span class="name">${product.name}</span>
          <span class="priceText">$ ${product.price}</span>
          </div>`;
    })
    .join("");
};
displayProd(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  if (value) {
    displayProd(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProd(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat);

  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  catContainer.innerHTML = categories
    .map((cat) => `<span class="cat">${cat}</span>`)
    .join("");

  catContainer.addEventListener("click", (e) => {
    const selcetedCat = e.target.textContent;

    selcetedCat === "All"
      ? displayProd(data)
      : displayProd(data.filter((item) => item.cat === selcetedCat));
  });
};

const setPrice = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;

  priceValue.textContent = "$" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;

    displayProd(data.filter((item)=>item.price <= e.target.value))
  });
};
setCategories();
setPrice();
