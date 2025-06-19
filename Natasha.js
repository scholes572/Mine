document.getElementById('loginBtn').addEventListener('click', () => {
  const password = document.getElementById('password').value.trim();

  if (password === "iloveyou") {
    document.getElementById('protectedContent').style.display = "block";
    document.getElementById('loginBtn').style.display = "none";
    document.getElementById('password').style.display = "none";

    new Audio('your-romantic-song.mp3').play();

  } else {
    alert("Incorrect password!");
  }
});

document.getElementById('quizBtn').addEventListener('click', () => {
  let score = 0;

  const q1 = prompt("Where did we first meet?");
  if (q1.toLowerCase().includes("park") ||
      q1.toLowerCase().includes("cafe") ||
      q1.toLowerCase().includes("movie theatre")) {
    score++;
  }

  const q2 = prompt("When is our anniversary?");
  if (q2.toLowerCase().includes("june") ||
      q2.toLowerCase().includes("1st") ||
      q2.toLowerCase().includes("first of june")) {
    score++;
  }

  if (score == 2) {
    alert("Excellent! You know us so well ❤️.");
  } else if (score == 1) {
    alert("Not bad ❤️.");
  } else {
    alert("Aw! We need more shared stories!");
  }
});

// Surprise
document.getElementById('questionBtn').addEventListener('click', () => {
  alert("TBH!!!!....I told you before that I'd like to end up with u....So👉👈 ,sometimes najiulizanga kama unasema ukweli that U'd also like to end up with me (MARRY ME)...So i might end up overthinking if what ur saying is true😭😭....I know u told me that nisiwahi ona that all the time ur joking...but this one makes me overthink all the time....So..??Which is which?👀👀...Na pls don't be mad...actually this is something I've been wanting to tell you but i fear so much ju maybe unaeza ona kama sijai acha ku ona kama u are joking all the time...I still overthink.Najua nlikuambia that niliacha ama nitaacha but sijui what's wrong with me!😭");
});
 