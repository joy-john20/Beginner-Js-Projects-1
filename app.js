//Noun Changer
const nouns = ['Robi', 'Simi', 'Max', 'Priti', 'Joe', 'Ross'];
const nbtn = document.getElementById('n-btn');
const noun = document.querySelector('.noun');

nbtn.addEventListener('click', function () {
    const randomNoun = getRendomNoun();
    noun.textContent = nouns[randomNoun];
});

function getRendomNoun() {
    return Math.floor(Math.random() * nouns.length);
};


//Task Changer
const tasks = ['loves', 'can play', "doesn't like", "can't play", 'has a'];
const tbtn = document.getElementById('t-btn');
const task = document.querySelector('.task');

tbtn.addEventListener('click', function () {
    const randomTask = getRendomTask();
    task.textContent = tasks[randomTask];
});

function getRendomTask() {
    return Math.floor(Math.random() * tasks.length);
};


//Object Changer
const objects = ['guitar.', 'piano.', "drum.", "fluet.", 'ukulele.'];
const obtn = document.getElementById('o-btn');
const object = document.querySelector('.object');

obtn.addEventListener('click', function () {
    const randomObject = getRendomObject();
    object.textContent = objects[randomObject];
});

function getRendomObject() {
    return Math.floor(Math.random() * objects.length);
};

//Random Sentence
const rbtn = document.getElementById('r-btn');

rbtn.addEventListener('click', function () {
    const randomNoun = getRendomNoun();
    const randomTask = getRendomTask();
    const randomObject = getRendomObject();

    noun.textContent = nouns[randomNoun];
    task.textContent = tasks[randomTask];
    object.textContent = objects[randomObject];
});


console.log(getRendomNoun(), getRendomTask(), getRendomObject());