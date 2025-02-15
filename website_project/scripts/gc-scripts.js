const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	console.log("menu clicado! Classe 'open' aplicada");
});

//function toggleActive(element) {...

const currentYear = new Date().getFullYear();
document.getElementById("copyrightYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

const products = [
	{
	  productName: "Double Christmas Cachepot",
	  price: 5.00,
	  imageUrl:
	  "https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/cachepo_natal_duplo_colorido.jpeg?raw=true"
	},
	{
	  productName: "Christmas Cachepot Set",
	  price: 9.00,
	  imageUrl:
	  "https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/cachepo_natal_duplo_misto.jpeg?raw=true"
	},
	{
		productName: "White and Red Christmas Cachepot",
		price: 3.00,
		imageUrl:
		"https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/cachepo_natal_ind_branco.jpeg?raw=true"
	  },
	  {
		productName: "White Christmas cachepot",
		price: 3.00,
		imageUrl:
		"https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/cachepo_natal_branco.jpeg?raw=true"
	  },  
	  {
		productName: "Red Christmas Wreath",
		price: 9.00,
		imageUrl:
		"https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/guirlanta_natal_red.jpeg?raw=true"
	  },
	{
		productName: "Green Christmas Wreath",
	  	price: 9.00,
	  	imageUrl:
	  	"https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/guirlanda_natal_verde.jpeg?raw=true"
	},
	{
		productName: "Green Christmas Soap Holder",
	  	price: 6.00,
	  	imageUrl:
	  	"https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/porta_sabo_natal.jpeg?raw=true"
	},
	{
		productName: "Red Christmas Soap Holder",
	  	price: 6.00,
	  	imageUrl:
	  	"https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/porta_sbo_natal_verm.jpeg?raw=true"
	},
	{
		productName: "Blue Cup Set",
	  	price: 5.00,
	  	imageUrl:
	  	"https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/xic_ind_azul.jpeg?raw=true"
	},

	{
		productName: "Double Cup Set",
		price: 7.00,
		imageUrl:
		"https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/xic_par.jpeg?raw=true"
  },
  {
		productName: "Set of Four Cups",
		price: 11.00,
		imageUrl:
		"https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/xic_quatro.jpeg?raw=true"
  },
  {
	productName: "Double Cup Base",
	price: 2.00,
	imageUrl:
	"https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/base_xic_duplo.jpeg?raw=true"
  },
  {
	productName: "Colored Base for Double Cups",
	price: 2.00,
	imageUrl:
	"https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/base_xic_dupl_two_colors.jpeg?raw=true"
  },
  {
	productName: "Cup Base",
	price: 1.00,
	imageUrl:
	"https://github.com/SERDOTTE/guriascrocheteiras/blob/main/images/base_xic_indi.jpeg?raw=true"
  },
];

createProductCard(products);

const natalLink = document.querySelector("#natal");
const xicaraLink = document.querySelector("#xicara");
const baseLink = document.querySelector("#base");
const maiorLink = document.querySelector("#maior_preco");
const menorLink = document.querySelector("#menor_preco");
const allLink = document.querySelector("#all");

natalLink.addEventListener("click", () => {
	createProductCard(
		products.filter(product => 
			product.productName.toLowerCase().includes("christmas")
		)
	);
});

xicaraLink.addEventListener("click", () => {
	createProductCard(
		products.filter(product => 
			product.productName.toLowerCase().includes("cup")
		)
	);
});

baseLink.addEventListener("click", () => {
	createProductCard(
		products.filter(product => 
			product.productName.toLowerCase().includes("base")
		)
	);
});

maiorLink.addEventListener("click", () => {
	createProductCard(
		products.filter(product => product.price > 7)
	);
});

menorLink.addEventListener("click", () => {
	createProductCard(
		products.filter(product => product.price < 7)
	);
});


allLink.addEventListener("click", () => {
	createProductCard(products);
	});


function createProductCard(filteredProducts) {
	document.querySelector(".images").innerHTML = "";

	filteredProducts.forEach(product => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let price = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = product.productName;
		price.innerHTML = `<span class="label">Price: U$</span> ${product.price.toFixed(2)}`;
		img.setAttribute("src", product.imageUrl);
		img.setAttribute("alt", product.productName);
		img.setAttribute("loading", "lazy");

		card.appendChild(img);
		card.appendChild(name);
		card.appendChild(price);
	

		document.querySelector(".images").appendChild(card);
	});
} 