const fetchData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const parentDiv = document.getElementById("parentDiv");
    data.forEach((element) => {
      const div = document.createElement("div");
      const image = document.createElement("img");
      const priceTag = document.createElement("p");
      image.className = "productImage";
      div.className = "container";
      div.innerHTML += `<h2>${element.title}</h2>, <p>${element.id}</p>`;
      image.src = `${element.image}`;
      div.appendChild(image);
      priceTag.className = "priceTag";
      priceTag.innerText = `${element.price} €`;
      div.appendChild(priceTag);
      parentDiv.appendChild(div);
      console.log(div);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();
