let gameStarted = document.getElementById('start_game');
let gameLevel = document.getElementById('levels');
const nextImage = document.getElementById('next_image');
let nextImageCount = 1;

console.log(gameStarted);
function startGame(){
    // gameStarted.addEventListener('click', event => {
    //     event.preventDefault();
    //     startGame();
    // });
    document.getElementById('first_page').style.display = 'none';
    document.getElementById('second_page').style.display = 'flex';
    level('Level 1', 'Guess what is the programming language name ?');
}

function level(levelName, Question){
    document.getElementById('levels').innerHTML = levelName;
    document.getElementById('question').innerHTML = Question;
    var image = new Image(150, 150);
    image.src = 'quizBackground.jpg';
    document.getElementById('images').appendChild(image);
}

function goImage() {
    console.log("trueeeee");
    if (nextImageCount != 3) {
        nextImageCount += 1;
        var image = new Image(150, 150);
        image.src = 'quizBackground.jpg';
        document.getElementById('images').appendChild(image);
    } else {
        alert("Image Limit Exceeds");
        nextImageCount = 0;
    }
}
