var characters = {};
var enemyLeft = 3;
var inBattle = 0;
var enemy = 0;
var didX = document.querySelector("#didXTo");
var tookY = document.querySelector("#tookY");

function initialize() {
	enemyLeft = 3;
	inBattle = 0;
	enemy = 0;
	characters = {
		MPB: {
			HP: 100,
			AP: 10
		},
		morty: {
			HP: 120,
			AP: 12
		},
		rick: {
			HP: 150,
			AP: 20
		},
		evilRick: {
			HP: 180,
			AP: 40
		}
	};
	$("#chooseCharacter").removeClass("hide");
	$("#currentOppMPB").removeClass("MPBRed");
	$("#currentOppMorty").removeClass("mortyRed");
	$("#currentOppRick").removeClass("rickRed");
	$("#currentOppEvilRick").removeClass("evilRickRed");
	$("#chOppMPB").removeClass("MPBRedSmall");
	$("#chOppMorty").removeClass("mortyRedSmall");
	$("#chOppRick").removeClass("rickRedSmall");
	$("#chOppEvilRick").removeClass("evilRickRedSmall");
	$("#chooseCharMPB").addClass("MPB");
	$("#chooseCharMorty").addClass("morty");
	$("#chooseCharRick").addClass("rick");
	$("#chooseCharEvilRick").addClass("evilRick");
	$("#yourChar").removeClass();
}

initialize();

console.log(characters);

function attack() {
	console.log(enemy);
	if (enemy === 0) {
		battleMPB();
	} else if (enemy === 1) {
		battleMorty();
	} else if (enemy === 2) {
		battleRick();
	} else if (enemy ===3) {
		battleEvilRick();
	}
}

//-----------------------select user character----------------------------
function chooseMPB() {
	userHP = characters.MPB.HP;
	userAP = characters.MPB.AP;
	$("#chooseCharacter").addClass("hide");
	$("#yourChar").addClass("MPBGreen");
	$("#chOppMorty").addClass("mortyRedSmall");
	$("#chOppRick").addClass("rickRedSmall");
	$("#chOppEvilRick").addClass("evilRickRedSmall");
}

function chooseMorty() {
	userHP = characters.morty.HP;
	userAP = characters.morty.AP;
	$("#chooseCharacter").addClass("hide");
	$("#yourChar").addClass("mortyGreen");
	$("#chOppMPB").addClass("MPBRedSmall");
	$("#chOppRick").addClass("rickRedSmall");
	$("#chOppEvilRick").addClass("evilRickRedSmall");
}

function chooseRick() {
	userHP = characters.rick.HP;
	userAP = characters.rick.AP;
	$("#chooseCharacter").addClass("hide");
	$("#yourChar").addClass("rickGreen");
	$("#chOppMPB").addClass("MPBRedSmall");
	$("#chOppMorty").addClass("mortyRedSmall");
	$("#chOppEvilRick").addClass("evilRickRedSmall");
}

function chooseEvilRick() {
	userHP = characters.evilRick.HP;
	userAP = characters.evilRick.AP;
	$("#chooseCharacter").addClass("hide");
	$("#yourChar").addClass("evilRickGreen");
	$("#chOppMPB").addClass("MPBRedSmall");
	$("#chOppMorty").addClass("mortyRedSmall");
	$("#chOppRick").addClass("rickRedSmall");
}
//------------------------------------------------------------------------



//-------------------------select current enemy----------------------------
function chOppMPB() {
	if (inBattle === 1) {
		console.log("broken");
		return;
	} else {
		$("#chOppMPB").removeClass("MPBRedSmall");
		$("#currentOppMPB").addClass("MPBRed");
		inBattle = 1;
		console.log("what?");
	};
	enemy = 0;
}

function chOppMorty() {
	if (inBattle === 1) {
		console.log("broken");
		return;
	} else {
		$("#chOppMorty").removeClass("mortyRedSmall");
		$("#currentOppMorty").addClass("mortyRed");
		inBattle = 1;
		console.log("what?");
	};
	enemy = 1;
}

