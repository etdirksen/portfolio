import * as navAndFooterLinks from "./generateNavbarAndFooter.js";

// This is a pseudo-dictionary; the key is:
// "Page name": "corresponding HTML file path"
//
// If the path is null, the link will appear as disabled.
// const navbarPagesDict = [
//     ["Home","index.html"], 
//     ["Resume","resume.html"],
//     ["Porfolio","porfolio.html"],
//     ["About", null]
// ];

// function createNavbarContainer(nameOfParentElement) {
//     let parentElement = document.getElementById(nameOfParentElement);

//     let navbarContainer = document.createElement("div");
//     navbarContainer.id = "navbarContainer";
//     navbarContainer.className = "container-fluid";
//     parentElement.appendChild(navbarContainer);
// };

// function createNavbarNavElement(nameOfParentElement) {
//     let parentElement = document.getElementById(nameOfParentElement);

//     let navbarDiv = document.createElement("nav");
//     navbarDiv.id = "navbar";
//     navbarDiv.style = `--bs-breadcrumb-divider: "//";`;
//     navbarDiv.setAttribute("aria-label", "breadcrumb");
//     parentElement.appendChild(navbarDiv);
// };

// function createNavbarOrderedList(nameOfParentElement) {
//     let parentElement = document.getElementById(nameOfParentElement);

//     let navbarOrderedList = document.createElement("ol");
//     navbarOrderedList.id = "navbar-ol-element"
//     navbarOrderedList.className = "breadcrumb";
//     parentElement.appendChild(navbarOrderedList);
// };

// function createNavbarListElement(nameOfParentElement, text, link) {
//     if (link != null) {
//         let parentElement = document.getElementById(nameOfParentElement);

//         let navbarListElement = document.createElement("li");
//         navbarListElement.className = "breadcrumb-item";
        
//         let navbarListElementLink = document.createElement("a");
//         navbarListElementLink.href = link
//         navbarListElementLink.textContent = text;

//         parentElement.appendChild(navbarListElement);
//         navbarListElement.appendChild(navbarListElementLink);
//     }

//     else {
//         let parentElement = document.getElementById(nameOfParentElement);

//         let navbarListElement = document.createElement("li");
//         navbarListElement.className = "breadcrumb-item disabled";

//         let navbarListElementLink = document.createElement("a");
//         navbarListElementLink.textContent = text;
        
//         parentElement.appendChild(navbarListElement);
//         navbarListElement.appendChild(navbarListElementLink);
//     };
// };


navAndFooterLinks.createNavbarContainer("mainContainer");
navAndFooterLinks.createNavbarNavElement("navbarContainer");
navAndFooterLinks.createNavbarOrderedList("navbar");

navAndFooterLinks.navbarPagesList.forEach(function(item) {
    navAndFooterLinks.createNavbarListElement("navbar-ol-element", item[0], item[1]);
});

navAndFooterLinks.createDarkModeCol("shared-title-row");
navAndFooterLinks.createDarkModeButton("dark-mode-container");
navAndFooterLinks.createDarkModeButtonImg("dark-mode-button");

navAndFooterLinks.createFooterLinkContainer("mainContainer");
navAndFooterLinks.createFooterLinkCenteredDiv("footer-container");
navAndFooterLinks.createFooterGroup("footer-links-div");

navAndFooterLinks.footerLinksList.forEach(function(item) {
    navAndFooterLinks.createFooterButton("footer-links-group", item[0], item[1]);
});

console.log("If you're reading this: the code worked, Morty!");
console.log(document.getElementById("mainContainer"));