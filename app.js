let gameSqu = [];
let userSqu = [];
let btns = ["yellow", "green", "red", "purple"];
let level = 0;
let keyPress = false;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (keyPress == false) {
    keyPress = true;

    levelUp();
  }
});
function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userSqu = [];
  level++;
  h2.innerText = `Level ${level}`;

  //random color
  let randidx = Math.floor(Math.random() * 4);
  let randcolor = btns[randidx];
  let btn_choose = document.querySelector(`.${randcolor}`);
  btnflash(btn_choose);
  gameSqu.push(randcolor);
  console.log(gameSqu);

  console.log(randcolor);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function checkans(idx) {
  if (gameSqu[idx] === userSqu[idx]) {
    if (gameSqu.length === userSqu.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `game over Level : </b>${level} </b> ! Press Any Key To Start Again`;

    let body = document.querySelector("body");
    // setTimeout(makebgred, 250);
    makebgred();
    reset();
  }
}
function makebgred() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "red";
  setTimeout(function () {
    body.style.backgroundColor = "white";
  }, 250);
}
function btnpressed() {
  let btn = this;

  userflash(btn);

  let btnid = btn.getAttribute("id");

  userSqu.push(btnid);
  //   console.log(`User Squeence is :  ${userSqu}`);
  checkans(userSqu.length - 1);
}
let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
  btn.addEventListener("click", btnpressed);
}

function reset() {
  userSqu = [];
  level = 0;
  gameSqu = [];
  keyPress = false;
}
