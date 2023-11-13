
class Killer {
	constructor(name, strongValue, url) {
		this.name = name;
		this.strongValue = strongValue;
		this.url = url;
	}
}

const monsterList = [
	new Killer("trapper", "D", "https://birori-blog.com/wp-content/uploads/2018/04/Killer_Trapper.png"),
	new Killer("race", "B", "https://birori-blog.com/wp-content/uploads/2018/04/Killer_Wraith.png"),
	new Killer("hillBilly", "D", "https://birori-blog.com/wp-content/uploads/2018/04/Killer_Hillbilly.png"),
	new Killer("nurse", "A", "https://birori-blog.com/wp-content/uploads/2018/04/ナース２-1024x576.jpg"),
	new Killer("shape", "B", "https://birori-blog.com/wp-content/uploads/2018/04/dead-by-daylight-shape.jpg"),
	new Killer("hag", "C", "https://birori-blog.com/wp-content/uploads/2018/04/hag.png"),
	new Killer("cannival", "B", "https://birori-blog.com/wp-content/uploads/2018/04/カニバルレザーフェイス-1024x576.jpg"),
	new Killer("doctor", "SSS", "https://birori-blog.com/wp-content/uploads/2018/04/ドクター.jpg")
]

const target = document.getElementById("target");
let sliderShow = document.createElement("div");
sliderShow.classList.add("d-flex", "col-12", "overflow-hiddens");

let main = document.createElement("div");
main.classList.add("main", "full-width", "expand-animation");

let extra = document.createElement("div");
extra.classList.add("extra", "full-width", "deplete-animation");

let mainimg = document.createElement("img");
mainimg.classList.add("imgFit");
mainimg.append(monsterList[0].url);

let extraimg = document.createElement("img");
extraimg.classList.add("imgFit");


sliderShow.append(main);
sliderShow.append(extra);

mainimg.setAttribute("data-index", "0");


function slideJump(step) {
	//現在のindex
	let index = Number(mainimg.getAttribute("data-index"));
	let currentElement = monsterList[index].url;

	let nextindex = Number(step);
	let nextElement = monsterList[nextindex].url;
	mainimg.setAttribute("data-index", step);

	animateButton = index <= nextindex ? "right" : "left";
	console.log(animateButton);
	return animateMain(currentElement,nextElement,animateButton);

}

function animateMain(currentElement,nextElement,animateButton) {
	main.innerHTML = "";
	extra.innerHTML = "";
	mainimg.src = nextElement;
	extraimg.src = currentElement;

	main.append(mainimg);
	extra.append(extraimg);
	if(animateButton == "right"){
		sliderShow.innerHTML = "";
		sliderShow.append(extra);
		sliderShow.append(main);

	}else if(animateButton == "left"){
		sliderShow.innerHTML = "";
		sliderShow.append(main);
		sliderShow.append(extra);
	}

}

console.log(sliderShow);
target.append(sliderShow);



const btnContainer = document.getElementById("btnContainer");
let btnDiv = document.createElement("div");
btnDiv.classList.add("btns", "d-flex", "flex-wrap", "col-12", "justify-content-center");


for(let i=0; i < monsterList.length; i++){
    let button = document.createElement("button");
    button.classList.add("btn","bg-warning","m-2","col-3","bg-primary","align-items-center");
	let currentIndex = i+1;
	button.innerHTML = currentIndex.toString();
	button.addEventListener("click",function(){
		slideJump(i);
	})
	button.addEventListener("click",function(){
		generateInfo(monsterList[i])
	})
    btnDiv.append(button);
}

//info作成
let info = document.getElementById("textContainer");
info.innerHTML =  "name  :  " + monsterList[0].name + "<br>" + "rank : " + monsterList[0].strongValue;


function generateInfo(ele){
	//info.innerHTML = "";
	info.innerHTML = "name :   " + ele.name + "<br>" + "rank   :"  + ele.strongValue;
	
}

btnContainer.append(btnDiv);