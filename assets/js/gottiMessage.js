const textHeroSection = "";
const textAboutSection = "ABOUT SECTION";
const textSolutionSection = "SOLUTION SECTION";
const textFeaturesSection = "FEATURES SECTION";
const textWorkflowSection = "WORKFLOW SECTION";
const textChartSection = "CHART SECTION";
const textServicesSection = "SERVICES SECTION";

function isScrolledIntoView(id) {
    var el = document.getElementById(id);
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;

    //Only return true if the bottom of the previous part has surpassed the top 50% of the screen
    return ((elemTop >= 90 && elemTop <= screen.height * 0.3));
}

function isScrolledOutView(id) {
    var el = document.getElementById(id);
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;

    //Only return true if the bottom of the previous part has surpassed the top 50% of the screen
    return ((elemTop >= 0 && elemTop <= screen.height * 0.5));
}

function isScrolledBacktoFirst() {
    var el = document.getElementById("section1");
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    //Special case of scroll
    //We must check if top and bottom are inview because there is no previous section
    return ((elemBottom >= 0 || elemTop >= 0));
}

function setText(text) {
    //We try to improve performance by reducing assignments to same value
    var textballoon = document.getElementById("balloon");
    textballoon.innerHTML = text;
    document.getElementById('balloon').style.display = 'block';
}

function textFactory() {
    //We use the previous section because we use the end of this to determine if it is over and the next can start
    if (isScrolledIntoView("hero")) {
        setText(textHeroSection);
    } else if (isScrolledIntoView("problem")) {
        setText(textAboutSection);
    } else if (isScrolledIntoView("solution")) {
        setText(textSolutionSection);
    } else if (isScrolledIntoView("features")) {
        setText(textFeaturesSection);
    } else if (isScrolledIntoView("workflow")) {
        setText(textWorkflowSection);
    } else if (isScrolledIntoView("charts")) {
        setText(textChartSection);
    } else if (isScrolledIntoView("services")) {
        setText(textServicesSection);
    } else if (isScrolledOutView("limitAboutSection1") || isScrolledOutView("limitAboutSection2") || isScrolledOutView("limitSolutionSection1") || isScrolledOutView("limitSolutionSection2") || isScrolledOutView("limitFeaturesSection1") || isScrolledOutView("limitFeaturesSection2") || isScrolledOutView("limitChartSection1") || isScrolledOutView("limitChartSection2") || isScrolledOutView("limitServicesSection1") || isScrolledOutView("limitServicesSection2")) {
        document.getElementById('balloon').style.display = 'none';
    }
    return null;
}

window.onscroll = function () {
    //Everytime the user scrolls the method is called and it checks what image to display
    textFactory();
}
