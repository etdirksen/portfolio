import * as navAndFooterLinks from "./generateNavbarAndFooter.js";

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