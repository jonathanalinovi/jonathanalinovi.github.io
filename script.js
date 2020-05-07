var changed = 0;

function spinAll() {
	spinTop(0);
	spinTop(1);
	spinTop(2);
	spinTop(3);
	spinTop(4);
	spinTop(5);
	spinTop(6);
	spinTop(7);
	spinTop(9);
	spinTop(10);
	spinTop(11);
	spinTop(12);
	spinTop(13);
	spinTop(14);
	spinTop(15);
	fadeIn();
	colorReel();
}

function fadeIn() {
	//grab the portfolio elemetn
	var element = document.getElementById("portfolio");
	//assign the style attribute "opacity" to variable oldOpacity
	var oldOpacity = element.style.opacity;
	console.log("oldOpacity is typeof " + typeof oldOpacity);
	console.log("oldopacity is " + oldOpacity);
	//convert the string to a float and add .01 to it
	var newOpacity = parseFloat(oldOpacity);
	newOpacity += .01;
	//if it's already at 1, we're done fading in
	console.log("newOpacity is " + newOpacity);
	if (newOpacity >= 1) {
		return;
	}
	//otherwise replace the opacity with the newOpacity, wait a few ms and then run the fx again
	else {
		document.getElementById("portfolio").style.opacity = newOpacity;
		setTimeout(fadeIn, 40);
	}
}

function spinTop(index) {
	//this is the string we are looking to finish with
	var checkAgainst = "jonathan alinovi";
	var whenComplete = (checkAgainst.length - 1);
	spin();

	function spin() {
		//dropdown the old letter
		dropDown(index);

		//if the letter randomly generated last time matches the one we're looking for:
		if (document.getElementById('t'+index).innerHTML == checkAgainst[index]) {
			//replace top char with a space
			document.getElementById('t'+index).innerHTML = "?";
			document.getElementById('t'+index).style.opacity = "0";
			//final drop after 200ms
			setTimeout(function() { finalDrop(index);}, 40);
			//no need to spin again
			console.log(changed);
			if (changed == (whenComplete-1)) {
				//the following will animate the name after it shuffles
				//translateFinal();
			}
			changed++;
			return;			
		}
		//otherwise get a new char and color, reassign before checking and spinning again
		else {
			//assign new random character with random color to the span
			var rChar = randomChar();
			var rColor = randomColor();
			document.getElementById('t'+index).innerHTML = rChar;
			document.getElementById('t'+index).style.color = rColor;
			//and wait 200ms before spinning again
			setTimeout(spin, 40);
		}
	}
	
}

function dropDown(index)
{
	//drop pu char and color to final
	document.getElementById('f'+index).innerHTML = document.getElementById('pu'+index).innerHTML;
	document.getElementById('f'+index).style.color = document.getElementById('pu'+index).style.color;
	//drop ppu char to pu
	document.getElementById('pu'+index).innerHTML = document.getElementById('ppu'+index).innerHTML;
	document.getElementById('pu'+index).style.color = document.getElementById('ppu'+index).style.color;
    //drop m char and color to ppu
    document.getElementById('ppu'+index).innerHTML = document.getElementById('m'+index).innerHTML;
	document.getElementById('ppu'+index).style.color = document.getElementById('m'+index).style.color;
	//drop top char and color to mid
	document.getElementById('m'+index).innerHTML = document.getElementById('t'+index).innerHTML;
	document.getElementById('m'+index).style.color = document.getElementById('t'+index).style.color;
}

function finalDrop(index) {
	//drop mid char and color to ppu
	document.getElementById('ppu'+index).innerHTML = document.getElementById('m'+index).innerHTML;
	document.getElementById('ppu'+index).style.color = document.getElementById('m'+index).style.color;
	//erase mid char
	document.getElementById('m'+index).innerHTML = "?";
	document.getElementById('m'+index).style.opacity = "0";

	//timeout and drop ppu to pu and then erase pu
	setTimeout(function() {
		//drop ppu char and color to pu
		document.getElementById('pu'+index).innerHTML = document.getElementById('ppu'+index).innerHTML;
		document.getElementById('pu'+index).style.color = document.getElementById('ppu'+index).style.color;
		//erase pu char
		document.getElementById('ppu'+index).innerHTML = "?";
		document.getElementById('ppu'+index).style.opacity = "0";
		//drop pu to f
		setTimeout(function() {
			//drop pu char and color to f
			document.getElementById('f'+index).innerHTML = document.getElementById('pu'+index).innerHTML;
			document.getElementById('f'+index).style.color = document.getElementById('pu'+index).style.color;
			//erase pu char
			document.getElementById('pu'+index).innerHTML = "?";
			document.getElementById('pu'+index).style.opacity = "0";
		}, 40);
	}, 40);
}

function randomColor(){
	//soft rainbow
	var colorArray = ["LIGHTCORAL", "DARKORANGE", "GOLD", "YELLOWGREEN", "LIGHTSKYBLUE", "SLATEBLUE", "VIOLET", "PALEVIOLETRED","DARKSEAGREEN"];
	//rgb
	//var colorArray = ["red", "blue", "green", "red", "blue", "green", "red", "blue","green"];
	//psychedelic
	//var colorArray = ["#fd00ff", "#fdff00", "#00ff38", "#00f9ff", "	#3c00ff"];
	//name in lights
	//var colorArray = [ "#E7E5BE","#E7E5BE","#E7E5BE","#E7E5BE", "#C6483A"];
	//name in red velvet
	//var colorArray = [ "#E7E5BE","#C6483A","#C6483A", "#C6483A"];

	var i = Math.floor(Math.random()*colorArray.length);
	var rColor = colorArray[i];
	return rColor;
}

function colorReel(){
	var color = randomColor();
	//document.getElementById('reel').style.color = color;
	document.getElementById('password').style.color = color;
	document.getElementById('password2').style.color = color;
}

function randomChar(){
  var char = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";
  char = possible.charAt(Math.floor(Math.random() * possible.length));
  return char;
}

function translateFinal(){
	var i = -1;
	setTimeout(trans,1250);

	function trans(){
		setTimeout(function() {
			if (i == -135) {
				return;
			}
			document.getElementById('nameFinal').style.transform = "translate(0px," + i + "px)";
			i--;
			trans();
	}, 1);
}
}
