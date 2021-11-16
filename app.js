let imagesArray1 = ['jaw.jpeg', 'was.png', 'cript.jpg'];
let imagesArray2 = ['object.jpeg', 'ive.jpg', 'see.jpg'];
let answerArray = ['javascript', 'objective c'];
let imageCount = 1;
let Score = 0;
let Level2 = 0;

function newGame(){
    Levels('Level 1', 'Guess what is the programming language name ?');
}

function Levels(levelName, Question){
    var level2 = getParameters('level2');
    if(level2){
        imageCount = 1;
        Level2 = 1;
        var scores = getParameters('score');
        Score = scores;
    }
    document.getElementById('levels').innerHTML = levelName;
    document.getElementById('questions').innerHTML = Question;
    var images = new Image(150, 150);
    let change = ChangeImage(images, imageCount);
    change.id = 'image_no' + `${imageCount}`;
    document.getElementById('images').appendChild(change);
}

function nextImage(){
    imageCount += 1;
    if(imageCount != 4){
        var images = new Image(150, 150);
        let change = ChangeImage(images, imageCount);
        change.id = 'image_no' + `${imageCount}`;
        document.getElementById('images').appendChild(change);
    } else {
        document.getElementById('image_limit').innerHTML = 'Image limit exceeds';
    }
}

function checkAnswer(){
    let Answer = document.getElementById('answer').value;
    let score;
    if(imageCount > 3){
        score = 100/3;
    } else {
        score = 100/imageCount;
    }
    if(Answer.toLowerCase() == answerArray[Level2]){
        if(Level2) {
            score = score + Number(Score);
            window.location.href = `gameResult.html?score=${score}&won=true`;
        } else {
            window.location.href = `gameZoneL2.html?score=${score}&level2=true`;
        }
    } else if(Answer == '') {
        document.getElementById('image_limit').innerHTML = 'Please Enter Answer !';
    } else if(Answer || imageCount == 3){
        window.location.href = 'gameResult.html?score=0&won=false';
    }
}

function getResult(){
    var result = getParameters('won');
    var score = getParameters('score');
    document.getElementById('score').innerHTML = 'Score :- ' + Math.round(score) + '/200';
    if(result) {
        document.getElementById('wonORloss').innerHTML = 'You Won the Game';
    } else {
        document.getElementById('wonORloss').innerHTML = 'You Loss the Game';
    }
}

function playAgain(){
    for(let i = 0; i < imageCount;i++){
        let iDs = 'image_no' + `${i + 1}`;
        var parent = document.getElementById(iDs);
        parent.parentNode.removeChild(images);
    }
    imageCount = 1;
    Levels('Level 1', 'Guess what is the programming language name ?');
}

function closeTab(){
    if(confirm('Close Window?')){
        Window.close();
    }
}

getParameters = (key) => {
    address = window.location.search
    parameterList = new URLSearchParams(address)
    return parameterList.get(key)
}

function ChangeImage(images, index){
    if(Level2){
        images.src = imagesArray2[index - 1];
        return images;
    } else {
        images.src = imagesArray1[index - 1];
        return images;
    }
}