function chOppRick() {
	if (inBattle === 1) {
		console.log("broken");
		return;
	} else {
		$("#chOppRick").removeClass("rickRedSmall");
		$("#currentOppRick").addClass("rickRed");
		inBattle = 1;
		console.log("what?");
	};
	enemy = 2;
}

function chOppEvilRick() {
	if (inBattle === 1) {
		console.log("broken");
		return;
	} else {
		$("#chOppEvilRick").removeClass("evilRickRedSmall");
		$("#currentOppEvilRick").addClass("evilRickRed");
		inBattle = 1;
		console.log("what?");
	};
	enemy = 3;
}





//-------------------------------------------------------------------------

//-----------------------when user hits attack-----------------------------
function battleMPB() {
	characters.MPB.HP = characters.MPB.HP - userAP;
	if (characters.MPB.HP < 1) {
		enemyLeft--;
		didX.innerHTML = "You killed your opponent";
		tookY.innerHTML = "Your oppenent is dead";
		if (enemyLeft === 0) {
			win();
		}
		$("#currentOppMPB").removeClass("MPBRed");
		inBattle = 0;
		return;
	};
	didX.innerHTML = "You did " + userAP + "damage.  EnemyHP: " + characters.MPB.HP;
	userAP = userAP * 2;
	userHP = userHP - characters.MPB.AP;
	tookY.innerHTML = "Enemy did " + characters.MPB.AP + " damage.  Your HP is " + userHP;
	if (userHP < 0) {
		lose();
	};
}

function battleMorty() {
	characters.morty.HP = characters.morty.HP - userAP;
	if (characters.morty.HP < 1) {
		enemyLeft--;
		didX.innerHTML = "You killed your opponent";
		tookY.innerHTML = "Your oppenent is dead";
		if (enemyLeft === 0) {
			win();
		}
		$("#currentOppMorty").removeClass("mortyRed");
		inBattle = 0;
		return;
	};
	didX.innerHTML = "You did " + userAP + "damage.  EnemyHP: " + characters.morty.HP;
	userAP = userAP * 2;
	userHP = userHP - characters.morty.AP;
	tookY.innerHTML = "Enemy did " + characters.morty.AP + " damage.  Your HP is " + userHP;
	if (userHP < 0) {
		lose();
	};
}

function battleRick() {
	characters.rick.HP = characters.rick.HP - userAP;
	if (characters.rick.HP < 1) {
		enemyLeft--;
		didX.innerHTML = "You killed your opponent";
		tookY.innerHTML = "Your oppenent is dead";
		if (enemyLeft === 0) {
			win();
		}
		$("#currentOppRick").removeClass("rickRed");
		inBattle = 0;
		return;
	};
	didX.innerHTML = "You did " + userAP + "damage.  EnemyHP: " + characters.rick.HP;
	userAP = userAP * 2;
	userHP = userHP - characters.rick.AP;
	tookY.innerHTML = "Enemy did " + characters.rick.AP + " damage.  Your HP is " + userHP;
	if (userHP < 0) {
		lose();
	};
}

function battleEvilRick() {
	characters.evilRick.HP = characters.evilRick.HP - userAP;
	if (characters.evilRick.HP < 1) {
		enemyLeft--;
		didX.innerHTML = "You killed your opponent";
		tookY.innerHTML = "Your oppenent is dead";
		if (enemyLeft === 0) {
			win();
		}
		$("#currentOppEvilRick").removeClass("evilRickRed");
		inBattle = 0;
		return;
	};
	didX.innerHTML = "You did " + userAP + "damage.  EnemyHP: " + characters.evilRick.HP;
	userAP = userAP * 2;
	userHP = userHP - characters.evilRick.AP;
	tookY.innerHTML = "Enemy did " + characters.evilRick.AP + " damage.  Your HP is " + userHP;
	if (userHP < 0) {
		lose();
	};
}
//--------------------------------------------------------------------------------


function battle() {

}

function kill() {
	//what happens when current enemy dies and enemies left
}

function win() {
	alert("you won");
	initialize();
}

function lose() {
	alert("you suck");
	initialize();
}

function reset() {

}

function apUp() {
	//function to double ap
	//only runs for user player
}

function hpDown() {

}

function userSelect() {
	// moves others
}

function attack() {

}

function test() {
	console.log("bitch");
}