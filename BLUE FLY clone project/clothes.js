let arr = JSON.parse(localStorage.getItem("cart")) || [];

let product_data = [
  {
    brand: "GUCCI",
    name: "GREEN FLORAL CHECK-PRINT",
    price: "3564",
    size: "36",
    gender: "women",
    productid: 16582455611231,
    catagory: "party",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gucci-green-floral-check-print-ruffled-silk-crepe-gown-runway-catalog-694711_444b84a8-8d27-4ea5-93e2-fe166fed2c07_1800x1800.jpg?v=1653603806",
  },
  {
    brand: "AMIRI",
    name: "ABSOLUT JOY MEN'S GILET IN BLACK",
    price: "100",
    size: "S,L,M",
    gender: "men",
    productid: 16582455611232,
    catagory: "mens vists",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/98296668_large.jpg?v=1657739286",
  },
  {
    brand: "AMIRI",
    name: "ONLY & SONS MEN'S GILET IN BLACK",
    price: "120",
    size: "S,L,M",
    gender: "men",
    productid: 16582455611233,
    catagory: "mens vists",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/98312982_1800x1800.jpg?v=1657953066",
  },
  {
    brand: "GUCCI",
    name: "GUCCI GUCCI SLEEVELESS KNIT MIDI DRESS IN BLACK SILK ",
    price: "1260",
    size: "40",
    gender: "women",
    productid: 16582455611234,
    catagory: "party",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/edt-1641504726505_1800x1800.jpg?v=1658020583",
  },
  {
    brand: "GUCCI",
    name: "GUCCI FLORAL PATCHWORK",
    price: "5680",
    size: "45",
    gender: "women",
    productid: 16582455611235,
    catagory: "party",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gucci-floral-patchwork-print-stand-collar-crepe-dress-runway-catalog-434193_d5019c11-d79a-4979-8170-1fc12d11da26_1800x1800.jpg?v=1658007824",
  },
  {
    brand: "AMIRI",
    name: "ABSOLUT JOY MEN'S GILET IN BEIGE",
    price: "260",
    size: "S,L,M",
    gender: "men",
    productid: 16582455611236,
    catagory: "mens vists",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/79715524_1800x1800.jpg?v=1658194965",
  },

  {
    brand: "AMIRI",
    name: "ABSOLUT JOY MEN'S GILET IN MULTICOLOR",
    price: "720",
    size: "S,L,M",
    gender: "men",
    productid: 16582455611237,
    catagory: "mens vists",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/79714330_1800x1800.jpg?v=1657986455",
  },
  {
    brand: "GUCCI",
    name: "GUCCI SEQUINS WITH CRYSTAL EMBROIDERED DRESS",
    price: "7160",
    size: "40",
    gender: "women",
    productid: 16582455611238,
    catagory: "party",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/411610-x5793-4098__1_00c6e6b7-8d77-4adc-92a2-e6154fc2b960_1800x1800.jpg?v=1657698939",
  },
  {
    brand: "BERBERRY",
    name: "ABSOLUT JOY MEN'S GILET IN GREY",
    price: "710",
    size: "S,L,M",
    gender: "men",
    productid: 16582455611239,
    catagory: "mens vists",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/79717051_1800x1800.jpg?v=1657629541",
  },
  {
    brand: "BERBERRY",
    name: "BURBERRY SWEATER",
    price: "450",
    size: "S,L,M",
    gender: "men",
    productid: 16582455611230,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010138269_RLLZ_1_baa07dd1-a394-49e2-99d9-bc788a3c945e_1800x1800.jpg?v=1657214589",
  },
  {
    brand: "GUCCI",
    name: "GUCCI PURPLE FLORAL PATTERN SILK DRESS",
    price: "4505",
    size: "42",
    gender: "women",
    productid: 16582455611213,
    catagory: "narmal",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/edt-dc0c63c1d3f8a0c1eccda7e28b8f78b7_1800x1800.jpg?v=1655247515",
  },
  {
    brand: "GUCCI",
    name: "WOMENS FLORAL LACE FIT & FLARE DRESS",
    price: "4560",
    size: "40",
    gender: "women",
    productid: 16582455611223,
    catagory: "narmal",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gucci-purple-floral-pattern-silk-dress-runway-catalog-416333_1800x1800.jpg?v=1656416685",
  },
  {
    brand: "BERBERRY",
    name: "CASHMERE SWEATER",
    price: "400",
    size: "S,L,M",
    gender: "women",
    productid: 16582455611233,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2254478_1800x1800.jpg?v=1649976621",
  },
  {
    brand: "BERBERRY",
    name: "BURBERRY CREWNECK SWEATER",
    price: "620",
    size: "S,L,M",
    gender: "men",
    productid: 16582455611243,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010274811_RLLZ_1_1800x1800.jpg?v=1657216399",
  },
  {
    brand: "GUCCI",
    name: "WOMENS FLORAL KNEE SHIRTDRESS",
    price: "6000",
    size: "39",
    gender: "women",
    productid: 16582455611253,
    catagory: "narmal",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/rYwEHmZEJ60nrcFMkUYwNbvmTD0BrvJQ-25_6698fd1d-c2fa-4c65-ba56-038e7e9c4ddc_1800x1800.jpg?v=1657749362",
  },
  {
    brand: "GUCCI",
    name: "WOMENS LACE MINI MIDI DRESS",
    price: "3500",
    size: "40",
    gender: "women",
    productid: 16582455611263,
    catagory: "narmal",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/VoVTO3VHfBVTJG1ekbI8GKHi9rhMyUfM-25_1800x1800.jpg?v=1657645360",
  },
  {
    brand: "BERBERRY",
    name: "BURBERRY CREWNECK WOOL",
    price: "350",
    size: "S,L,M",
    gender: "men",
    productid: 16582455611273,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010274810_RLLZ_1_1800x1800.jpg?v=1657209780",
  },
  {
    brand: "BERBERRY",
    name: "BURBERRY BLACK CASHMERE CREWNECK CARDIGAN",
    price: "250",
    size: "S,L,M",
    gender: "men",
    productid: 16582455611283,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/f7b39f09-40d1-4e6f-8800-4e587a86bf8b_1800x1800.jpg?v=1627405585",
  },
  {
    brand: "GUCCI",
    name: "WOMENS EMBELLISHED SHORT MINI DRESS",
    price: "4560",
    size: "36",
    gender: "women",
    productid: 16582455611293,
    catagory: "narmal",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/gmOlknRaLfZq4itwKFMIuQb9uB7kj0BH-25_1800x1800.jpg?v=1658214240",
  },
  {
    brand: "AMIRI",
    name: "AMIRI BLUE DENIM/GREEN  BOMBER JACKET",
    price: "560",
    size: "36",
    gender: "women",
    productid: 16582455611203,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1729509_large.jpg?v=1644495316",
  },
  {
    brand: "BERBERRY",
    name: "WHITE SHORT",
    price: "100",
    size: "S,M,L",
    gender: "men",
    productid: 16582455611123,
    catagory: "mens shorts",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1940714_1800x1800.jpg?v=1635722698",
  },
  {
    brand: "BOSS",
    name: "BOSS MEN'S SHORTS SHORTS SHORTS SHORTS",
    price: "120",
    size: "S,M,L",
    gender: "men",
    productid: 165824556112323,
    catagory: "mens shorts",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/57584040_1800x1800.jpg?v=1658114844",
  },
  {
    brand: "AMIRI",
    name: "AMIRI LEATHER PANEL TRUCKER",
    price: "260",
    size: "40",
    gender: "women",
    productid: 16582455611323,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1723067_1800x1800.jpg?v=1648109631",
  },
  {
    brand: "AMIRI",
    name: "PRE OWNED CONDITION EXCELLENT",
    price: "680",
    size: "45",
    gender: "women",
    productid: 16582455611423,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/edt-whats-app-image-2021-11-22-at-21-30-17-jpeg-1637619719205_1800x1800.jpg?v=1657587447",
  },
  {
    brand: "BERBERRY",
    name: "BLACK SHORT",
    price: "260",
    size: "S,M,L",
    gender: "men",
    productid: 16582455611523,
    catagory: " mens shorts",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2198859_large.jpg?v=1649703206",
  },
  {
    brand: "BERBERRY",
    name: "ARCHIVE BEIGE IP CHK SHORT",
    price: "720",
    size: "S,M,L",
    gender: "men",
    productid: 16582455611623,
    catagory: "mens shorts",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2307834_1800x1800.jpg?v=1652466557",
  },
  {
    brand: "AMIRI",
    name: "COTTON JERSEY DOWN JACKET",
    price: "370",
    size: "35",
    gender: "women",
    productid: 16582455611723,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2156057_1800x1800.jpg?v=1646359799",
  },
  {
    brand: "AMIRI",
    name: "DENIM JACKET",
    price: "760",
    size: "40",
    gender: "women",
    productid: 16582455611823,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2226204_1800x1800.jpg?v=1648827395",
  },
  {
    brand: "HOGO BOSS",
    name: "BOSS HUGO BOSS SOLID PANT",
    price: "710",
    size: "S,M,L",
    gender: "men",
    productid: 16582455611923,
    catagory: "mens shorts ",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010207663_RLLZ_2_large.jpg?v=1657872117",
  },
  {
    brand: "HOGO BOSS",
    name: "HUGO BOSS MENS SUIT",
    price: "450",
    size: "42",
    gender: "men",
    productid: 16582455611023,
    catagory: "mens suit",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/7298-0063A_1800x1800.jpg?v=1658135925",
  },
  {
    brand: "AMIRI",
    name: "LEATHER JACKET",
    price: "405",
    size: "42",
    gender: "women",
    productid: 16582455611123,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1941391_1800x1800.jpg?v=1654373681",
  },
  {
    brand: "AMIRI",
    name: "DIOR BLACK CHECKED CLASSIC JACKET",
    price: "460",
    size: "40",
    gender: "women",
    productid: 16582455612123,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2300536_1800x1800.jpg?v=1652104922",
  },
  {
    brand: "HUGO BOSS",
    name: "HUGO BOSS MENS BLAZER GRAY",
    price: "400",
    size: "40",
    gender: "men",
    productid: 16582455613123,
    catagory: "mens suit",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/7354-0071A_1800x1800.jpg?v=1658222915",
  },
  {
    brand: "HUGO BOSS",
    name: "HUGO BOSS MENS SUIT JACKET",
    price: "620",
    size: "39",
    gender: "men",
    productid: 16582455614123,
    catagory: "mens suit",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/7364-0032A_1800x1800.jpg?v=1658221938",
  },
  {
    brand: "AMIRI",
    name: "AMIRI RED VELVET ZIP-UP BOMBER JACKET",
    price: "600",
    size: "39",
    gender: "women",
    productid: 16582455615123,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1941393_1800x1800.jpg?v=1654373694",
  },
  {
    brand: "ARMANI",
    name: "BLUE WOMENS FORMAL JACKET",
    price: "300",
    size: "40",
    gender: "women",
    productid: 16582455616123,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/42055335_1800x1800.jpg?v=1658027008",
  },
  {
    brand: "",
    name: "HUGO BOSS MENS SUIT VEST BLUE",
    price: "350",
    size: "40",
    gender: "men",
    productid: 16582455617123,
    catagory: "mens suit",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/7115-0131A_1800x1800.jpg?v=1654111187",
  },
  {
    brand: "",
    name: "HUGO HUGO BOSS MENS SUIT",
    price: "250",
    size: "36",
    gender: "men",
    productid: 16582455618123,
    catagory: "mens suit",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/7358-0108A_1800x1800.jpg?v=1657726355",
  },
  {
    brand: "ARMANI",
    name: "WHITE WOMENS FORMAL JACKET",
    price: "460",
    size: "36",
    gender: "women",
    productid: 16582455619123,
    catagory: "jacket",
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/98296788_1800x1800.jpg?v=1658029904",
  },
];

