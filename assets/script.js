const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// const
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const TagLine = document.querySelector(".tagLine")
const DotsElemnts = document.querySelector(".dots");

// selected slide
let selected = 0;


slides.forEach(element=>{
	DotsElemnts.innerHTML+="<span class='dot'></span>"
	console.log("element trouve !!");
})

// tableau des dots
const tableauDots = document.querySelectorAll('.dot')
console.log(tableauDots);

// for (let index = 0; index < tableauDots.length; index++) {
// 	const element = tableauDots[index];
// 	element.addEventListener('click', ()=>{
// 		console.log("hello click !!!", index);
// 	})	
// }

tableauDots.forEach((dot, i)=>{
	dot.addEventListener('click', ()=>{
		selected = i;
		console.log("hello ckick", i);		
		bannerImg.src = `./assets/images/slideshow/${slides[i].image}`
		TagLine.innerHTML = slides[i].tagLine;
		checkSelected(i, dot)
	});
});


/// add carousel legend
let index = 0
console.log("nous some sur le index " + index);


/*  event listeners   */
leftArrow.addEventListener("click", () => {
	retirerIndex();
})
rightArrow.addEventListener("click", () => {
	// console.log(slides.length, index);
	ajouterIndex()
	})

/// great accessibility !!!
window.addEventListener('keydown', (e)=>{
	if(e.key === "ArrowRight"){
		ajouterIndex()
	}if (e.key === "ArrowLeft"){
		retirerIndex();
		}
});


	/*  functions   */
	
	function ajouterIndex(){
		if(index+1 >= slides.length){
			index = 0
			}else{
				index++
			}
		bannerImg.src = `./assets/images/slideshow/${slides[index].image}`
		TagLine.innerHTML = slides[index].tagLine;
	}

	function retirerIndex(){
		if(index === 0){
			index = slides.length-1
		}else{
			index--
		}
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`
	TagLine.innerHTML = slides[index].tagLine;
		
	}


	function checkSelected(index){
		tableauDots.forEach((dot,i)=>{
			if(i === index){
				dot.classList.add('dot_selected');
			}else{
				dot.classList.remove('dot_selected')
	
			}
		});
		
	}