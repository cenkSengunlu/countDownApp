let userTime = 0;
let count = 0;
let control = 0;
let intervalID = null;

function controlEvent(){
    let input = document.querySelector("#countDownInput");
    input.onkeydown = function(event){
        if(event.key === "e" || event.key === "E"){
            return false;
        }
    }
}

controlEvent();

document.querySelector("#startButton").addEventListener("click", clickStartBtn);
function clickStartBtn() {
    userTime = document.querySelector(`#countDownInput`).value;
    console.log(userTime);
    if(userTime === "" || userTime === "0"){
        return;
    }
    logic(userTime);
};

function logic(time){
    const start = Date.now();
    count = Date.now();
    
    document.querySelector('#countDownInput').disabled = true;
    document.querySelector('#startButton').classList.add('hidden');
    document.querySelector('#nothing').classList.remove('mb-52');
    document.querySelector('#geriSayim').classList.remove('hidden');
    document.querySelector('#stopButton').classList.remove('hidden');
    
    control = time - Math.floor((count - start) / 1000);
    document.querySelector('#geriSayim').innerHTML = control;
    intervalID = setInterval(function () {
        count = Date.now();
        control = time - Math.floor((count - start) / 1000);
        if(control === -1){
            document.querySelector('#countDownInput').disabled = false;
            clearInterval(intervalID);
            
            document.querySelector('#geriSayim').innerHTML = 0;
            document.querySelector('#stopButton').classList.add('hidden');
            document.querySelector('#restartButton').classList.remove('hidden');
        }
        else{
            document.querySelector('#geriSayim').innerHTML = control ;
            console.log(control);
        }
    },1000);
};

document.querySelector("#restartButton").addEventListener("click", clickRestartBtn);
function clickRestartBtn() {
    document.querySelector('#restartButton').classList.add('hidden');
    clickStartBtn();
};

document.querySelector("#stopButton").addEventListener("click", clickStopBtn);
function clickStopBtn() {
    document.querySelector('#stopButton').classList.add('hidden');
    document.querySelector('#continueButton').classList.remove('hidden');
    clearInterval(intervalID);
};

document.querySelector("#continueButton").addEventListener("click", clickContinueBtn);
function clickContinueBtn() {
    document.querySelector('#stopButton').classList.remove('hidden');
    document.querySelector('#continueButton').classList.add('hidden');
    logic(control);
};