var pagesDictionary = {
  "suggerer-lieu": {
    fr: "../fr/suggerer-lieu.html",
    en: "../en/suggest-location.html",
  },
  presentation: {
    fr: "../fr/presentation.html",
    en: "../en/presentation.html",
  },
  "page-principale": {
    fr: "../fr/index.html",
    en: "../en/index.html",
  },
};

function decorateLabels() {
  var i, controlEl, id, label;
  var labels = document.getElementsByTagName("label");
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    id = label.htmlFor;
    controlEl = document.getElementById(id);
    if (controlEl.required) {
      label.classList.add("required");
    }
  }
}

function setAltLanguageLink() {
  var element = document.getElementById("alt-linguistique");
  var altLanguage = "en";
  if (window.location.pathname.includes("/en/")) {
    altLanguage = "fr";
  }
  var target = element.getAttribute("data-location-id");
  var url = pagesDictionary[target][altLanguage];
  element.href = url;
}

function aleaEntreBornes(bMin, bMax) {
  // retourne un nombre aléatoire entre bMin et bMax inclusivement
  return bMin + Math.floor((bMax - bMin + 1) * Math.random());
}

function putJCycleCarrousel() {
  var nItems = $("#carrousel > section.item").length;
  var startHere = aleaEntreBornes(0, nItems - 1);
  $("#carrousel").cycle({
    startingSlide: startHere,
    slides: "> section.item",
    fx: "fade",
    timeout: 0,
    next: "#button > .next",
    prev: "#button > .prev",
  });
}

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");

function showPara1() {
  para1.style.display = "block";
}
function hidePara1() {
  para1.style.display = "none";
}

function showPara2() {
  para2.style.display = "block";
}
function hidePara2() {
  para2.style.display = "none";
}

function showPara3() {
  para3.style.display = "block";
}
function hidePara3() {
  para3.style.display = "none";
}

btn1.addEventListener("click", function() {
  if (para1.style.display === "none") {
    showPara1();
  } else {
    hidePara1();
  }
});

btn2.addEventListener("click", function() {
  if (para2.style.display === "none") {
    showPara2();
  } else {
    hidePara2();
  }
});

btn3.addEventListener("click", function() {
  if (para3.style.display === "none") {
    showPara3();
  } else {
    hidePara3();
  }
});
