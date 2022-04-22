function add() {
  let _h = document.createElement("h2");
  let _b = document.createElement("button");
  let _p = document.createElement("p");
  let _divControl = document.createElement("div");
  let _divNews = document.createElement("div");

  _b.innerHTML = "Свернуть";
  _b.classList.toggle("collapseButton");
  _h.innerHTML = headText.value;
  _p.innerHTML = panelText.value;

  _divControl.classList.toggle("control_panel");
  _divControl.append(_h);
  _divControl.append(_b);

  _divNews.classList.toggle("news_div");
  _divNews.append(_p);
  news.append(_divControl);
  news.append(_divNews);
}

let container = document.querySelector("#news");
container.addEventListener("click", function (e) {
  e.target.addEventListener("click", function () {
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.innerHTML = "Развернуть";
    } else {
      content.style.display = "block";
      this.innerHTML = "Свернуть";
    }
  });
});
