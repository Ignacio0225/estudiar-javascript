// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// const link = document.querySelector("a");
// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
// }
// link.addEventListener("click", handleLinkClick);
// const loginButton = document.querySelector("#login-form button");

// function handleBtnClick() {
//   const username = loginInput.value;
//   //   if (username === "") {
//   //     alert("please write your name");
//   //   } else if (username.length > 15) {
//   //     alert("your name is too long");
//   //   }
// }

// loginButton.addEventListener("click", handleBtnClick);

//addEventListener 안에 있는 함수는 직접 실행하지 않는다
// 브라우저가 실행시켜주고
// 브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.
// addEventListener의 함수에서 object에 대한 자리만 할당해주면
// 해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!
// 이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다!

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// localstorage.setitem , .getitem, .removeitem

function paintGreetings(username) {
  greeting.innerText = `hello  ${username}`; // greeting.innerText = "hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(saveUsername);
}
