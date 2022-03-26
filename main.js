const input = document.getElementById("input");
const parentDiv = document.getElementById("result");

input.addEventListener("change", function () {
  const reader = new FileReader(); // To Convert File To Data URL
  reader.addEventListener("load", () => {
    localStorage.setItem("recent-image", reader.result);
    parentDiv.innerHTML = "";
    showImages();
  });
  reader.readAsDataURL(this.files[0]);
});

function showImages() {
  let res = window.localStorage.getItem("recent-image");
  let image = new Image();
  image.src = res;
  parentDiv.appendChild(image);
}
showImages();
