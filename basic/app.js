// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(daysOfWeek);

// daysOfWeek.push("sun");

// console.log(daysOfWeek);

// const player = {
//   name: "nico",
//   points: 10,
//   fat: true,
// };

// console.log(player);
// console.log(player.name);
// // player.name == player["name"]

// player.fat = false;
// player.lastName = "test";

// console.log(player);

// function sayHello(nameOfPerson, age) {
//   console.log("hello my name is " + nameOfPerson + " and I`m " + age);
// }
// sayHello("Ignacio", 34);

// function plus(a, b) {
//   console.log(a + b);
// }

// plus((a = 1), (b = 2));

// const player = {
//   name: "nico",
//   sayHello: function (otherPersonsName) {
//     console.log("hello! " + otherPersonsName + " nice to meet you");
//   },
// };

// console.log(player.name);
// player.sayHello("lynn");

// const calc = {
//   add: function (a, b) {
//     return a + b;
//   },
//   min: function (a, b) {
//     return a - b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
//   div: function (a, b) {
//     return a / b;
//   },
//   pow: function (a, b) {
//     return a ** b;
//   },
// };

// a = 2;
// b = 3;
// calc.add(a, b);
// calc.min(a, b);
// calc.mul(a, b);
// calc.div(a, b);
// calc.pow(a, b);

// const age = parseInt(prompt("how ald are you?"));
// console.log(isNaN(age));

// if (isNaN(age)) {
//   console.log("Please write a number");
// } else {
//   if (age > 18) {
//     console.log("salut!");
//   } else {
//     console.log("nesecitas crecer más");
//   }
// }

// if (isNaN(age) || age < 0) {
//   //|| 둘중 하나만 true
//   console.log("Please write a real positive number");
// } else if (age < 18) {
//   console.log("get out my pup");
// } else if (age >= 19 && age <= 50) {
//   //&& 둘다 true
//   console.log("you can drink");
// } else if (age >= 51 && age <= 99) {
//   console.log("stop drink for your health");
// } else if (age === 100) {
//   // === 같다
//   console.log("it is impossible age");
// }
// // !== 아니다

// document.title = "Hello From JS!"; // 이렇게 HTML  내용을 변경 가능함
// const title = document.getElementById("title");

// console.dir(title);

// title.innerText = "got you";

// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// const title = document.getElementsByTagName("h1");

const h1 = document.querySelector("div.hello:first-child h1");

// title.style.color = "blue";

// console.dir(h1); //이 안에서 on이 붙은거는 이벤트임

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "red") {
//     newColor = "blue";
//     console.log(h1.style.color);
//   } else {
//     newColor = "red";
//     console.log(h1.style.color);
//   }
//   h1.style.color = newColor;
// }

// // 위에있는거는 움직임을 알려주기 위함.

// function handleTitleClick() {
//   const clickedClass = "clicked"; // 클래스를 직접 여러번 사용해서 에러가 나는 상황을 방지
//   if (h1.className === clickedClass) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// } // 이렇게 하면 클래스의 이름이 바뀌어버림.

// // 위에 코드보다는 클래스 이름으로 움직이고 밑에는 리스트로 움직임

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass))//클래스 리스트에 clicked가 있다면
//   {
//     h1.classList.remove(clickedClass);// 클래스 리스트에서 clicked를 삭제
//   } else {
//     h1.classList.add(clickedClass);// 클래스 리스트에서 clicked를 추가
//   }
// }
// // 위에있는 내용을 toggle 함수로 한번에 가능

function handleTitleClick() {
  // const clickedClass = "clicked"; //한번만 사용하기에 그냥 클래스이름을 넣어버림
  h1.classList.toggle("clicked"); // 클래스를 체크 하고 클래스가 있으면 삭제 없으면 추가 하는 함수
}

// function handleMouseEnter() {
//   h1.innerText = "Mouse is here";
//   h1.style.color = "blue";
// }

// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone";
//   h1.style.color = "green";
// }

// function hendleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//   alert("copier!");
// }

// function handleWindowOffline() {
//   alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//   alert("Everything is good");
// }
h1.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick; // 똑같음
// h1.addEventListener("mouseenter", handleMouseEnter);
// // title.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", hendleWindowResize);

// window.addEventListener("copy", handleWindowCopy);

// window.addEventListener("offline", handleWindowOffline);

// window.addEventListener("online", handleWindowOnline);
