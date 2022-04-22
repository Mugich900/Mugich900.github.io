function addTextboxes() {
  text_boxes.innerHTML = "";
  tb = [];
  for (let i = 0; i < count_textbox.value; i++) {
    let _input = document.createElement("input");
    text_boxes.append(_input);
    tb[i] = _input;
    _input.setAttribute("value", getRandom(my_canvas.height));
  }
  draw();
}
function getRandom(max) {
  return Math.round(Math.random() * max);
}
x = 0;
y = my_canvas.height;
function draw() {
  dx = 2;
  w = my_canvas.width / count_textbox.value - dx;
  let gr = my_canvas.getContext("2d");
  gr.clearRect(0, 0, my_canvas.width, my_canvas.height);
  for (i = 0; i < count_textbox.value; i++) {
    gr.fillStyle = set_color();
    gr.fillRect(x + i * w + dx * i, y, w, -tb[i].value);
  }
}

function set_color() {
  r = getRandom(256);
  g = getRandom(256);
  b = getRandom(256);
  color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}
text_boxes.onchange = draw;
