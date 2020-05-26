//cacheDOM
const 
toggleBtn = document.querySelector(".navbar-toggle"),
heroSection = document.querySelector(".hero-section"),
showLinks = document.querySelector(".navbar");

//Actions
const mobileToggle = () => {
	for (let i = 0; i < 3; i++) {
		toggleBtn.children[i].classList.toggle("navbar-toggle__bar--close");
	}
	heroSection.classList.toggle("hero-section--overlay");
    showLinks.classList.toggle("navbar--active");
};

//Event Listeners
toggleBtn.addEventListener("click", mobileToggle);