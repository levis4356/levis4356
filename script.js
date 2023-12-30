const images = document.querySelectorAll(".image-slider > img ");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let counter = 0;
nextBtn.addEventListener("click",nextSlide);
function nextSlide() {
  images[counter].style.animation = "next1 0.5s ease-out";
  if (counter == images.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  images[counter].style.animation = "next2 0.5s ease-out forwards";
}; 
prevBtn.addEventListener("click", function prevSlide() {
  images[counter].style.animation = "prev1 0.5s ease-out";
  if (counter == 0) {
    counter = images.length - 1;
  } else {
    counter--;
  }
  images[counter].style.animation = "prev2 0.5s ease-out forwards";
});
//auto slide
function autoslider(){
  deletInterval = setInterval(timer,1000);
  function timer(){
    nextSlide();
  }
}
autoslider();
// mouse over images stop change
const container = document.querySelector('.slider-container');
container.addEventListener('mouseover',function(){
  clearInterval(deletInterval);
});
//mouse out image running
container.addEventListener('mouseout',autoslider);
//scroll down change header color
// container move
const products = [
  {
      id: 1,
      name: "ផ្កាស្រពោន",
      price:2500,
      image: "Pka-Sro-pone-Book-Cover.jpg",
      category: "khmer-Literature",
  },
  {
      id: 2,
      name: "កុលាបប៉ៃលិន",
      price: 2500,
      image: "Kolab-Pailin-book-cover.jpg",
      category: "khmer-Literature",
  },
  {
      id: 3,
      name: "ទុំទាវ",
      price: 2500,
      image: "1.jpg",
      category: "khmer-Literature",
  }
  ,{
      id: 4,
      name: "សិក្សាស្វែងយល់ពីអត្ថបទអក្សរសិល្ប៍ខ្មែរ",
      price: 10000,
      image: "opac-image.png",
      category: "khmer-Literature",
  }
  ,
  {
      id: 5,
      name: "តេជោយ៉ត",
      price: 3500,
      image: "download.jpg",
      category: "khmer-Literature",
  },
  {
      id : 6,
      name : "គ្រូបង្រៀនស្រុកស្រែ",
      price : 3500,
      image : "download (1).jpg",
      category : "khmer-Literature",
  }
  ,
  {
      id : 7,
      name : "មាលាដួងចិត្ត",
      price : 4000,
      image : "download (2).jpg",
      category : "khmer-Literature",
  },
  {
      id : 8,
      name : "សូផាត",
      price : 4000,
      image : "Sophat-book-cover.jpg",
      category : "khmer-Literature",
  },
  {
      id : 9,
      name : "រាមកេរ្តិ៍",
      price : 5000,
      image : "RdQIzIUIH5ELJv1B8Vx8PWePVK8l5tdm0jn2pSnV.jpeg",
      category : "khmer-Literature",
  },
  {
      id : 10,
      name : "កាកី",
      price : 5000,
      image : "271813178_4975317002520348_1199105680533608494_n.jpg",
      category : "khmer-Literature",
  },
  
  {
      id : 11,
      name : "ការគិតបែបសំយោគ",
      price : 25000,
      image : "image_1024.jpg",
      category : "Reading-Book",
  },
  ,{
      id : 12,
      name : "វ័យក្មេង វ័យរៀនពីអច្ឆរិយបុគ្គល",
      price : 25000,
      image : "412674994_858105262987999_1532874703276772415_n.jpg",
      category : "Reading-Book",
  },
  {
      id : 13,
      name : "Watch",
      price : 54.99,
      image : "./img/watch (2).jpg",
      category : "Watch",
      description : "Watch"
  },
  {
      id : 14,
      name : "Headphone",
      price : 100.00,
      image : "./img/headphone (2).jpg",
      category : "Headphone",
      description : "Headphone"
  },
  {
      id : 15,
      name : "Shirt",
      price : 25.00,
      image : "./img/shirt (4).jpg",
      category : "clothes",
      description : "Shirt"
  },
  {
      id : 16,
      name : "Bag",
      price : 25.00,
      image : "./img/bag (3).jpg",
      category : "Bag",
      description : "Bag"
  },
  {
      id : 17,
      name : "Watch",
      price : 54.99,
      image : "./img/watch (3).jpg",
      category : "Watch",
      description : "Watch"
  },
  {
      id : 18,
      name : "Headphone",
      price : 100.00,
      image : "./img/headphone (3).jpg",
      category : "Headphone",
      description : "Headphone"
  },
  {
      id : 19,
      name : "Shirt",
      price : 25.00,
      image : "./img/shirt (1).jpg",
      category : "clothes",
      description : "Shirt"
  },
  {
      id : 20,
      name : "Bag",
      price : 25.00,
      image : "./img/bag (4).jpg",
      category : "Bag",
      description : "Bag"
  },
  {
      id : 21,
      name : "Watch",
      price : 54.99,
      image : "./img/watch (4).jpg",
      category : "Watch",
      description : "Watch"
  }
  ,{
      id : 22,
      name : "Headphone",
      price : 100.00,
      image : "./img/headphone (4).jpg",
      category : "Headphone",
      description : "Headphone"
  },
  {
      id : 23,
      name : "Hoodi",
      price : 25.00,
      image : "./img/hoodi (2).jpg",
      category : "clothes",
      description : "Hoodi"
  },
  {
      id : 24,
      name : "Bag",
      price : 25.00,
      image : "./img/bag (5).jpg",
      category : "Bag",
      description : "Bag"
  },
  {
      id : 25,
      name : "Iphone Xs",
      price : 499.99,
      image : "./img/iPhone XS.jpg",
      category : "iphone",
      description : "Iphone Xs"
  },
  {
      id : 26,
      name : "Iphone 13",
      price : 699.99,
      image : "./img/Iphone 13 pro.jpg",
      category : "iphone",
      description : "Iphone Xs Max"
  }
  ,
  {
      id : 27,
      name : "Hoodi",
      price : 25.00,
      image : "./img/hoodi (3).jpg",
      category : "clothes",
      description : "Hoodi"
  },
  {
      id : 28,
      name : "Shose",
      price : 15.00,
      image : "./img/shose (2).jpg",
      category : "shoes",
      description : "shose"
  },
  {
      id : 29,
      name : "Shose",
      price : 15.00,
      image : "./img/shose (3).jpg",
      category : "shoes",
      description : "shose"
  },
  {
      id : 30,
      name : "Shose",
      price : 15.00,
      image : "./img/shose (4).jpg",
      category : "shoes",
      description : "shose"
  },
  {
      id : 31,
      name : "Shose",
      price : 15.00,
      image : "./img/shose (5).jpg",
      category : "shoes",
      description : "shose"
  },
  {
      id : 32,
      name : "Shose",
      price : 15.00,
      image : "./img/shose (6).jpg",
      category : "shoes",
      description : "shose"
  },
  {
      id : 33,
      name : "Shose",
      price : 15.00,
      image : "./img/shose (7).jpg",
      category : "shoes",
      description : "shose"
  },
  {
      id : 34,
      name : "Shose",
      price : 15.00,
      image : "./img/shose (8).jpg",
      category : "shoes",
      description : "shose"
  }
];
const productLists = document.querySelector(".product-list");
//scroll change background color to header​
//display text
const text = ['Reading-Book','khmer-Literature', 'English-Book', 'Grammar-Book', 'History-Book','Entertainment-Book'];
let i = 0;
setInterval( function(){
  i++;
  if(i === text.length){
      i = 0;
  }
  document.querySelector("#text").innerHTML = text[i];
},2000);

function displayProducts(productsArray){
  let item = "";
  for(var i in productsArray){
      item = item + `<div class="item">
                       <img src="${productsArray[i].image}" alt="${productsArray[i].name}">
                       <div class="details">
                           <h3>${productsArray[i].name}</h3>
                           <p class="price">៛${productsArray[i].price}</p>
                       </div>
                       <div class="footer">
                           <button class="add-to-cart">Add to cart</button>
                           <i class="bi bi-star"></i>
                       </div>
                      </div>`;
   }
   productLists.innerHTML = item;
}

function getAllProducts() {
  displayProducts(products);
}
getAllProducts();

// Event listeners for category buttons
const filterByCategory = (c) => {
  const filteredProducts = products.filter((p) => {
      return p.category === c;
  });
  displayProducts(filteredProducts);
}
// click on button clothes display only products clothes
const khmerliterature = document.querySelector(".khmer-Literature");
khmerliterature.addEventListener("click", () => {
  filterByCategory("khmer-Literature");
});

// click on button bag display only products Bag
const Englishbook = document.querySelector(".English-Book");
Englishbook.addEventListener('click', () => {
  filterByCategory("English-Book");
});

// click on button watch display only products Watch
const Grammarbook = document.querySelector(".Grammar-Book");
Grammarbook.addEventListener('click', () => {
  filterByCategory("Grammar-Book");
});

// click on button headphone display only products Headphone
const historybook = document.querySelector(".History-Book");
historybook.addEventListener('click', () => {
  filterByCategory("History-Book");
});
// click on button shoes display only products shoes

const entertainmentbook = document.querySelector(".Entertainment-Book");
entertainmentbook.addEventListener('click', () => {
  filterByCategory("Entertainment-Book");
});

// click on button laptop display only products laptop

const Readingbook = document.querySelector(".Reading-Book");
Readingbook.addEventListener('click', () => {
  filterByCategory("Reading-Book");
});
const all = document.querySelector(".all");
all.addEventListener('click', () => {
  getAllProducts();
});
// search product by input product name
function searchProducts(query){
  const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(query.toLowerCase());
  });
  displayProducts(filteredProducts);
}
const input = document.querySelector(".inputs")
input.addEventListener('keyup', (e) => {
  if(e.key === "Enter"){
      const query = input.value;
      searchProducts(query);
  }
});
