let bgColour = '#332D2D'
let fgColour = '#FBFBFB'
const bodyElement = document.querySelector("body")
const h1Elements = document.querySelectorAll("h1");
const h2Elements = document.querySelectorAll("h2");
const h3Elements = document.querySelectorAll("h3");
const h4Elements = document.querySelectorAll("h4");
const h5Elements = document.querySelectorAll("h5");
const pElements = document.querySelectorAll("p");
const labelElements = document.querySelectorAll("label");
const strongElements = document.querySelectorAll("strong");
const liElements = document.querySelectorAll("li");
const aElements = document.querySelectorAll("a");
const codeElements = document.querySelectorAll("code");
const spanElements = document.querySelectorAll("span");
const bElements = document.querySelectorAll("b");

const divElements = document.querySelectorAll("div");
const headerElements = document.querySelectorAll("header");
const mainElements = document.querySelectorAll("main");

const changeColour = () => {
    bodyElement.style.backgroundColor = bgColour;
    bodyElement.style.backgroundColor = fgColour;
    
    divElements.forEach(function(element) { element.style.backgroundColor = bgColour });
    headerElements.forEach(function(element) { element.style.backgroundColor = bgColour });
    mainElements.forEach(function(element) { element.style.backgroundColor = bgColour });
  
    [divElements, h1Elements, h2Elements, h3Elements, h4Elements, h5Elements, pElements, labelElements, strongElements, liElements, aElements, codeElements, spanElements, bElements].forEach(function(elements) {
        elements.forEach(function(element) {
            element.style.color = fgColour;
            element.style.backgroundColor = bgColour;
        });
    });
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.bgColour) {
        bgColour = request.bgColour
        fgColour = request.fgColour
        changeColour()
    }
});

changeColour();
