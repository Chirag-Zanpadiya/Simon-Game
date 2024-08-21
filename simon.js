let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "green", "red", "purple"];
let h2 = document.querySelector("h2");
let start = false;
let Count_level = 0;

// hame karna hai ki document me koi bhi key press ho to game start  ho jaye
document.addEventListener("keypress", function () {
  if (start == false) {
    start = true;
    console.log("Game Started");
  }
  levelUp();
});

//flash the btn
function gameflashbtn(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

//userflash
function userflashbtn(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 500);
}

///////////////////////////////
function levelUp() {
  userSeq = [];
  Count_level++;
  h2.innerText = `Level : ${Count_level}`;

  // random btn ko flash karana hai

  // total hamare pass 4 color hai to random color 0 to 3 tak generate karne padege
  let random_idx = Math.floor(Math.random() * 3);
  //random ind ke value hame random_color me daldi
  //   random_color ="yellow"
  let random_color = btns[random_idx];

  //randbtn mre .yellow / .purple / .red
  let randbtn = document.querySelector(`.${random_color}`);

  //   console.log(`random_idx : ${random_idx}`);
  //   console.log(`random_Color : ${random_color}`);
  //   console.log(`randbtn : ${randbtn}`);

  // push-random color in the game_seq

  gameSeq.push(random_color);
  console.log(gameSeq);

  //flash btn

  gameflashbtn(randbtn);
}

//////////////////////////////
function checkans(idx) {
  // console.log(`current level is : ${Count_level}`);

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `-:Game over ! <b>${Count_level}</b> : <br>Press any to Start :- `;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
}

//////////
// addEventListner To all btns

/////////////////////////////
function btnpress() {
  // this is for the knownledge purpose
  // console.log(event.target);
  //   console.log(this);
  // console.log(`Btn was clicked`);

  let btn = this;
  console.log(`below btn is preseed `);

  console.log(btn);

  userflashbtn(btn);

  let usercolor = btn.getAttribute("id");
  //   console.log(`user prressed btn color is : `);
  //   console.log(usercolor);

  userSeq.push(usercolor);
  //   console.log(`below is user Seq : ${userSeq}`);
  checkans(userSeq.length - 1);
}

///////////////////////////
// select all btns
// jis div ki class btn ho me print kardo btn was click

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  userSeq = [];
  gameSeq = [];
  Count_level = 0;
  start = false;
}
