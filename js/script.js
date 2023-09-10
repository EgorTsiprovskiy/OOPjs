"use sctrict";

function DomElement() {
  this.selector = "";
  this.height = "";
  this.width = "";
  this.bg = "";
  this.fontSize = "";

  this.createElem = function (str) {
    let symbol = str[0];
    let elem = str.substring(1);

    switch (symbol) {
      case ".":
        const newDiv = document.createElement("div");
        newDiv.innerText = "NEW DIV";
        this.addStyle(newDiv, elem);
        document.body.append(newDiv);
        break;
      case "#":
        const newPar = document.createElement("p");
        newPar.innerText = "NEW PARAGRAPH";
        this.addStyle(newPar, elem);
        document.body.append(newPar);
        break;
      default:
        alert("Некорректный selector");
    }
  };
  this.addStyle = function (newElem, elem) {
    newElem.className = elem;
    newElem.style.backgroundColor = this.bg;
    newElem.style.width = this.width;
    newElem.style.height = this.height;
    newElem.style.fontSize = this.fontSize;
  };
}

const element = new DomElement();
element.width = "100px";
element.height = "100px";
element.bg = "blue";
element.fontSize = "18px";

let createElement = ".block";
element.createElem(createElement);

document.getElementById('createElem').innerText = createElement;