display(product_data);

function display(product_data) {
  document.querySelector("#product").innerHTML = "";

  product_data.forEach(function (ele, i) {
    let childe_div = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("p");
    let product_name = document.createElement("p");
    let price = document.createElement("p");
    let para = document.createElement("div");
    childe_div.setAttribute("id", "page");

    childe_div.addEventListener("click", function () {
      pro(ele, i);
    });

    image.src = ele.img;
    name.innerText = ele.brand;
    product_name.innerText = ele.name;
    product_name.style.color = "skyblue";
    price.innerText = "$ " + ele.price;

    para.append(name, product_name, price);
    childe_div.append(image, name, product_name, price);

    document.querySelector("#product").append(childe_div);
  });
}

function cart(ele, i) {
  console.log(ele);

  product_data.splice(i, 1);

  arr.push(ele);

  localStorage.setItem("cart", JSON.stringify(arr));

  ele["cart"] = "added in cart";

  console.log(arr);
}

document.querySelector("#collection").addEventListener("change", function () {
  let coll = document.querySelector("#collection").value;

  if (coll === "all" || coll === "collection") {
    display(product_data);
    return;
  }

  let dis = product_data.filter(function (ele, i) {
    return ele.gender === coll;
  });

  display(dis);
});

document.querySelector("#category").addEventListener("change", function () {
  let coll = document.querySelector("#category").value;

  console.log(coll);
  if (coll === "category") {
    display(product_data);
    return;
  }

  let dis = product_data.filter(function (ele, i) {
    return ele.catagory === coll;
  });

  display(dis);
});

