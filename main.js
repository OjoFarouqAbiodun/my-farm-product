const showMenu = document.querySelector(".showMenu");
const closeMenu = document.querySelector(".closeMenu");
const mobileMenu = document.querySelector(".mobile");
const overlay = document.querySelector(".overlay");

function openMenu() {
	mobileMenu.classList.add("active");
	overlay.classList.add("active");
}

function closeMenuFunc() {
	mobileMenu.classList.remove("active");
	overlay.classList.remove("active");
}

showMenu.addEventListener("click", openMenu);

closeMenu.addEventListener("click", closeMenuFunc);

overlay.addEventListener("click", closeMenuFunc);

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		closeMenuFunc();
	}
});

const featureToggle = document.querySelector("#feature > a");
const companyToggle = document.querySelector("#company > a");
const mobileFeatures = document.querySelector(".mobile-features-links");
const mobileCompany = document.querySelector(".mobile-company-links");
const featureArrow = document.querySelector("#feature img");
const companyArrow = document.querySelector("#company img");

function toggleDropdown(dropdown, arrow) {
	dropdown.classList.toggle("show-dropdown");
	if (dropdown.classList.contains("show-dropdown")) {
		arrow.src = "./images/icon-arrow-up.svg";
	} else {
		arrow.src = "./images/icon-arrow-down.svg";
	}
}

featureToggle.addEventListener("click", (e) => {
	e.preventDefault(); // Prevent link navigation
	toggleDropdown(mobileFeatures, featureArrow);
});

companyToggle.addEventListener("click", (e) => {
	e.preventDefault();
	toggleDropdown(mobileCompany, companyArrow);
});
