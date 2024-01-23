
//buttons 5-6 will cycle through all the employees

const reviews = [
    {
      id: 1,
      name: 'Micheal',
      job: 'Fight Attendant',
      img: 'Luffy.png',
      text: "Monkey D. Luffy, also known as Straw Hat Luffy and commonly as Straw Hat, is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as the most powerful of its top fighters.",
    },
    {
      id: 2,
      name: 'Isaiah',
      job: 'Pilot',
      img: 'zoro.png',
      text: 'Zoro is the first crewmate to join Monkey D. Luffy to be part of his crew of pirates, after he is rescued by Luffy from execution. Zoro is a highly skilled swordsman and serves as the crews combatant',
    },
    {
      id: 3,
      name: 'Kevin',
      job: 'Cargo',
      img: 'Sanji.png',
      text: '"Black Leg" Sanji, born as Vinsmoke Sanji, is the cook of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet.',
    },
    {
      id: 4,
      name: 'Mehthaab',
      job: 'Baggager',
      img: 'Nami.png',
      text: '"Cat Burglar" Nami is the navigator of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. She is the third member of the crew and the second to join',
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });


  //Button 1-3 Like and Dislike
  let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const randt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    let random = 0;
  for (let i = 0; i < 1; i++) {
    random += randt[getRandomNumber()];
  }

    if (styles.contains("Third")) {
      count--;
    } else if (styles.contains("First")) {
      count++;}
      else if  (styles.contains("Second")){
        count = 0;
      }
    else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

function getRandomNumber() {
    return Math.floor(Math.random() * randt.length);
  }
 