document.querySelector("#brand").addEventListener("change", function () {
  let coll = document.querySelector("#brand").value;

  console.log(coll);
  if (coll === "brand") {
    display(product_data);
    return;
  }

  let dis = product_data.filter(function (ele, i) {
    return ele.brand === coll;
  });

  display(dis);
});

document.querySelector("form").addEventListener("submit", function () {
  event.preventDefault();
  let min = document.querySelector("#min").value;
  let max = document.querySelector("#max").value;

  let dis = product_data.filter(function (ele, i) {
    let x = Number(ele.price);
    return x > min && x < max;
  });
  if (dis == "") {
    display(product_data);
    return;
  }
  display(dis);
});

document.querySelector("#brand").addEventListener("change", function () {
  let coll = document.querySelector("#brand").value;

  console.log(coll);
  if (coll === "brand") {
    display(product_data);
    return;
  }

  let dis = product_data.filter(function (ele, i) {
    return ele.brand === coll;
  });

  display(dis);
});

document.querySelector("#trend").addEventListener("change", function () {
  let coll = document.querySelector("#trend").value;

  console.log(coll);

  if (coll === "") {
    display(product_data);
    return;
  }

  let x = product_data.sort(function (x, y) {
    let a = Number(x.price);
    let b = Number(y.price);
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  if (coll === "low to high") {
    display(x);
    return;
  }

  let y = product_data.sort(function (x, y) {
    let a = Number(x.price);
    let b = Number(y.price);
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  if (coll === "high to low") {
    display(y);
    return;
  }
});

function pro(ele, i) {
  localStorage.setItem("blue", JSON.stringify(ele));

  y = "details.html";

  window.location.href = y;
}
