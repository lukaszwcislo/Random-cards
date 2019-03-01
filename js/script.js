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
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
let score = document.getElementById('score');
let clicks = document.getElementById('clicks');
let title = document.querySelector('.title');

    
        const imagePath = 'img/';
        var backgrounds = ['hulk.jpg', 'hulk-2.jpg', 'logan.jpg', 'spider-man.png', 'spider-man-2.jpg', 'volverine.jpg', 'green-lantern.jpg', 'doctor-strange.jpg', 'deadpool.jpg', 'venom.jpg', 'iron-man.jpg'];

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

        box1.style.backgroundImage = randomImage();
        box1.classList.toggle('rotate');
        box2.style.backgroundImage = randomImage();
        box2.classList.toggle('rotate');
        box3.style.backgroundImage = randomImage();
        box3.classList.toggle('rotate');
        background.style.backgroundColor = randomColor();
        clicks.textContent = myClicks++;
        
        console.log(box1.style.backgroundImage);
        console.log(box2.style.backgroundImage);
        console.log(box3.style.backgroundImage);
        console.log(myScore);
        console.log(myClicks);

        
        if (box1.style.backgroundImage === box2.style.backgroundImage 
            && box1.style.backgroundImage === box3.style.backgroundImage){
            console.log('YEAHHH!!! :)');
            soundPoint();
            score.textContent = myScore++;
            title.classList.add('getPoint');
            setTimeout(function(){
                title.classList.remove('getPoint');
            }, 1500);
            box1.classList.add('getPoint');
            setTimeout(function(){
                box1.classList.remove('getPoint');
            }, 1500);
            box2.classList.add('getPoint');
            setTimeout(function(){
                box2.classList.remove('getPoint');
            }, 1500);
            box3.classList.add('getPoint');
            setTimeout(function(){
                box3.classList.remove('getPoint');
            }, 1500);
            };
        
        
    });
    
    function play2(){
            sound2.play()
    };
    
    box1.addEventListener('click', function (){
        box1.style.backgroundImage = randomImage();
        this.classList.toggle('rotate');
        console.log(box1.style.backgroundImage);
        console.log(box2.style.backgroundImage);
        console.log(box3.style.backgroundImage);
        clicks.textContent = myClicks++;
        this.classList.add('transformNoDelay');
        setTimeout(function(){
            box1.classList.remove('transformNoDelay');
        }, 200);

        
        if (box1.style.backgroundImage === box2.style.backgroundImage 
            && box1.style.backgroundImage === box3.style.backgroundImage){
            console.log('YEAHHH!!! :)');
            soundPoint();
            score.textContent = myScore++;
            title.classList.add('getPoint');
            setTimeout(function(){
                title.classList.remove('getPoint');
            }, 1500);
            box1.classList.add('getPoint');
            setTimeout(function(){
                box1.classList.remove('getPoint');
            }, 1500);
            box2.classList.add('getPoint');
            setTimeout(function(){
                box2.classList.remove('getPoint');
            }, 1500);
            box3.classList.add('getPoint');
            setTimeout(function(){
                box3.classList.remove('getPoint');
            }, 1500);
            };
        
    });
    box2.addEventListener('click', function (){
        box2.style.backgroundImage = randomImage();
        this.classList.toggle('rotate');
        console.log(box1.style.backgroundImage);
        console.log(box2.style.backgroundImage);
        console.log(box3.style.backgroundImage);
        clicks.textContent = myClicks++;
        this.classList.add('transformNoDelay');
        setTimeout(function(){
            box2.classList.remove('transformNoDelay');
        }, 200);

        
        if (box1.style.backgroundImage === box2.style.backgroundImage 
            && box1.style.backgroundImage === box3.style.backgroundImage){
            console.log('YEAHHH!!! :)');
            soundPoint();
            score.textContent = myScore++;
            title.classList.add('getPoint');
            setTimeout(function(){
                title.classList.remove('getPoint');
            }, 1500);
            box1.classList.add('getPoint');
            setTimeout(function(){
                box1.classList.remove('getPoint');
            }, 1500);
            box2.classList.add('getPoint');
            setTimeout(function(){
                box2.classList.remove('getPoint');
            }, 1500);
            box3.classList.add('getPoint');
            setTimeout(function(){
                box3.classList.remove('getPoint');
            }, 1500);
            };
    });
    box3.addEventListener('click', function (){
        box3.style.backgroundImage = randomImage();
        this.classList.toggle('rotate');
        console.log(box1.style.backgroundImage);
        console.log(box2.style.backgroundImage);
        console.log(box3.style.backgroundImage);
        clicks.textContent = myClicks++;
        this.classList.add('transformNoDelay');
        setTimeout(function(){
            box3.classList.remove('transformNoDelay');
        }, 200);

        
        if (box1.style.backgroundImage === box2.style.backgroundImage 
            && box1.style.backgroundImage === box3.style.backgroundImage){
            console.log('YEAHHH!!! :)');
            soundPoint();
            score.textContent = myScore++;
            title.classList.add('getPoint');
            setTimeout(function(){
                title.classList.remove('getPoint');
            }, 1500);
            box1.classList.add('getPoint');
            setTimeout(function(){
                box1.classList.remove('getPoint');
            }, 1500);
            box2.classList.add('getPoint');
            setTimeout(function(){
                box2.classList.remove('getPoint');
            }, 1500);
            box3.classList.add('getPoint');
            setTimeout(function(){
                box3.classList.remove('getPoint');
            }, 1500);
            };
        });
   