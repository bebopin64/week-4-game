var characters = {};
var enemyLeft = 3;
var inBattle = 0;
var enemy = 0;
var didX = document.querySelector("#didXTo");
var tookY = document.querySelector("#tookY");

function initialize() {
	didX.innerHTML = "";
	tookY.innerHTML = "";
	$("#hideToggle").addClass("hide");
	$("#hidden").addClass("hide");
	$("#hiddenTwo").addClass("hide");
	enemyLeft = 3;
	inBattle = 0;
	enemy = 0;
	characters = {
		MPB: {
			HP: 100,
			AP: 4
		},
		morty: {
			HP: 120,
			AP: 7
		},
		rick: {
			HP: 150,
			AP: 20
		},
		evilRick: {
			HP: 180,
			AP: 25
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
	$("#hidden").removeClass("hide");
	$("#hiddenTwo").removeClass("hide");
	userHP = characters.MPB.HP;
	userAP = characters.MPB.AP;
	$("#chooseCharacter").addClass("hide");
	$("#yourChar").addClass("MPBGreen");
	$("#chOppMorty").addClass("mortyRedSmall");
	$("#chOppRick").addClass("rickRedSmall");
	$("#chOppEvilRick").addClass("evilRickRedSmall");
}

function chooseMorty() {
	$("#hidden").removeClass("hide");
	$("#hiddenTwo").removeClass("hide");
	userHP = characters.morty.HP;
	userAP = characters.morty.AP;
	$("#chooseCharacter").addClass("hide");
	$("#yourChar").addClass("mortyGreen");
	$("#chOppMPB").addClass("MPBRedSmall");
	$("#chOppRick").addClass("rickRedSmall");
	$("#chOppEvilRick").addClass("evilRickRedSmall");
}

function chooseRick() {
	$("#hidden").removeClass("hide");
	$("#hiddenTwo").removeClass("hide");
	userHP = characters.rick.HP;
	userAP = characters.rick.AP;
	$("#chooseCharacter").addClass("hide");
	$("#yourChar").addClass("rickGreen");
	$("#chOppMPB").addClass("MPBRedSmall");
	$("#chOppMorty").addClass("mortyRedSmall");
	$("#chOppEvilRick").addClass("evilRickRedSmall");
}

function chooseEvilRick() {
	$("#hidden").removeClass("hide");
	$("#hiddenTwo").removeClass("hide");
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
	$("#hideToggle").removeClass("hide");
	didX.innerHTML = "Your HP is <strong>" + userHP + "</strong>";
	tookY.innerHTML = "<br>Your enemy's HP is <strong>" + characters.MPB.HP + "</strong>";
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
	$("#hideToggle").removeClass("hide");
	didX.innerHTML = "Your HP is <strong>" + userHP + "</strong>";
	tookY.innerHTML = "<br>Your enemy's HP is <strong>" + characters.morty.HP + "</strong>";
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
	$("#hideToggle").removeClass("hide");
	didX.innerHTML = "Your HP is <strong>" + userHP + "</strong>";
	tookY.innerHTML = "<br>Your enemy's HP is <strong>" + characters.rick.HP + "</strong>";
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
	$("#hideToggle").removeClass("hide");
	didX.innerHTML = "Your HP is <strong>" + userHP + "</strong>";
	tookY.innerHTML = "<br>Your enemy's HP is <strong>" + characters.evilRick.HP + "</strong>";
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
	if (userHP < 1) {
		lose();
	};
	characters.MPB.HP = characters.MPB.HP - userAP;
	if (characters.MPB.HP < 1) {
		enemyLeft--;
		didX.innerHTML = "You have defeated Mr. Poopybutthole!";
		tookY.innerHTML = "Choose your next challenger.";
		if (enemyLeft === 0) {
			win();
		}
		$("#currentOppMPB").removeClass("MPBRed");
		inBattle = 0;
		return;
	};
	didX.innerHTML = "You did <strong>" + userAP + "</strong> damage.  <br>EnemyHP: " + characters.MPB.HP;
	userAP = userAP + userAP;
	userHP = userHP - characters.MPB.AP;
	tookY.innerHTML = "<br>Enemy did <strong>" + characters.MPB.AP + "</strong> damage.  <br>Your HP is " + userHP;
	if (userHP < 1) {
		lose();
	};
}

function battleMorty() {
	if (userHP < 1) {
		lose();
	};
	characters.morty.HP = characters.morty.HP - userAP;
	if (characters.morty.HP < 1) {
		enemyLeft--;
		didX.innerHTML = "You have defeated Morty!";
		tookY.innerHTML = "Choose your next challenger.";
		if (enemyLeft === 0) {
			win();
		}
		$("#currentOppMorty").removeClass("mortyRed");
		inBattle = 0;
		return;
	};
	didX.innerHTML = "You did <strong>" + userAP + "</strong> damage.  <br>EnemyHP: " + characters.morty.HP;
	userAP = userAP + userAP;
	userHP = userHP - characters.morty.AP;
	tookY.innerHTML = "<br>Enemy did <strong>" + characters.morty.AP + "</strong> damage.  <br>Your HP is " + userHP;
	if (userHP < 1) {
		lose();
	};
}

function battleRick() {
	if (userHP < 1) {
		lose();
	};
	characters.rick.HP = characters.rick.HP - userAP;
	if (characters.rick.HP < 1) {
		enemyLeft--;
		didX.innerHTML = "You have defeated Rick!";
		tookY.innerHTML = "Choose your next challenger.";
		if (enemyLeft === 0) {
			win();
		}
		$("#currentOppRick").removeClass("rickRed");
		inBattle = 0;
		return;
	};
	didX.innerHTML = "You did <strong>" + userAP + "</strong> damage.  <br>EnemyHP: " + characters.rick.HP;
	userAP = userAP + userAP;
	userHP = userHP - characters.rick.AP;
	tookY.innerHTML = "<br>Enemy did <strong>" + characters.rick.AP + "</strong> damage.  <br>Your HP is " + userHP;
	if (userHP < 1) {
		lose();
	};
}

function battleEvilRick() {
	if (userHP < 1) {
		lose();
	};
	characters.evilRick.HP = characters.evilRick.HP - userAP;
	if (characters.evilRick.HP < 1) {
		enemyLeft--;
		didX.innerHTML = "You have defeated Evil Rick!";
		tookY.innerHTML = "Choose your next challenger.";
		if (enemyLeft === 0) {
			win();
		}
		$("#currentOppEvilRick").removeClass("evilRickRed");
		inBattle = 0;
		return;
	};
	didX.innerHTML = "You did <strong>" + userAP + "</strong> damage.  <br>EnemyHP: " + characters.evilRick.HP;
	userAP = userAP + userAP;
	userHP = userHP - characters.evilRick.AP;
	tookY.innerHTML = "<br>Enemy did <strong>" + characters.evilRick.AP + "</strong> damage.  <br>Your HP is " + userHP;
	if (userHP < 1) {
		lose();
	};
}
//--------------------------------------------------------------------------------

function win() {
	didX.innerHTML = "You have bested them all!  You're now the most powerful being in the multiverse!";
	tookY.innerHTML = "";
	setTimeout(initialize , 3000);
}

function lose() {
	alert("You've been eliminated");
	initialize();
}