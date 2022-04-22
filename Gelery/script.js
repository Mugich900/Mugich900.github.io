let j = 1;
let count = 5;
function next() {
  if (j < 10-count+1) {
    let f = 1;
    j++;
    for (i = j; i < j + count; i++) {
      let _img = document.images[f];
      small_img.append(_img);
      _img.className = "small-img";
      file_name = "img2/pic" + i + ".png";
      _img.setAttribute("src", file_name);
      _img.onclick = show;
    }
  }

  f++;
}
function prev() {
  if (j > 1) {
    let f = 1;
    j--;

    for (i = j; i < count + j; i++) {
      let _img = document.images[f];
      small_img.append(_img);
      _img.className = "small-img";
      file_name = "img2/pic" + i + ".png";
      _img.setAttribute("src", file_name);
      _img.onclick = show;
    }

    f++;
  }
}
for (i = j; i < j + count; i++) {
  let _img = document.createElement("img");
  small_img.append(_img);
  _img.className = "small-img";
  file_name = "img2/pic" + i + ".png";
  _img.setAttribute("src", file_name);
  _img.onclick = show;
}

let last_img = document.images[1];
last_img.classList.add("select-img");

function show(event) {
  last_img.classList.remove("select-img");
  document.images[0].src = event.target.src;
  last_img = event.target;
  event.target.classList.add("select-img");
}
