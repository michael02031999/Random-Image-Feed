let container = document.getElementById("container");

let link = "https://source.unsplash.com/random/";

/* for (let i = 0; i < 15; i++) {
  let img = document.createElement("img");
  img.src = link;
  console.log(img);
  container.append(img);
} */

async function getImages() {
  let images = await fetch(
    "https://api.unsplash.com/photos/random/?client_id=6bHNqERp0Kv4an7PKxPqq2RC5V9aUz-TFEm5EVnhSps&count=15"
  )
    .then((response) => response.json())
    .then((data) => data);

  console.log(images);
  for (let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    img.src = images[i]["urls"]["thumb"];
    img.style.width = "300px";
    img.style.height = "300px";
    container.append(img);
  }
}

getImages();
