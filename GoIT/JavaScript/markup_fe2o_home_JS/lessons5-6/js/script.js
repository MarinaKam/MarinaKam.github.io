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
  if (tm == 1) setInterval(function(){
      if (init == 0) ms++;
      if (ms>=1000){
        s++;
        ms%=1000;
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
      document.getElementById('timerDemo').innerHTML = (h-h%10)/10 + '' + h%10 + ':' + 
      (m-m%10)/10 + '' + m%10 + ':' + (s-s%10)/10 + s%10  + '<span>' + (ms-ms%10)/10 + ms%10 + '</span>';},-500000); 
    init = 0; 
} 
function myResetTimer() {
  ms = 0;
  clearTimeout(myStartTimer());
  document.getElementById('timerDemo').innerHTML = '00:00:00<span>00</span>';
  myStopTimer();
}

