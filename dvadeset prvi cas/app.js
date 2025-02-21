// const serverData = async () => {
//   const data = {
//     id: 1,
//     name: "Zdravko",
//   };
//   return data;
// };

// // try/catch (kod async/await)
// const showData = async () => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// showData();

// // Promise
// const data = fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((greska) => {
//     console.log("Greska!", greska);
//   });

const getData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await response.json();
    const parentDiv = document.getElementById("parentDiv");
    data.forEach((element) => {
      const div = document.createElement("div");
      div.innerHTML = `<h1>${element.title} ${element.id}</h1>, <image scr="${element.image}"/>`;
      parentDiv.appendChild(div);
    });
    document.body.appendChild(parentDiv);
  } catch (error) {
    console.log(error);
  }
};

getData();
