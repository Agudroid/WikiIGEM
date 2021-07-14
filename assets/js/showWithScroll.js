let scrollAnimation = document.querySelectorAll(".scrollAnimation");

function viewWihtScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < scrollAnimation.length; i++) {
        let heightAnimationElement = scrollAnimation[i].offsetTop;
        if(heightAnimationElement - 500 < scrollTop) {
            scrollAnimation[i].style.opacity = 1;
            scrollAnimation[i].classList.add("lookUp");
        }
    }
}

window.addEventListener('scroll', viewWihtScroll);
