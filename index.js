var bg = document.querySelector("#background");
var atag = document.querySelector("#mylink");

atag.addEventListener("mouseover",function(){
	bg.classList.remove("bg");
	bg.classList.add("bg1");
})

atag.addEventListener("mouseout", function(){
	bg.classList.remove("bg1");
	bg.classList.add("bg");
})

