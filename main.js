const faqs = document.querySelectorAll(".q");

faqs.forEach((q) => {
	q.addEventListener("click", () => {
		if (q.classList.contains("active")) {
			q.classList.remove("active");
		} else {
			q.classList.add("active");
            faqs.forEach((otherq)=>{
                if(otherq != q){
                    otherq.classList.remove("active")
                }
            })
		}
	});
});

let nav = document.querySelector(".nav");

function showMenu() {
    nav.classList.add("show");
}

function hideMenu() {
    nav.classList.remove("show");
}