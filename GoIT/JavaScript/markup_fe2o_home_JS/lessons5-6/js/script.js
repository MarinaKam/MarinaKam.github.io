var t;
var tm = 0;
var init = 1;
var h = 0;
var m = 0;
var s = 0;
var ms = 0;
function myStopTimer() {
  init = 1;
}
function myStartTimer() {
  tm++;
  if (tm == 1) {
    setInterval(function(){
      if (init == 0) ms++;
      if (ms>=100){
        s++;
        ms%=100;
      }
      if (s>=60) {
        m++;
        s%=60;
      }
      if (m>=60) {
        h++;
        m%=60;
      }
      if (init == 0) 
        t = document.getElementById('timerDemo'); 
        t.innerHTML = (h-h%10)/10 + '' + h%10 + ':' + (m-m%10)/10 + '' + m%10 + ':' + (s-s%10)/10 + s%10  + '<span>' + (ms-ms%10)/10 + ms%10 + '</span>';},10); 
  
      }
      
    init = 0; 
} 
function myResetTimer() {
  ms = s = m = h = 0;
  clearInterval(myStartTimer());
  document.getElementById('timerDemo').innerHTML = '00:00:00<span>00</span>';
  myStopTimer();
}

