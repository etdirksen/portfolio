// Navbar and Footer links and text titles.
// Used in the functions below - update to add more to the page!
export const navbarPagesList = [
    ["Home","index.html"], 
    ["Resume","resume.html"],
    ["Portfolio","portfolio.html"],
    ["About", null]
];

export const footerLinksList = [
    ["Email me", "mailto:edirksen.work@gmail.com"],
    ["LinkedIn Profile", "https://www.linkedin.com/in/ethandirksen/"],
    ["GitHub Page", "https://github.com/etdirksen"]
];




//  *********************************************
//  NAVBAR CREATION FUNCTIONS
//  *********************************************
//  These functions create the HTML elements for the Navbar breadcrumb element at the top of each page.

export function createNavbarContainer(nameOfParentElement) {
    let parentElement = document.getElementById(nameOfParentElement);

    let navbarContainer = document.createElement("div");
    navbarContainer.id = "navbarContainer";
    navbarContainer.className = "container-fluid";
    parentElement.insertAdjacentElement("afterbegin", navbarContainer); 
};

export function createNavbarNavElement(nameOfParentElement) {
    let parentElement = document.getElementById(nameOfParentElement);

    let navbarDiv = document.createElement("nav");
    navbarDiv.id = "navbar";
    navbarDiv.style = `--bs-breadcrumb-divider: "//";`;
    navbarDiv.setAttribute("aria-label", "breadcrumb");
    parentElement.insertAdjacentElement("afterbegin", navbarDiv);
};

export function createNavbarOrderedList(nameOfParentElement) {
    let parentElement = document.getElementById(nameOfParentElement);

    let navbarOrderedList = document.createElement("ol");
    navbarOrderedList.id = "navbar-ol-element"
    navbarOrderedList.className = "breadcrumb";
    parentElement.insertAdjacentElement("afterbegin", navbarOrderedList);
};

export function createNavbarListElement(nameOfParentElement, text, link) {
    if (link != null) {
        let parentElement = document.getElementById(nameOfParentElement);

        let navbarListElement = document.createElement("li");
        navbarListElement.className = "breadcrumb-item";
        
        let navbarListElementLink = document.createElement("a");
        navbarListElementLink.href = link
        navbarListElementLink.textContent = text;

        parentElement.insertAdjacentElement("beforeend", navbarListElement);
        navbarListElement.insertAdjacentElement("beforeend", navbarListElementLink);
    }

    else {
        let parentElement = document.getElementById(nameOfParentElement);

        let navbarListElement = document.createElement("li");
        navbarListElement.className = "breadcrumb-item disabled";

        let navbarListElementLink = document.createElement("a");
        navbarListElementLink.textContent = text;
        
        parentElement.insertAdjacentElement("beforeend", navbarListElement);
        navbarListElement.insertAdjacentElement("beforeend", navbarListElementLink);
    };
};





//  *********************************************
//  DARK MODE/LIGHT MODE CREATION FUNCTIONS
//  *********************************************
//  These functions create the HTML elements for the dark/light mode button at the top of each page.
//  The button is its own column and shares a row with the title column.

export function createDarkModeCol(nameOfParentElement) {
    let parentElement = document.getElementById(nameOfParentElement);

    let darkModeContainer = document.createElement("div");
    darkModeContainer.id = "dark-mode-container";
    darkModeContainer.className = "col-1 text-end";
    parentElement.insertAdjacentElement("beforeend", darkModeContainer);
};

export function createDarkModeButton(nameOfParentElement) {
    let parentElement = document.getElementById(nameOfParentElement);
    let darkModeButton = document.createElement("button");
    darkModeButton.id = "dark-mode-button";
    darkModeButton.className = "btn";
    parentElement.insertAdjacentElement("beforeend", darkModeButton);


    darkModeButton.addEventListener("click", function() {
        console.log("You clicked the button, Morty!");

        var element = document.body;
        element.classList.toggle("dark-mode");
    });   

};

export function createDarkModeButtonImg(nameOfParentElement) {
    let parentElement = document.getElementById(nameOfParentElement);

    let darkModeButtonImg = document.createElement("i");
    darkModeButtonImg.id = "dark-mode-button-img";
    darkModeButtonImg.className = "bi bi-moon-stars-fill";

    parentElement.insertAdjacentElement("beforeend", darkModeButtonImg);
};




//  *********************************************
//  FOOTER CREATION FUNCTIONS
//  *********************************************
//  These functions create the HTML elements for the footer button group at the bottom of each page.

export function createFooterLinkContainer(nameOfParentElement) {
    let parentElement = document.getElementById(nameOfParentElement);

    let footerContainer = document.createElement("div");
    footerContainer.id = "footer-container";
    footerContainer.className = "d-flex justify-content-center";

    parentElement.insertAdjacentElement("beforeend", footerContainer);
};

export function createFooterLinkCenteredDiv(nameOfParentElement) {
    let parentElement = document.getElementById(nameOfParentElement);

    let footerLinkCenteredDiv = document.createElement("div");
    footerLinkCenteredDiv.id = "footer-links-div";
    footerLinkCenteredDiv.className = "btn-group";

    parentElement.insertAdjacentElement("beforeend", footerLinkCenteredDiv);
};

export function createFooterGroup(nameOfParentElement) {
    let parentElement = document.getElementById(nameOfParentElement);

    let footerGroup = document.createElement("group");
    footerGroup.id = "footer-links-group";

    parentElement.insertAdjacentElement("beforeend", footerGroup);
};

export function createFooterButton(nameOfParentElement, text, link) {
    let parentElement = document.getElementById(nameOfParentElement);

    let footerButton = document.createElement("button");
    footerButton.className = "btn btn-white";

    let footerButtonLink = document.createElement("a");
    footerButtonLink.href = link;
    footerButtonLink.textContent = text;

    parentElement.insertAdjacentElement("beforeend", footerButton);
    footerButton.insertAdjacentElement("beforeend", footerButtonLink);
};




//  *********************************************
// EVERYTHING ELSE
//  *********************************************
//  ?

 document.addEventListener('DOMContentLoaded', function() {
    checkbox.addEventListener('change', function() {
        localStorage.setItem('dark', this.checked);
        if (this.checked) {
            body.classList.add('dark')
        } else {
            body.classList.remove('dark')
        }
    });
    
    // On each page:
    if (localStorage.getItem('dark')) {
        body.classList.add('dark');
    }
    
});