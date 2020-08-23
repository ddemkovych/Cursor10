
const sound = (pach) => {
	let sounds = new Audio();
	sounds.src = pach;
	sounds.play();
	return sounds;
};

let mp3 = ['sounds/au1.mp3' , 'sounds/au2.mp3' , 'sounds/au3.mp3', 'sounds/au4.mp3','sounds/au5.mp3', 'sounds/au6.mp3' , 'sounds/au7.mp3' , 'sounds/au8.mp3', 'sounds/au9.mp3'];

const butt = document.querySelectorAll('button');
for(let i = 0; i < butt.length; i++){
butt[i].addEventListener('click', () => {
	sound(mp3[i]);

});
};

document.addEventListener("keyup", function (event) {
  switch(event.keyCode){ 
	 case 65:sound(mp3[0]);
			break;
	 case 83:sound(mp3[1]);
			break;
	 case 68:sound(mp3[2]);
			break;
	 case 70:sound(mp3[3]);
			break;
	 case 71:sound(mp3[4]);
			break;
	 case 72:sound(mp3[5]);
			break;
	 case 74:sound(mp3[6]);
			break;
	 case 75:sound(mp3[7]);
			break;
	 case 76:sound(mp3[8]);
			break;
	}
});

