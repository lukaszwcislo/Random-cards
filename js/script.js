    const sound = document.getElementById('sound');
    const sound2 = document.getElementById('sound2');
    const point = document.getElementById('point');
    const clickEcho = document.getElementById('clickEcho');
    const marimba = document.getElementById('marimba');
    
function play(){ // funkcja dźwięku przycisku
    sound.play();
    
    setTimeout(
      function() {
        sound2.play();}, 300); //dżwięk pierwszej karty
    
    setTimeout(
      function() {
        sound3.play();}, 400); //dżwięk drugiej karty
    
    setTimeout(
      function() {
        sound4.play();}, 500); //dżwięk trzeciej karty
    };

function soundPoint() { 
    clickEcho.play();
    setTimeout(function(){
        marimba.play()}, 700) // dźwięk kiedy zdobywamy punkt
};

function play2(){ // dźwięk kliknięcia w kartę
            sound2.play()
    };

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // funkcja losuje 6 cyfr ze zmiennej 'letters', zwraca color który jest przypisany do koloru tła
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
//        var backgrounds = ['hulk.jpg', 'hulk-2.jpg', 'logan.jpg', 'spider-man.png', 'spider-man-2.jpg', 'volverine.jpg', 'green-lantern.jpg', 'doctor-strange.jpg', 'deadpool.jpg', 'venom.jpg', 'iron-man.jpg'];
 var backgrounds = ['hulk-2.jpg', 'spider-man.png', 'volverine.jpg'];

        function randomImage() { // losuje 1 element z tablicy 'backgrounds', który jest przypisany do poszczególnej karty
            const index = Math.floor(Math.random()*backgrounds.length);  
            const myImage = `url(${imagePath}${backgrounds[index]})`;

            return myImage;
        }

    let myClicks = 0;
    clicks.textContent = myClicks++; // ilość kliknięć
    let myScore = 0;
    score.textContent = myScore++; // ilość zdobytych punktów

function getPoint() {

        if (box1.style.backgroundImage === box2.style.backgroundImage 
            && box1.style.backgroundImage === box3.style.backgroundImage){ 
            // instrukcja co ma się wykonać gdy trafimy 3 takie same karty
            console.log('YEAHHH!!! :)');
            soundPoint(); // dźwięk zdobycia punktu
            setTimeout(function(){
            score.textContent = myScore++; //dodaje punkt
            title.classList.add('getPointTitle'); //dodaje klase z animacją napisu z wynikiem
            }, 500); //opóźniona o 0,5 s.
            setTimeout(function(){
                title.classList.remove('getPointTite');
            }, 2500); // zabiera klasę z animacją
            box1.classList.add('getPoint'); //dodaję klasę z animacją karty
            setTimeout(function(){
                box1.classList.remove('getPoint'); //zabiera klasę z animacją karty
            }, 2500);
            box2.classList.add('getPoint'); // jw do 2 karty
            setTimeout(function(){
                box2.classList.remove('getPoint'); // jw do 2 karty
            }, 2500);
            box3.classList.add('getPoint'); // jw do 3 karty
            setTimeout(function(){
                box3.classList.remove('getPoint'); // jw do 3 karty
            }, 2500);
            background.style.backgroundColor = randomColor();
        };
};


    btn.addEventListener('click', function() {
        box1.style.backgroundImage = randomImage(); // przypisanie karcie 1 wylosowanego obrazu tła
        box1.classList.toggle('rotate'); // dodanie klasy z animacją rotacji
        box2.style.backgroundImage = randomImage();
        box2.classList.toggle('rotate');
        box3.style.backgroundImage = randomImage();
        box3.classList.toggle('rotate');
        clicks.textContent = myClicks++;
        getPoint();
    });

function getPointCard() {
    
            if (box1.style.backgroundImage === box2.style.backgroundImage 
            && box1.style.backgroundImage === box3.style.backgroundImage){
                console.log('YEAHHH!!! :)');
                soundPoint();
                setTimeout(function(){
                score.textContent = myScore++;
                title.classList.add('getPointTitle');
                }, 500);
                setTimeout(function(){
                    title.classList.remove('getPointTitle');
                }, 2500);
                box1.classList.add('getPoint');
                setTimeout(function(){
                    box1.classList.remove('getPoint');
                }, 2500);
                box2.classList.add('getPoint');
                setTimeout(function(){
                    box2.classList.remove('getPoint');
                }, 2500);
                box3.classList.add('getPoint');
                setTimeout(function(){
                    box3.classList.remove('getPoint');
                }, 2500);
                background.style.backgroundColor = randomColor();
            };
};
    
    box1.addEventListener('click', function (){
        this.style.backgroundImage = randomImage();
        this.classList.toggle('rotate');
        clicks.textContent = myClicks++;
        this.classList.add('transformNoDelay');
        setTimeout(function(){
            box1.classList.remove('transformNoDelay');
        }, 200);
        getPointCard();
    });
    box2.addEventListener('click', function (){
        this.style.backgroundImage = randomImage();
        this.classList.toggle('rotate');
        clicks.textContent = myClicks++;
        this.classList.add('transformNoDelay');
        setTimeout(function(){
            box2.classList.remove('transformNoDelay');
        }, 200);
        getPointCard();
    });
    box3.addEventListener('click', function (){
        this.style.backgroundImage = randomImage();
        this.classList.toggle('rotate');
        clicks.textContent = myClicks++;
        this.classList.add('transformNoDelay');
        setTimeout(function(){
            box3.classList.remove('transformNoDelay');
        }, 200);
        getPointCard();
    });
   