gsap.from("#myVideoWork", {
    duration: 2,
    opacity: 0,
  })

gsap.to("#headerUp", {
    text: "Timer for work...",
    delay: 2,
    duration: 3, 
    ease: "power1.in",
  })

gsap.to("#headerBottom", {
    text: "...and leisure",
    delay: 7,
    duration: 3, 
    ease: "power1.in",
  })

gsap.from ("#btn", {
    delay: 9,
    opacity: 0,
    duration: 3,
    stagger: 1
  })

const button = document.querySelector("#btn");
button.addEventListener ("click", Gotimer)
    function Gotimer(){

            let timer = document.querySelector("#timerMinute").value;
            const countdown = document.querySelector("#countdown");
            let amountTime = timer*60;
           
              function time() {
               
                let minutes = Math.floor (amountTime/60);
                let seconds = amountTime%60;
                     
                if (minutes < 10){
                    minutes = "0" + minutes;
                }
                if (seconds < 10){
                    seconds = "0" + seconds;
                }
                countdown.textContent = `${minutes}:${seconds}`;
                amountTime --;
          
                if (amountTime < 0){
                    stopTimer();
                    amountTime = 0;
                }
                function stopTimer(){
                    clearInterval(timerId);
                    timeLeiuser();
                }
           
            }
            let timerId = setInterval(time, 1000)
          }
/*
    let timer = document.querySelector("#timerMinute").value;
    const countdown = document.querySelector("#countdown");
    let amountTime = timer*60;
                
        let minutes = Math.floor (amountTime/60);
        let seconds = amountTime%60;

        if (minutes < 10){
            minutes = "0" + minutes;
        }
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        countdown.textContent = `${minutes}:${seconds}`;
        amountTime --;

        if (amountTime < 0){
            stopTimer();
            amountTime = 0;
        }
        function stopTimer(){
            clearInterval(timerId);
            timeLeiuser();
        }
    }
    let timerId = setInterval(Gotimer, 1000)
    Gotimer()*/

//секция выбора времени тамера
const setTimer = document.querySelector("#setTimer");
setTimer.addEventListener("click", showTime);
function showTime(e){
    e.preventDefault();
    timerMinute.style.display = "block";
}

    function timeLeiuser(){
        const myVideoWork = document.querySelector("#myVideoWork");
        const myVideoLeisure =document.querySelector("#myVideoLeisure");
        
        myVideoWorkTimerOut()

    }
    function myVideoWorkTimerOut(){
        gsap.to ("#myVideoWork", {
            duration: 2, 
            delay: 1, 
            x: -2000, 
            ease: 'power2.inOut', 
            opacity: 0,
        })
        myVideoLeisure.style.display = "block";
        myVideoLeisure.classList.add("myVideo");
        myVideoLeisureTimerIn()
      
    }

        function myVideoLeisureTimerIn(){
            gsap.from ("#myVideoLeisure", {
                duration: 2,
                delay: 3,
                opacity: 0,
                y: -1000,
            })
            headerUpNew()
        }

        function headerUpNew(){
            const containerCountdown = document.querySelector("#container-countdown");
            const countdownLeisure = document.createElement("p");
            countdownLeisure.innerHTML = "Go leisure!..";
            countdownLeisure.classList.add ("leiuserTime");
                gsap.to(".leiuserTime", {//не работает
                    delay: 3,
                    duration: 2,
                })
            containerCountdown.appendChild(countdownLeisure);
            }
        
/*

let timer = 30;
let amountTime = timer*60;

    function calculateTime(){
        const countdown = document.querySelector("#countdown");
        let minutes = Math.floor (amountTime/60);
        let seconds = amountTime%60;
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        countdown.textContent = `${minutes}:${seconds}`;
        amountTime--;
        if (amountTime < 0){
            stopTimer();
            amountTime = 0;
        }
        function stopTimer(){
            clearInterval(timerId);
        }
    }
    let timerId = setInterval(calculateTime, 1000);
    */