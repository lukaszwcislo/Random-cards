    const sound = document.getElementById('sound');
    const sound2 = document.getElementById('sound2');
    const point = document.getElementById('point');
    
function play(){
    sound.play();
    
    setTimeout(
      function() {
        sound2.play();}, 300);
    
    setTimeout(
      function() {
        sound3.play();}, 400);
    
    setTimeout(
      function() {
        sound4.play();}, 500);
    };

function soundPoint() {
    setTimeout(
        function() {
    point.play();}, 600);
};

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
    
const btn = document.querySelector('.button');
const background = document.querySelector('.background');
const box = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
let score = document.getElementById('score');
let clicks = document.getElementById('clicks');

    
        const imagePath = 'img/';
        var backgrounds = ['hulk.jpg', 'hulk-2.jpg', 'logan.jpg', 'spider-man.png', 'spider-man-2.jpg', 'volverine.jpg', 'green-lantern.jpg', 'doctor-strange.jpg', 'deadpool.jpg', 'venom.jpg', 'iron-man.jpg']

        function randomImage() {
            const index = Math.floor(Math.random()*backgrounds.length);  
            const myImage = `url(${imagePath}${backgrounds[index]})`;

            return myImage;
        }

    let myClicks = 0;
    clicks.textContent = myClicks++;
    let myScore = 0;
    score.textContent = myScore++;

    btn.addEventListener('click', function () {

        box.style.backgroundImage = randomImage();
        box.classList.toggle('rotate');
        box2.style.backgroundImage = randomImage();
        box2.classList.toggle('rotate');
        box3.style.backgroundImage = randomImage();
        box3.classList.toggle('rotate');
        background.style.backgroundColor = randomColor();
        clicks.textContent = myClicks++;
        
        console.log(box.style.backgroundImage);
        console.log(box2.style.backgroundImage);
        console.log(box3.style.backgroundImage);
        console.log(myScore);
        console.log(myClicks);

        
        if (box.style.backgroundImage === box2.style.backgroundImage 
            && box.style.backgroundImage === box3.style.backgroundImage){
            console.log('YEAHHH!!! :)');
            soundPoint();
            score.textContent = myScore++;
            };
        
    });
    
    function play2(){
    setTimeout(function(){
            sound2.play()
        }, 300)
    }
    
    box.addEventListener('click', function (){
        box.style.backgroundImage = randomImage();
        this.classList.toggle('rotate');
        console.log(box.style.backgroundImage);
        console.log(box2.style.backgroundImage);
        console.log(box3.style.backgroundImage);
        clicks.textContent = myClicks++;

        
        if (box.style.backgroundImage === box2.style.backgroundImage 
            && box.style.backgroundImage === box3.style.backgroundImage){
            console.log('YEAHHH!!! :)');
            soundPoint();
            score.textContent = myScore++;
            };
        
    });
    box2.addEventListener('click', function (){
        box2.style.backgroundImage = randomImage();
        this.classList.toggle('rotate');
        console.log(box.style.backgroundImage);
        console.log(box2.style.backgroundImage);
        console.log(box3.style.backgroundImage);
        clicks.textContent = myClicks++;

        
        if (box.style.backgroundImage === box2.style.backgroundImage 
            && box.style.backgroundImage === box3.style.backgroundImage){
            console.log('YEAHHH!!! :)');
            soundPoint();
            score.textContent = myScore++;
            };
    });
    box3.addEventListener('click', function (){
        box3.style.backgroundImage = randomImage();
        this.classList.toggle('rotate');
        console.log(box.style.backgroundImage);
        console.log(box2.style.backgroundImage);
        console.log(box3.style.backgroundImage);
        clicks.textContent = myClicks++;

        
        if (box.style.backgroundImage === box2.style.backgroundImage 
            && box.style.backgroundImage === box3.style.backgroundImage){
            console.log('YEAHHH!!! :)');
            soundPoint();
            score.textContent = myScore++;
            };
        });
   