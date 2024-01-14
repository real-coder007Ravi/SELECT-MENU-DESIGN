let menutext = document.getElementById("menu-text");
let text = document.getElementById("text");
let options = document.getElementsByClassName("options");

let arrowIcon = document.getElementById("arrow");

let list = document.getElementById("list");

menutext.onclick = function () {
	list.classList.toggle("hide");
	arrowIcon.classList.toggle("rotate");
};
for (option of options) {
	option.onclick = function () {
		text.innerHTML = this.textContent;
		list.classList.toggle("hide");
		arrowIcon.classList.toggle("rotate");
	};
}
