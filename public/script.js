
if (document.readyState != 'loading') onDocumentReady();
else document.addEventListener('DOMContentLoaded', onDocumentReady);


var counter = 0;
var decreaser = 10;
//Receives a number from the Arduino. In this example a "1" or a "2"
function onDocumentReady() {
    var socket = new ReconnectingWebsocket("ws://" + location.host + "/serial");
    socket.onmessage = function(evt) {
        const thing = document.getElementById('heavy');
        const stol = document.getElementById('chairdata');

        
      
       
        console.log(evt.data);

      

             if(evt.data > 50){
                add();
                document.getElementById("knapparna").innerHTML = counter + " minutes";
                document.getElementById("x").src="light-person.svg"
             }
        
          
             if(evt.data > 651) {
                document.getElementById("x").src="heavy-person.svg"
          
              thing.classList.add('danger2');
                
                thing.classList.remove('danger1');
                

             }
             if (evt.data < 49) {
              
                    
                document.getElementById("x").src="nobody-sitting.svg"
                 
                
                thing.classList.remove('danger2');
               
                thing.classList.add('danger1');
             }
    };
}

function add() {
    counter += 1;
  }

/*
function decrease() {
    decreaser -= 1;
    document.getElementById("knapparna2").innerHTML = decreaser;
}*/
const timerCount = document.getElementById('done');
    var timeleft = 10;
    function downloadtimer() { setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        document.getElementById("done").innerHTML = "Break over";
        
    },1000);
    }

    var timeleft2 = 10;
    function downloadtimer2() { setInterval(function(){
    timeleft2--;
    document.getElementById("countdowntimer2").textContent = timeleft2;
    if(timeleft2 <= 0)
        document.getElementById("done2").innerHTML = "done";
    },1000);
    }